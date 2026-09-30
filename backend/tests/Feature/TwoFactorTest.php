<?php

namespace Tests\Feature;

use App\Models\StaffRegistration;
use App\Models\User;
use App\Services\TwoFactorService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use ParagonIE\ConstantTime\Base32;
use Tests\TestCase;

/**
 * Guards the second-factor maths against the RFC 4226/6238 test vectors and
 * covers the enrolment, login challenge and recovery-code lifecycle.
 */
class TwoFactorTest extends TestCase
{
    use RefreshDatabase;

    private function service(): TwoFactorService
    {
        return app(TwoFactorService::class);
    }

    private function user(array $attributes = []): User
    {
        $campus = \App\Models\Campus::factory()->create();

        return User::create(array_merge([
            'name' => 'Two Factor User',
            'email' => 'twofactor@students.kcau.ac.ke',
            'password' => 'secure-password',
            'is_active' => true,
        ], $attributes));
    }

    public function test_totp_matches_the_rfc_4226_reference_vectors(): void
    {
        // RFC 4226 appendix D uses the ASCII secret "12345678901234567890".
        $secret = $this->rfcSecret();
        $service = $this->service();

        // TOTP is HOTP with a counter of floor(unixTime / 30), so the vectors
        // below are indexed by which 30 second step they fall in.
        $this->assertSame('755224', $service->currentCode($secret, 0));
        $this->assertSame('287082', $service->currentCode($secret, 59));
        $this->assertSame('359152', $service->currentCode($secret, 60));
        $this->assertSame('969429', $service->currentCode($secret, 90));
        $this->assertSame('520489', $service->currentCode($secret, 300));

        $this->assertTrue($service->verify($secret, '755224', 0));
        $this->assertTrue($service->verify($secret, '287082', 59));
        $this->assertTrue($service->verify($secret, '520489', 300));
    }

    public function test_verification_accepts_exactly_one_step_of_clock_drift(): void
    {
        // "359152" is the code for the third 30 second step (60-89 seconds).
        $secret = $this->rfcSecret();
        $service = $this->service();

        $this->assertTrue($service->verify($secret, '359152', 60), 'The live window must pass.');
        $this->assertTrue($service->verify($secret, '359152', 89), 'The last second of the window must pass.');
        $this->assertTrue($service->verify($secret, '359152', 30), 'A step behind is tolerated.');
        $this->assertTrue($service->verify($secret, '359152', 90), 'A step ahead is tolerated.');

        $this->assertFalse($service->verify($secret, '359152', 29), 'Two steps behind is outside the window.');
        $this->assertFalse($service->verify($secret, '359152', 120), 'Two steps ahead is outside the window.');
    }

    private function rfcSecret(): string
    {
        return Base32::encodeUpperUnpadded('12345678901234567890');
    }

    public function test_a_secret_is_long_enough_to_be_secure(): void
    {
        $secret = $this->service()->generateSecret();

        $this->assertGreaterThanOrEqual(16, strlen($secret));
        $this->assertMatchesRegularExpression('/^[A-Z2-7]+$/', $secret, 'Base32 alphabet expected.');
    }

    public function test_a_secret_length_is_google_authenticator_compatible(): void
    {
        // Google Authenticator only enrols secrets whose Base32 length is a
        // power of two; anything else is rejected by the app.
        for ($i = 0; $i < 25; $i++) {
            $length = strlen($this->service()->generateSecret());

            $this->assertSame(0, $length & ($length - 1), "Secret length {$length} is not a power of two.");
            $this->assertSame(16, $length);
        }
    }

    public function test_provisioning_uri_targets_the_right_account(): void
    {
        $secret = $this->service()->generateSecret();
        $uri = $this->service()->provisioningUri($secret, 'student@students.kcau.ac.ke');

        $this->assertStringStartsWith('otpauth://totp/', $uri);
        $this->assertStringContainsString('secret='.$secret, $uri);
        $this->assertStringContainsString(urlencode('student@students.kcau.ac.ke'), $uri);
        $this->assertStringContainsString('KCA', $uri);
    }

    public function test_qr_code_is_rendered_as_inline_svg(): void
    {
        $secret = $this->service()->generateSecret();
        $uri = $this->service()->provisioningUri($secret, 'student@students.kcau.ac.ke');
        $svg = $this->service()->qrCodeSvg($uri);

        $this->assertStringContainsString('<svg', $svg);
        $this->assertStringContainsString('</svg>', $svg);
    }

    public function test_verification_rejects_bad_codes(): void
    {
        $secret = $this->service()->generateSecret();
        $real = $this->service()->currentCode($secret);

        $wrong = $real === '000000' ? '111111' : '000000';

        $this->assertFalse($this->service()->verify($secret, null));
        $this->assertFalse($this->service()->verify($secret, ''));
        $this->assertFalse($this->service()->verify($secret, 'abcdef'));
        $this->assertFalse($this->service()->verify($secret, $wrong), 'A wrong six digit code must fail.');
        $this->assertFalse($this->service()->verify($secret, '12345'), 'Five digits is not a code.');
        $this->assertFalse($this->service()->verify($secret, '1234567'), 'Seven digits is not a code.');
    }

