<?php

namespace App\Policies;

use App\Models\Appointment;
use App\Models\User;

class AppointmentPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Appointment $appointment): bool
    {
        return $appointment->user_id === $user->id
            || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, Appointment $appointment): bool
    {
        return $appointment->user_id === $user->id
            || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
    }

    public function delete(User $user, Appointment $appointment): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'admin']);
    }

    public function restore(User $user, Appointment $appointment): bool
    {
        return false;
    }

    public function forceDelete(User $user, Appointment $appointment): bool
    {
        return false;
    }
}
