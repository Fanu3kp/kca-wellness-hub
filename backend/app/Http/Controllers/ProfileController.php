<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $profile = Profile::where('user_id', $request->user()->id)->firstOrFail();

        return $this->json([
            'id' => $profile->id,
            'user_id' => $profile->user_id,
            'campus_id' => $profile->campus_id,
            'student_number' => $profile->student_number,
            'phone' => $profile->phone,
            'date_of_birth' => $profile->date_of_birth?->toISOString(),
            'gender' => $profile->gender,
            'bio' => $profile->bio,
            'preferences' => $profile->preferences,
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $user = $request->user();
        $profile = Profile::firstOrCreate(['user_id' => $user->id]);
        $payload = $request->validate([
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'student_number' => ['nullable', 'string', 'max:80', Rule::unique('profiles', 'student_number')->ignore($profile->id)],
            'phone' => ['nullable', 'string', 'max:40'],
            'date_of_birth' => ['nullable', 'date', 'before:today'],
            'gender' => ['nullable', 'string', 'max:30'],
            'bio' => ['nullable', 'string', 'max:2000'],
            'emergency_contact_name' => ['nullable', 'string', 'max:255'],
            'emergency_contact_phone' => ['nullable', 'string', 'max:40'],
            'preferences' => ['nullable', 'array'],
        ]);
        $profile->update($payload);
        $this->audit('profile.updated', Profile::class, $profile->id);

        return $this->json([
            'id' => $profile->id,
            'campus_id' => $profile->campus_id,
            'student_number' => $profile->student_number,
            'phone' => $profile->phone,
            'gender' => $profile->gender,
            'bio' => $profile->bio,
            'preferences' => $profile->preferences,
        ]);
    }
}