    public function test_verification_tolerates_spacing_from_a_phone_keyboard(): void
    {
        $secret = $this->service()->generateSecret();
        $code = $this->service()->currentCode($secret);

        $spaced = substr($code, 0, 3).' '.substr($code, 3);

        $this->assertTrue($this->service()->verify($secret, $spaced));
    }

    public function test_recovery_codes_are_unique_and_hashed(): void
    {
        $codes = $this->service()->generateRecoveryCodes();

        $this->assertCount(8, $codes);
        $this->assertSame($codes, array_unique($codes));

        $hashed = $this->service()->hashRecoveryCodes($codes);
        foreach ($codes as $index => $code) {
            $this->assertNotSame($code, $hashed[$index], 'Recovery codes must never be stored in the clear.');
            $this->assertSame($hashed[$index], $this->service()->hashRecoveryCode($code));
        }
    }

    public function test_recovery_code_hashing_is_case_insensitive(): void
    {
        $service = $this->service();
        $code = 'ABCDE-12345';

        $this->assertSame(
            $service->hashRecoveryCode(strtolower($code)),
            $service->hashRecoveryCode($code)
        );
    }

    public function test_user_reports_two_factor_only_after_confirmation(): void
    {
        $user = $this->user();

        $this->assertFalse($user->hasTwoFactorEnabled());

        $user->forceFill(['two_factor_secret' => $this->service()->generateSecret()])->save();
        $user->refresh();

        $this->assertFalse($user->hasTwoFactorEnabled(), 'A pending secret is not yet enabled.');

        $user->forceFill(['two_factor_confirmed_at' => now()])->save();
        $user->refresh();

        $this->assertTrue($user->hasTwoFactorEnabled());
    }

    public function test_two_factor_secret_is_encrypted_at_rest(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill(['two_factor_secret' => $secret])->save();

        $raw = \Illuminate\Support\Facades\DB::table('users')
            ->where('id', $user->id)
            ->value('two_factor_secret');

        $this->assertNotSame($secret, $raw, 'Secret must be ciphertext in the database.');
        $this->assertSame($secret, $user->fresh()->two_factor_secret, 'Cast must decrypt transparently.');
    }

