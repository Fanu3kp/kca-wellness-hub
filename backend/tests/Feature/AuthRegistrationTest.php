<?php

namespace Tests\Feature;

use App\Mail\VerificationCode as VerificationCodeMail;
use App\Models\AuditLog;
use App\Models\Campus;
use App\Models\Role;
use App\Models\StaffRegistration;
use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class AuthRegistrationTest extends TestCase
{
    use RefreshDatabase;

    private function approveCounselorNumber(string $number = 'PC-2001'): StaffRegistration
    {
        return StaffRegistration::create([
            'role' => StaffRegistration::ROLE_PEER_COUNSELOR,
            'number' => $number,
            'is_active' => true,
        ]);
    }

    private function approveStaffNumber(string $number = 'GS-2001', string $role = StaffRegistration::ROLE_GUIDANCE_STAFF): StaffRegistration
    {
        return StaffRegistration::create([
            'role' => $role,
            'number' => $number,
            'is_active' => true,
        ]);
    }

    public function test_student_can_register_with_a_campus(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response->assertCreated()
            ->assertJsonPath('data.user.email', 'new.student@students.kcau.ac.ke')
            ->assertJsonPath('data.profile.campus_id', $campus->id)
            ->assertJsonPath('data.verification_needed', true);

        $this->assertEmpty($response->json('data.token'));
        $this->assertDatabaseHas('users', [
            'email' => 'new.student@students.kcau.ac.ke',
            'is_active' => true,
        ]);
        $this->assertDatabaseHas('profiles', [
            'campus_id' => $campus->id,
        ]);
        $this->assertDatabaseHas('role_user', [
            'user_id' => User::where('email', 'new.student@students.kcau.ac.ke')->value('id'),
            'role_id' => Role::where('name', 'student')->value('id'),
        ]);
        $this->assertDatabaseHas('audit_logs', [
            'action' => 'user.registered',
            'entity_type' => User::class,
        ]);
        $this->assertDatabaseHas('verification_codes', [
            'email' => 'new.student@students.kcau.ac.ke',
        ]);
        $this->assertSame('new.student@students.kcau.ac.ke', AuditLog::where('action', 'user.registered')->value('metadata')['email']);
    }

    public function test_registration_rejects_an_unknown_campus(): void
    {
        $response = $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => 999999,
        ]);

        $response->assertUnprocessable();
        $this->assertDatabaseMissing('users', [
            'email' => 'new.student@students.kcau.ac.ke',
        ]);
    }

    public function test_student_registration_rejects_non_university_email(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/register', [
            'name' => 'Random Person',
            'email' => 'random@gmail.com',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('email');

        $this->assertDatabaseMissing('users', [
            'email' => 'random@gmail.com',
        ]);
    }

    public function test_student_registration_rejects_staff_email(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/register', [
            'name' => 'Staff Person',
            'email' => 'staff@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('email');
    }

    public function test_existing_user_can_register_as_peer_counselor(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber();

        $this->postJson('/api/register', [
            'name' => 'Existing User',
            'email' => 'existing@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Existing User',
            'email' => 'existing@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2001',
        ]);

        $response->assertOk()
            ->assertJsonPath('data.user.email', 'existing@students.kcau.ac.ke');

        $user = User::where('email', 'existing@students.kcau.ac.ke')->first();
        $this->assertTrue($user->hasRole('peer_counselor'));
        $this->assertSame('PC-2001', $user->profile->staff_number);
    }

    public function test_existing_user_can_register_as_guidance_staff(): void
    {
        $campus = Campus::factory()->create();
        $this->approveStaffNumber();

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Existing Staff',
            'email' => 'existing@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'GS-2001',
        ]);

        $response->assertCreated()
            ->assertJsonPath('data.user.email', 'existing@kcau.ac.ke');

        $user = User::where('email', 'existing@kcau.ac.ke')->first();
        $this->assertTrue($user->hasRole('guidance_staff'));
        $this->assertSame('GS-2001', $user->profile->staff_number);
    }

    public function test_student_register_then_peer_counselor_keeps_both_roles(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber();

        $this->postJson('/api/register', [
            'name' => 'Multi Role User',
            'email' => 'multi@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $this->postJson('/api/peer-counselor/register', [
            'name' => 'Multi Role User',
            'email' => 'multi@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2001',
        ]);

        $user = User::where('email', 'multi@students.kcau.ac.ke')->first();
        $this->assertTrue($user->hasRole('student'));
        $this->assertTrue($user->hasRole('peer_counselor'));
    }

    public function test_peer_counselor_registration_rejects_staff_email(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber();

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Staff Person',
            'email' => 'staff@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2001',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('email');
    }

    public function test_guidance_registration_rejects_student_email(): void
    {
        $campus = Campus::factory()->create();
        $this->approveStaffNumber();

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Student Person',
            'email' => 'student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'GS-2001',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('email');
    }

    public function test_peer_counselor_registration_requires_a_number(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'No Number',
            'email' => 'nonumber@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');

        $this->assertDatabaseMissing('users', ['email' => 'nonumber@students.kcau.ac.ke']);
    }

    public function test_peer_counselor_registration_rejects_an_unapproved_number(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Invented Number',
            'email' => 'invented@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-DOES-NOT-EXIST',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');

        $this->assertDatabaseMissing('users', ['email' => 'invented@students.kcau.ac.ke']);
    }

    public function test_peer_counselor_registration_rejects_an_inactive_number(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber('PC-2002');
        StaffRegistration::where('number', 'PC-2002')->update(['is_active' => false]);

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Revoked',
            'email' => 'revoked@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2002',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');
    }

    public function test_a_number_cannot_be_claimed_by_two_different_people(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber('PC-2003');

        $this->postJson('/api/peer-counselor/register', [
            'name' => 'First Claim',
            'email' => 'first@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2003',
        ])->assertCreated();

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Second Claim',
            'email' => 'second@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2003',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');

        $this->assertDatabaseMissing('users', ['email' => 'second@students.kcau.ac.ke']);
        $this->assertSame(
            User::where('email', 'first@students.kcau.ac.ke')->value('id'),
            StaffRegistration::where('number', 'PC-2003')->value('claimed_by')
        );
    }

    public function test_a_number_reserved_for_another_email_is_rejected(): void
    {
        $campus = Campus::factory()->create();
        StaffRegistration::create([
            'role' => StaffRegistration::ROLE_PEER_COUNSELOR,
            'number' => 'PC-2004',
            'email' => 'owner@students.kcau.ac.ke',
            'is_active' => true,
        ]);

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Wrong Owner',
            'email' => 'impostor@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'PC-2004',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');
    }

    public function test_guidance_registration_requires_a_number(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'No Number',
            'email' => 'nostaff@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('staff_number');

        $this->assertDatabaseMissing('users', ['email' => 'nostaff@kcau.ac.ke']);
    }

    public function test_guidance_registration_rejects_an_unapproved_number(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Invented',
            'email' => 'invented@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'GS-NOT-REAL',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('staff_number');
    }

    public function test_guidance_registration_rejects_a_counsellor_number(): void
    {
        $campus = Campus::factory()->create();
        $this->approveCounselorNumber('PC-2005');

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Cross Role',
            'email' => 'crossrole@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'PC-2005',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('staff_number');
    }

    public function test_peer_counselor_registration_rejects_a_staff_number(): void
    {
        $campus = Campus::factory()->create();
        $this->approveStaffNumber('GS-2005');

        $response = $this->postJson('/api/peer-counselor/register', [
            'name' => 'Cross Role',
            'email' => 'crossrole@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'counselor_number' => 'GS-2005',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('counselor_number');
    }

    public function test_hod_registration_requires_a_hod_number(): void
    {
        $campus = Campus::factory()->create();
        $this->approveStaffNumber('HOD-2001', StaffRegistration::ROLE_HOD);

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Head Of Department',
            'email' => 'hod@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'HOD-2001',
            'is_admin' => true,
        ]);

        $response->assertCreated();

        $user = User::where('email', 'hod@kcau.ac.ke')->first();
        $this->assertTrue($user->hasRole('hod'));
    }

    public function test_hod_registration_rejects_a_plain_guidance_number(): void
    {
        $campus = Campus::factory()->create();
        $this->approveStaffNumber('GS-2006', StaffRegistration::ROLE_GUIDANCE_STAFF);

        $response = $this->postJson('/api/guidance/register', [
            'name' => 'Not A HOD',
            'email' => 'nothod@kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
            'staff_number' => 'GS-2006',
            'is_admin' => true,
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('staff_number');
    }

    public function test_registration_sends_verification_code_email(): void
    {
        Mail::fake();
        $campus = Campus::factory()->create();

        $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        Mail::assertSent(VerificationCodeMail::class, function ($mail) {
            return $mail->hasTo('new.student@students.kcau.ac.ke')
                && strlen((string) $mail->code) === 6;
        });
        $this->assertDatabaseHas('verification_codes', [
            'email' => 'new.student@students.kcau.ac.ke',
        ]);
    }

    public function test_verify_code_marks_user_verified_and_returns_token(): void
    {
        Mail::fake();
        $campus = Campus::factory()->create();

        $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $mail = Mail::sent(VerificationCodeMail::class)->first();
        $code = $mail->code;

        $response = $this->postJson('/api/verify-code', [
            'email' => 'new.student@students.kcau.ac.ke',
            'code' => $code,
        ]);

        $response->assertOk()
            ->assertJsonPath('data.user.email', 'new.student@students.kcau.ac.ke');

        $this->assertNotEmpty($response->json('data.token'));
        $this->assertNotNull(User::where('email', 'new.student@students.kcau.ac.ke')->value('email_verified_at'));
        $this->assertNotNull(VerificationCode::where('email', 'new.student@students.kcau.ac.ke')->value('used_at'));
    }

    public function test_verify_code_rejects_an_invalid_code(): void
    {
        $campus = Campus::factory()->create();

        $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response = $this->postJson('/api/verify-code', [
            'email' => 'new.student@students.kcau.ac.ke',
            'code' => '000000',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors('code');
    }

    public function test_resend_verification_code_sends_a_new_code(): void
    {
        Mail::fake();
        $campus = Campus::factory()->create();

        $this->postJson('/api/register', [
            'name' => 'New Student',
            'email' => 'new.student@students.kcau.ac.ke',
            'password' => 'secure-password',
            'password_confirmation' => 'secure-password',
            'campus_id' => $campus->id,
        ]);

        $response = $this->postJson('/api/resend-verification-code', [
            'email' => 'new.student@students.kcau.ac.ke',
        ]);

        $response->assertOk();
        $this->assertDatabaseCount('verification_codes', 2);
        $this->assertNotNull(VerificationCode::where('email', 'new.student@students.kcau.ac.ke')->latest()->value('code'));
    }
}
