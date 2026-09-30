<?php

namespace App\Http\Controllers;

use App\Mail\VerificationCode as VerificationCodeMail;
use App\Models\Profile;
use App\Models\Role;
use App\Models\StaffRegistration;
use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', function ($attribute, $value, $fail) {
                if (! str_ends_with($value, 'students.kcau.ac.ke')) {
                    $fail('Only KCA University student emails (students.kcau.ac.ke) are allowed for student registration.');
                }
            }],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'campus_id' => ['required', 'exists:campuses,id'],
        ]);

        $existing = User::where('email', $payload['email'])->first();

        if ($existing) {
            $student = Role::firstOrCreate(['name' => 'student']);
            if (! $existing->hasRole('student')) {
                $existing->roles()->syncWithoutDetaching([$student->id]);
            }

            $existing->profile?->update(['campus_id' => $payload['campus_id']]);

            $this->audit('user.registered', User::class, $existing->id, ['email' => $existing->email, 'merged' => true]);
            $existing->load('profile');

            return response()->json([
                'data' => [
                    'user' => $this->userPayload($existing),
                    'profile' => $existing->profile ? [
                        'id' => $existing->profile->id,
                        'campus_id' => $existing->profile->campus_id,
                        'student_number' => $existing->profile->student_number,
                        'phone' => $existing->profile->phone,
                        'date_of_birth' => $existing->profile->date_of_birth?->toISOString(),
                        'gender' => $existing->profile->gender,
                        'bio' => $existing->profile->bio,
                        'emergency_contact_name' => $existing->profile->emergency_contact_name,
                        'emergency_contact_phone' => $existing->profile->emergency_contact_phone,
                        'preferences' => $existing->profile->preferences,
                    ] : null,
                    'token' => $existing->createToken('angular-client', ['*'])->plainTextToken,
                ],
            ], 200);
        }

        $user = DB::transaction(function () use ($payload): User {
            $user = User::create([
                'name' => $payload['name'],
                'email' => $payload['email'],
                'password' => Hash::make($payload['password']),
                'is_active' => true,
            ]);

            $student = Role::firstOrCreate(['name' => 'student']);
            $user->roles()->syncWithoutDetaching([$student->id]);

            Profile::create([
                'user_id' => $user->id,
                'campus_id' => $payload['campus_id'] ?? null,
            ]);

            return $user;
        });

        $this->audit('user.registered', User::class, $user->id, ['email' => $user->email]);
        $user->load('profile');

        $this->sendVerificationCode($user->email, $user->name);

        return response()->json([
            'data' => [
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
                'verification_needed' => true,
            ],
        ], 201);
    }

    public function guidanceRegister(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', function ($attribute, $value, $fail) {
                if (str_ends_with($value, 'students.kcau.ac.ke')) {
                    $fail('Student emails cannot register as guidance staff. Use a staff email address.');
                } elseif (! str_ends_with($value, 'kcau.ac.ke')) {
                    $fail('Only KCA University staff emails (kcau.ac.ke) are allowed for guidance staff registration.');
                }
            }],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'campus_id' => ['required', 'exists:campuses,id'],
            'staff_number' => ['required', 'string', 'max:50'],
            'is_admin' => ['sometimes', 'boolean'],
        ]);

        $wantsHod = (bool) ($payload['is_admin'] ?? false);
        $roleName = $wantsHod ? 'hod' : 'guidance_staff';

        $registration = $this->authoriseStaffNumber(
            $payload['staff_number'],
            $payload['email'],
            $wantsHod
                ? [StaffRegistration::ROLE_HOD, StaffRegistration::ROLE_GUIDANCE_STAFF]
                : [StaffRegistration::ROLE_GUIDANCE_STAFF],
            'staff_number',
            'staff number'
        );

        if ($wantsHod && $registration->role === StaffRegistration::ROLE_GUIDANCE_STAFF) {
            throw ValidationException::withMessages([
                'staff_number' => 'That staff number is not approved for campus administrator access.',
            ]);
        }

        $existing = User::where('email', $payload['email'])->first();

        if ($existing) {
            $role = Role::firstOrCreate(['name' => $roleName]);
            if (! $existing->hasRole($roleName)) {
                $existing->roles()->syncWithoutDetaching([$role->id]);
            }

            $existing->profile?->update([
                'campus_id' => $payload['campus_id'],
                'staff_number' => $registration->number,
            ]);

            $this->claimStaffNumber($registration, $existing, 'staff_number');

            $this->audit('user.registered', User::class, $existing->id, ['email' => $existing->email, 'role' => $roleName, 'merged' => true]);
            $existing->load('profile');

            return response()->json([
                'data' => [
                    'user' => $this->userPayload($existing),
                    'profile' => $existing->profile ? [
                        'id' => $existing->profile->id,
                        'campus_id' => $existing->profile->campus_id,
                        'student_number' => $existing->profile->student_number,
                        'phone' => $existing->profile->phone,
                        'date_of_birth' => $existing->profile->date_of_birth?->toISOString(),
                        'gender' => $existing->profile->gender,
                        'bio' => $existing->profile->bio,
                        'emergency_contact_name' => $existing->profile->emergency_contact_name,
                        'emergency_contact_phone' => $existing->profile->emergency_contact_phone,
                        'preferences' => $existing->profile->preferences,
                    ] : null,
                    'token' => $existing->createToken('angular-client', ['*'])->plainTextToken,
                ],
            ], 200);
        }

        $user = DB::transaction(function () use ($payload, $registration, $roleName): User {
            $user = User::create([
                'name' => $payload['name'],
                'email' => $payload['email'],
                'password' => Hash::make($payload['password']),
                'is_active' => true,
            ]);

            $role = Role::firstOrCreate(['name' => $roleName]);
            $user->roles()->syncWithoutDetaching([$role->id]);

            Profile::create([
                'user_id' => $user->id,
                'campus_id' => $payload['campus_id'],
                'staff_number' => $registration->number,
            ]);

            return $user;
        });

        $this->claimStaffNumber($registration, $user, 'staff_number');

        $this->audit('user.registered', User::class, $user->id, ['email' => $user->email, 'role' => $roleName]);
        $user->load('profile');

        return response()->json([
            'data' => [
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
                'token' => $user->createToken('angular-client', ['*'])->plainTextToken,
            ],
        ], 201);
    }

    public function peerCounselorRegister(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', function ($attribute, $value, $fail) {
                if (! str_ends_with($value, 'students.kcau.ac.ke')) {
                    $fail('Only KCA University student emails (students.kcau.ac.ke) are allowed for peer counselor registration.');
                }
            }],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'campus_id' => ['required', 'exists:campuses,id'],
            'counselor_number' => ['required', 'string', 'max:50'],
        ]);

        $registration = $this->authoriseStaffNumber(
            $payload['counselor_number'],
            $payload['email'],
            [StaffRegistration::ROLE_PEER_COUNSELOR],
            'counselor_number',
            'peer counselor number'
        );

        $existing = User::where('email', $payload['email'])->first();

        if ($existing) {
            $peerRole = Role::firstOrCreate(['name' => 'peer_counselor']);
            if (! $existing->hasRole('peer_counselor')) {
                $existing->roles()->syncWithoutDetaching([$peerRole->id]);
            }

            $existing->profile?->update([
                'campus_id' => $payload['campus_id'],
                'staff_number' => $registration->number,
            ]);

            $this->claimStaffNumber($registration, $existing, 'counselor_number');

            $this->audit('user.registered', User::class, $existing->id, ['email' => $existing->email, 'role' => 'peer_counselor', 'merged' => true]);
            $existing->load('profile');

            return response()->json([
                'data' => [
                    'user' => $this->userPayload($existing),
                    'profile' => $existing->profile ? [
                        'id' => $existing->profile->id,
                        'campus_id' => $existing->profile->campus_id,
                        'student_number' => $existing->profile->student_number,
                        'phone' => $existing->profile->phone,
                        'date_of_birth' => $existing->profile->date_of_birth?->toISOString(),
                        'gender' => $existing->profile->gender,
                        'bio' => $existing->profile->bio,
                        'emergency_contact_name' => $existing->profile->emergency_contact_name,
                        'emergency_contact_phone' => $existing->profile->emergency_contact_phone,
                        'preferences' => $existing->profile->preferences,
                    ] : null,
                    'token' => $existing->createToken('angular-client', ['*'])->plainTextToken,
                ],
            ], 200);
        }

        $user = DB::transaction(function () use ($payload, $registration): User {
            $user = User::create([
                'name' => $payload['name'],
                'email' => $payload['email'],
                'password' => Hash::make($payload['password']),
                'is_active' => true,
            ]);

            $peerRole = Role::firstOrCreate(['name' => 'peer_counselor']);
            $user->roles()->syncWithoutDetaching([$peerRole->id]);

            Profile::create([
                'user_id' => $user->id,
                'campus_id' => $payload['campus_id'],
                'staff_number' => $registration->number,
            ]);

            return $user;
        });

        $this->claimStaffNumber($registration, $user, 'counselor_number');

        $this->audit('user.registered', User::class, $user->id, ['email' => $user->email, 'role' => 'peer_counselor']);
        $user->load('profile');

        return response()->json([
            'data' => [
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
                'token' => $user->createToken('angular-client', ['*'])->plainTextToken,
            ],
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
        ]);

        if (! Auth::attempt(['email' => $payload['email'], 'password' => $payload['password']])) {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }

        $user = User::where('email', $payload['email'])->firstOrFail();

        if (! $user->is_active) {
            Auth::logout();

            return response()->json(['message' => 'Account disabled.'], 403);
        }

        if ($user->hasRole('student') && ($payload['campus_id'] ?? null)) {
            $studentCampusId = $user->profile?->campus_id;
            if ($studentCampusId && (int) ($payload['campus_id'] ?? 0) !== (int) $studentCampusId) {
                Auth::logout();

                return response()->json([
                    'message' => 'You can only log in to your registered campus.',
                    'user_campus_id' => $studentCampusId,
                ], 403);
            }
        }

        $user->update(['last_login_at' => now()]);

        if ($user->hasTwoFactorEnabled()) {
            Auth::logout();

            [$challenge, $minutes] = TwoFactorAuthController::issueChallenge($user);
            $this->audit('user.two_factor_challenged', User::class, $user->id);

            return response()->json([
                'message' => 'Enter the code from your authenticator app to finish signing in.',
                'two_factor_required' => true,
                'challenge' => $challenge,
                'expires_in_minutes' => $minutes,
            ], 200);
        }

        $token = $user->createToken('angular-client', ['*'])->plainTextToken;
        $this->audit('user.logged_in', User::class, $user->id);

        return response()->json([
            'data' => [
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
            ],
        ]);
    }

    public function verifyCode(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'email' => ['required', 'email'],
            'code' => ['required', 'string', 'min:6', 'max:6'],
        ]);

        $records = VerificationCode::where('email', $payload['email'])
            ->latest()
            ->get();

        $record = null;
        foreach ($records as $candidate) {
            if ($candidate->isValid() && Hash::check($payload['code'], $candidate->code)) {
                $record = $candidate;
                break;
            }
        }

        if (! $record) {
            throw ValidationException::withMessages([
                'code' => 'The verification code is invalid or has expired. Please try again.',
            ]);
        }

        $user = User::where('email', $payload['email'])->firstOrFail();
        $user->forceFill(['email_verified_at' => now()])->save();
        $record->update(['used_at' => now()]);

        $this->audit('user.email_verified', User::class, $user->id, ['email' => $user->email]);
        $user->load('profile');

        $token = $user->createToken('angular-client', ['*'])->plainTextToken;

        return response()->json([
            'data' => [
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
            ],
        ]);
    }

    public function resendVerificationCode(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::where('email', $payload['email'])->first();

        if (! $user) {
            return $this->message('If an account with that email exists, a verification code has been sent.', 200);
        }

        $this->sendVerificationCode($user->email, $user->name);

        return $this->message('If an account with that email exists, a verification code has been sent.');
    }

    protected function sendVerificationCode(string $email, string $name): void
    {
        $code = random_int(100000, 999999);

        VerificationCode::create([
            'email' => $email,
            'code' => Hash::make((string) $code),
            'expires_at' => now()->addMinutes(15),
        ]);

        Mail::to($email)->send(new VerificationCodeMail($name, str_pad((string) $code, 6, '0', STR_PAD_LEFT)));
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()?->delete();

        return $this->message('Logged out.');
    }

    public function user(Request $request): JsonResponse
    {
        $user = $request->user();
        $profile = $user->profile;

        return $this->json([
            'user' => $this->userPayload($user),
            'profile' => $profile ? [
                'id' => $profile->id,
                'campus_id' => $profile->campus_id,
                'student_number' => $profile->student_number,
                'phone' => $profile->phone,
                'gender' => $profile->gender,
                'bio' => $profile->bio,
                'preferences' => $profile->preferences,
            ] : null,
        ]);
    }

    /**
     * Resolve and authorise an approved staff/counsellor registration number.
     *
     * The number is only accepted when it exists in the registry, is active,
     * matches the role being claimed, and has not already been used by a
     * different person. This keeps privileged sign-ups limited to people the
     * institution has actually approved.
     *
     * @param  array<int, string>  $roles
     */
    private function authoriseStaffNumber(string $number, string $email, array $roles, string $field, string $label): StaffRegistration
    {
        $normalised = trim($number);

        $registration = StaffRegistration::query()
            ->where('number', $normalised)
            ->whereIn('role', $roles)
            ->first();

        if (! $registration) {
            throw ValidationException::withMessages([
                $field => "That {$label} is not recognised. Ask the wellbeing office to approve your number before registering.",
            ]);
        }

        if (! $registration->is_active) {
            throw ValidationException::withMessages([
                $field => "That {$label} is no longer active. Contact the wellbeing office.",
            ]);
        }

        if ($registration->email !== null && strcasecmp($registration->email, $email) !== 0) {
            throw ValidationException::withMessages([
                $field => "That {$label} is registered to a different email address.",
            ]);
        }

        $holderId = $registration->claimed_by;
        if ($holderId !== null) {
            $holder = User::find($holderId);
            if (! $holder || strcasecmp($holder->email, $email) !== 0) {
                throw ValidationException::withMessages([
                    $field => "That {$label} has already been claimed by another account.",
                ]);
            }
        }

        return $registration;
    }

    /**
     * Claim the number for a user, re-checking availability under a row lock so
     * two concurrent registrations cannot both succeed with the same number.
     */
    private function claimStaffNumber(StaffRegistration $registration, User $user, string $field): void
    {
        DB::transaction(function () use ($registration, $user, $field): void {
            $locked = StaffRegistration::query()->whereKey($registration->getKey())->lockForUpdate()->first();

            if ($locked === null || ! $locked->is_active) {
                throw ValidationException::withMessages([
                    $field => 'That number is no longer available. Contact the wellbeing office.',
                ]);
            }

            if ($locked->claimed_by !== null && (int) $locked->claimed_by !== (int) $user->id) {
                throw ValidationException::withMessages([
                    $field => 'That number has already been claimed by another account.',
                ]);
            }

            $locked->update([
                'claimed_at' => $locked->claimed_at ?? now(),
                'claimed_by' => $user->id,
            ]);
        });
    }
}
