<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\TwoFactorService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

/**
 * Enrolment and lifecycle management for a user's second authentication factor.
 *
 * Every state-changing action here re-checks the account password so a stolen
 * session token alone cannot silently turn on or off a second factor.
 */
class TwoFactorAuthController extends Controller
{
    public function __construct(private readonly TwoFactorService $twoFactor) {}

    public function status(Request $request): JsonResponse
    {
        $user = $request->user();

        return $this->json([
            'enabled' => $user->hasTwoFactorEnabled(),
            'confirmed_at' => $user->two_factor_confirmed_at?->toISOString(),
            'recovery_codes_remaining' => $user->hasTwoFactorEnabled()
                ? count($user->two_factor_recovery_codes ?? [])
                : 0,
        ]);
    }

    /**
     * Step 1 of enrolment. Requires the password and stores a pending secret;
     * the factor only becomes active after a code is confirmed.
     */
    public function enable(Request $request): JsonResponse
    {
        $user = $request->user();
        $payload = $request->validate([
            'password' => ['required', 'string'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
        ]);

        $this->assertPassword($user, $payload['password']);

        if ($user->hasTwoFactorEnabled()) {
            throw ValidationException::withMessages([
                'two_factor' => 'Two-factor authentication is already enabled on this account.',
            ]);
        }

        $secret = $this->twoFactor->generateSecret();
        $user->forceFill([
            'two_factor_secret' => $secret,
            'two_factor_confirmed_at' => null,
        ])->save();

        $uri = $this->twoFactor->provisioningUri(
            $secret,
            $user->email,
            $payload['campus_id'] ?? $user->profile?->campus_id
        );

        return $this->json([
            'secret' => $secret,
            'otpauth_uri' => $uri,
            'qr_code_svg' => $this->twoFactor->qrCodeSvg($uri),
        ]);
    }

    /**
     * Step 2 of enrolment: prove the authenticator is working, then hand back
     * the one-time recovery codes.
     */
    public function confirm(Request $request): JsonResponse
    {
        $user = $request->user();
        $payload = $request->validate([
            'code' => ['required', 'string'],
        ]);

        if ($user->two_factor_secret === null) {
            throw ValidationException::withMessages([
                'code' => 'Start two-factor setup before confirming a code.',
            ]);
        }

        if ($user->hasTwoFactorEnabled()) {
            throw ValidationException::withMessages([
                'code' => 'Two-factor authentication is already confirmed.',
            ]);
        }

        if (! $this->twoFactor->verify($user->two_factor_secret, $payload['code'])) {
            throw ValidationException::withMessages([
                'code' => 'That code is not valid. Check your authenticator app and try again.',
            ]);
        }

        $codes = $this->twoFactor->generateRecoveryCodes();

        $user->forceFill([
            'two_factor_confirmed_at' => now(),
            'two_factor_recovery_codes' => $this->twoFactor->hashRecoveryCodes($codes),
            'two_factor_recovery_codes_regenerated_at' => now(),
        ])->save();

        $this->audit('user.two_factor_enabled', User::class, $user->id);

        return $this->json(['recovery_codes' => $codes]);
    }

    public function disable(Request $request): JsonResponse
    {
        $user = $request->user();
        $payload = $request->validate([
            'password' => ['required', 'string'],
        ]);

        $this->assertPassword($user, $payload['password']);

        if (! $user->hasTwoFactorEnabled()) {
            throw ValidationException::withMessages([
                'two_factor' => 'Two-factor authentication is not enabled on this account.',
            ]);
        }

        $user->forceFill([
            'two_factor_secret' => null,
            'two_factor_confirmed_at' => null,
            'two_factor_recovery_codes' => null,
            'two_factor_recovery_codes_regenerated_at' => null,
        ])->save();

        $this->audit('user.two_factor_disabled', User::class, $user->id);

        return $this->message('Two-factor authentication disabled.');
    }

    /**
     * Issue a fresh set of recovery codes, invalidating the previous ones.
     */
    public function regenerateRecoveryCodes(Request $request): JsonResponse
    {
        $user = $request->user();
        $payload = $request->validate([
            'password' => ['required', 'string'],
            'code' => ['required', 'string'],
        ]);

        $this->assertPassword($user, $payload['password']);

        if (! $user->hasTwoFactorEnabled()) {
            throw ValidationException::withMessages([
                'two_factor' => 'Two-factor authentication is not enabled on this account.',
            ]);
        }

        if (! $this->twoFactor->verify($user->two_factor_secret, $payload['code'])) {
            throw ValidationException::withMessages([
                'code' => 'That code is not valid.',
            ]);
        }

        $codes = $this->twoFactor->generateRecoveryCodes();

        $user->forceFill([
            'two_factor_recovery_codes' => $this->twoFactor->hashRecoveryCodes($codes),
            'two_factor_recovery_codes_regenerated_at' => now(),
        ])->save();

        $this->audit('user.two_factor_recovery_codes_regenerated', User::class, $user->id);

        return $this->json(['recovery_codes' => $codes]);
    }

    /**
     * Second leg of login: exchange a valid challenge plus a TOTP code (or a
     * recovery code) for a real API token. Rate limited by the route.
     */
    public function verifyChallenge(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'challenge' => ['required', 'string'],
            'code' => ['required', 'string'],
        ]);

