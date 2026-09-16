<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
        ]);

        $user = DB::transaction(function () use ($payload, $request): User {
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
        ]);

        if (! Auth::attempt($payload)) {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }

        $user = User::where('email', $payload['email'])->firstOrFail();

        if (! $user->is_active) {
            Auth::logout();

            return response()->json(['message' => 'Account disabled.'], 403);
        }

        $user->update(['last_login_at' => now()]);
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
}
