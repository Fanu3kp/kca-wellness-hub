<?php

namespace App\Http\Controllers;

use App\Models\StaffRegistration;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Manages the registry of approved peer counsellor and guidance staff numbers.
 * A number must exist here before the matching role can be claimed at signup.
 */
class StaffRegistrationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = StaffRegistration::query()->with(['campus', 'claimedBy:id,name,email'])->latest();

        if ($request->filled('role')) {
            $query->where('role', $request->string('role')->toString());
        }

        if ($request->filled('unclaimed')) {
            $query->whereNull('claimed_by');
        }

        return $this->json($query->get());
    }

    public function store(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'role' => ['required', 'string', 'in:'.implode(',', [
                StaffRegistration::ROLE_PEER_COUNSELOR,
                StaffRegistration::ROLE_GUIDANCE_STAFF,
                StaffRegistration::ROLE_HOD,
            ])],
            'number' => ['required', 'string', 'max:50', 'unique:staff_registrations,number'],
            'email' => ['nullable', 'email', 'max:255'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        $registration = StaffRegistration::create([
            'role' => $payload['role'],
            'number' => trim($payload['number']),
            'email' => $payload['email'] ?? null,
            'campus_id' => $payload['campus_id'] ?? null,
            'is_active' => $payload['is_active'] ?? true,
        ]);

        $this->audit('staff_registration.created', StaffRegistration::class, $registration->id, [
            'role' => $registration->role,
            'number' => $registration->number,
        ]);

        return $this->json($registration, 201);
    }

    public function update(Request $request, StaffRegistration $staffRegistration): JsonResponse
    {
        $payload = $request->validate([
            'email' => ['nullable', 'email', 'max:255'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        $staffRegistration->update($payload);

        $this->audit('staff_registration.updated', StaffRegistration::class, $staffRegistration->id);

        return $this->json($staffRegistration);
    }

    /**
     * Release a number so it can be issued again, without deleting its history.
     */
    public function release(Request $request, StaffRegistration $staffRegistration): JsonResponse
    {
        $staffRegistration->update(['claimed_at' => null, 'claimed_by' => null]);

        $this->audit('staff_registration.released', StaffRegistration::class, $staffRegistration->id);

        return $this->json($staffRegistration);
    }

    public function destroy(StaffRegistration $staffRegistration): JsonResponse
    {
        $staffRegistration->delete();

        $this->audit('staff_registration.deleted', StaffRegistration::class, $staffRegistration->id);

        return $this->message('Registration number deleted.');
    }
}