        $user = self::resolveChallenge($payload['challenge']);

        if ($user === null) {
            return response()->json([
                'message' => 'That sign-in attempt expired. Please sign in again.',
            ], 401);
        }

        $code = trim($payload['code']);

        $valid = $this->twoFactor->verify($user->two_factor_secret, $code)
            || $this->consumeRecoveryCode($user, $code);

        if (! $valid) {
            $this->audit('user.two_factor_failed', User::class, $user->id);

            return response()->json(['message' => 'That code is not valid.'], 401);
        }

        self::consumeChallenge($payload['challenge']);

        $user->update(['last_login_at' => now()]);
        $token = $user->createToken('angular-client', ['*'])->plainTextToken;

        $this->audit('user.logged_in', User::class, $user->id, ['two_factor' => true]);

        return $this->json([
            'user' => $this->userPayload($user),
            'profile' => $user->profile ? [
                'id' => $user->profile->id,
                'campus_id' => $user->profile->campus_id,
                'student_number' => $user->profile->student_number,
                'phone' => $user->profile->phone,
                'date_of_birth' => $user->profile->date_of_birth?->toISOString(),
                'gender' => $user->profile->gender,
                'bio' => $user->profile->bio,
                'emergency_contact_name' => $user->profile->emergency_contact_name,
                'emergency_contact_phone' => $user->profile->emergency_contact_phone,
                'preferences' => $user->profile->preferences,
            ] : null,
            'token' => $token,
        ]);
    }

    /**
     * Consume a recovery code, used when the authenticator is unavailable.
     * The code is single use and is removed once it succeeds.
     */
    public function consumeRecoveryCode(User $user, string $candidate): bool
    {
        $hash = $this->twoFactor->hashRecoveryCode($candidate);
        $stored = $user->two_factor_recovery_codes ?? [];

        if (! in_array($hash, $stored, true)) {
            return false;
        }

        $remaining = array_values(array_filter($stored, fn (string $existing): bool => ! hash_equals($existing, $hash)));
        $user->forceFill(['two_factor_recovery_codes' => $remaining])->save();

        return true;
    }

    public function service(): TwoFactorService
    {
        return $this->twoFactor;
    }

    private function assertPassword(User $user, string $password): void
    {
        if (! Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => 'Your password is incorrect.',
            ]);
        }
    }

    /**
     * Public route helpers for the second leg of a two-factor login.
     *
     * The challenge is held server side and the client only ever receives an
     * opaque random key, so it cannot be forged to skip the password step.
     *
     * @return array{0: string, 1: int} the opaque key and its lifetime
     */
    public static function issueChallenge(User $user): array
    {
        $minutes = (int) config('auth.two_factor_challenge_minutes', 5);
        $key = Str::random(80);

        cache()->put(self::challengeCacheKey($key), $user->id, now()->addMinutes($minutes));

        return [$key, $minutes];
    }

    public static function resolveChallenge(string $key): ?User
    {
        $cacheKey = self::challengeCacheKey($key);
        $userId = cache()->get($cacheKey);

        if ($userId === null) {
            return null;
        }

        $user = User::find($userId);

        if (! $user || ! $user->hasTwoFactorEnabled() || ! $user->is_active) {
            cache()->forget($cacheKey);

            return null;
        }

        return $user;
    }

    public static function consumeChallenge(string $key): void
    {
        cache()->forget(self::challengeCacheKey($key));
    }

    private static function challengeCacheKey(string $key): string
    {
        return 'two-factor-challenge:'.hash('sha256', $key);
    }
}