    public function test_login_returns_a_challenge_instead_of_a_token_when_enabled(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ]);

        $response->assertOk()
            ->assertJsonPath('two_factor_required', true)
            ->assertJsonStructure(['challenge', 'expires_in_minutes']);

        $this->assertArrayNotHasKey('token', $response->json());
    }

    public function test_a_challenge_plus_valid_code_returns_a_token(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $challenge = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ])->json('challenge');

        $response = $this->postJson('/api/two-factor/verify', [
            'challenge' => $challenge,
            'code' => $this->service()->currentCode($secret),
        ]);

        $response->assertOk()
            ->assertJsonPath('data.user.email', $user->email)
            ->assertJsonStructure(['data' => ['token']]);
    }

    public function test_a_wrong_code_is_rejected(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $challenge = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ])->json('challenge');

        $this->postJson('/api/two-factor/verify', [
            'challenge' => $challenge,
            'code' => '000000',
        ])->assertUnauthorized();
    }

    public function test_a_challenge_cannot_be_reused(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $challenge = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ])->json('challenge');

        $this->postJson('/api/two-factor/verify', [
            'challenge' => $challenge,
            'code' => $this->service()->currentCode($secret),
        ])->assertOk();

        $this->postJson('/api/two-factor/verify', [
            'challenge' => $challenge,
            'code' => $this->service()->currentCode($secret),
        ])->assertUnauthorized();
    }

    public function test_a_forged_challenge_is_rejected(): void
    {
        $this->postJson('/api/two-factor/verify', [
            'challenge' => 'made-up-challenge-value',
            'code' => '123456',
        ])->assertUnauthorized();
    }

    public function test_a_recovery_code_signs_in_once_only(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $first = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ])->json('challenge');

        $this->postJson('/api/two-factor/verify', [
            'challenge' => $first,
            'code' => 'ABCDE-12345',
        ])->assertOk();

        $second = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'secure-password',
        ])->json('challenge');

        $this->postJson('/api/two-factor/verify', [
            'challenge' => $second,
            'code' => 'ABCDE-12345',
        ])->assertUnauthorized();

        $this->assertCount(0, $user->fresh()->two_factor_recovery_codes);
    }

    public function test_enrolment_requires_the_correct_password(): void
    {
        $user = $this->user();
        $token = $user->createToken('test')->plainTextToken;

        $this->withHeader('Authorization', 'Bearer '.$token)
            ->postJson('/api/two-factor/enable', ['password' => 'wrong-password'])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('password');
    }

    public function test_full_enrolment_lifecycle(): void
    {
        $user = $this->user();
        $token = $user->createToken('test')->plainTextToken;
        $headers = ['Authorization' => 'Bearer '.$token];

        $this->withHeaders($headers)
            ->getJson('/api/two-factor/status')
            ->assertOk()
            ->assertJsonPath('data.enabled', false);

        $enable = $this->withHeaders($headers)
            ->postJson('/api/two-factor/enable', ['password' => 'secure-password'])
            ->assertOk()
            ->assertJsonStructure(['data' => ['secret', 'otpauth_uri', 'qr_code_svg']]);

        $secret = $enable->json('data.secret');

        $this->withHeaders($headers)
            ->getJson('/api/two-factor/status')
            ->assertJsonPath('data.enabled', false);

        $confirm = $this->withHeaders($headers)
            ->postJson('/api/two-factor/confirm', ['code' => $this->service()->currentCode($secret)])
            ->assertOk()
            ->assertJsonStructure(['data' => ['recovery_codes']]);

        $this->assertCount(8, $confirm->json('data.recovery_codes'));

        $this->withHeaders($headers)
            ->getJson('/api/two-factor/status')
            ->assertJsonPath('data.enabled', true)
            ->assertJsonPath('data.recovery_codes_remaining', 8);
    }

    public function test_confirming_a_wrong_code_does_not_activate_two_factor(): void
    {
        $user = $this->user();
        $token = $user->createToken('test')->plainTextToken;
        $headers = ['Authorization' => 'Bearer '.$token];

        $this->withHeaders($headers)
            ->postJson('/api/two-factor/enable', ['password' => 'secure-password'])
            ->assertOk();

        $this->withHeaders($headers)
            ->postJson('/api/two-factor/confirm', ['code' => '000000'])
            ->assertUnprocessable()
            ->assertJsonValidationErrors('code');

        $this->assertFalse($user->fresh()->hasTwoFactorEnabled());
    }

    public function test_disable_requires_the_password_and_clears_the_secret(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['ABCDE-12345']),
        ])->save();

        $token = $user->createToken('test')->plainTextToken;
        $headers = ['Authorization' => 'Bearer '.$token];

        $this->withHeaders($headers)
            ->postJson('/api/two-factor/disable', ['password' => 'nope'])
            ->assertUnprocessable();

        $this->withHeaders($headers)
            ->postJson('/api/two-factor/disable', ['password' => 'secure-password'])
            ->assertOk();

        $fresh = $user->fresh();
        $this->assertFalse($fresh->hasTwoFactorEnabled());
        $this->assertNull($fresh->two_factor_secret);
    }

    public function test_regenerating_recovery_codes_invalidates_the_old_set(): void
    {
        $user = $this->user();
        $secret = $this->service()->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->service()->hashRecoveryCodes(['OLDAA-11111']),
        ])->save();

        $token = $user->createToken('test')->plainTextToken;
        $headers = ['Authorization' => 'Bearer '.$token];

        $response = $this->withHeaders($headers)
            ->postJson('/api/two-factor/recovery-codes', [
                'password' => 'secure-password',
                'code' => $this->service()->currentCode($secret),
            ])
            ->assertOk()
            ->assertJsonStructure(['data' => ['recovery_codes']]);

        $this->assertNotContains('OLDAA-11111', $response->json('data.recovery_codes'));
        $this->assertCount(8, $response->json('data.recovery_codes'));
        $this->assertNotContains(
            $this->service()->hashRecoveryCode('OLDAA-11111'),
            $user->fresh()->two_factor_recovery_codes
        );
    }

    public function test_the_secret_is_never_exposed_by_the_user_endpoint(): void
    {
        $user = $this->user();
        $user->forceFill([
            'two_factor_secret' => $this->service()->generateSecret(),
            'two_factor_confirmed_at' => now(),
        ])->save();

        $token = $user->createToken('test')->plainTextToken;

        $response = $this->withHeader('Authorization', 'Bearer '.$token)->getJson('/api/user');

        $response->assertOk();
        $this->assertStringNotContainsString('two_factor_secret', $response->getContent());
    }

    public function test_staff_registration_still_works_with_two_factor_columns_present(): void
    {
        $campus = \App\Models\Campus::factory()->create();
        StaffRegistration::create([
            'role' => StaffRegistration::ROLE_GUIDANCE_STAFF,
            'number' => 'GS-9001',
            'is_active' => true,
        ]);

        $this->postJson('/api/guidance/register', [
            'name' => 'Staff',
            'email' => 'staff2fa@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'GS-9001',
        ])->assertCreated();

        $this->assertDatabaseHas('users', ['email' => 'staff2fa@kcau.ac.ke']);
    }
}
