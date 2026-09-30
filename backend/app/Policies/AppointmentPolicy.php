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
        if ($appointment->user_id === $user->id) {
            return true;
        }

        if ($user->hasRole('admin')) {
            return true;
        }

        if ($user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod'])) {
            return (int) ($appointment->campus_id) === (int) ($user->profile?->campus_id);
        }

        return false;
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, Appointment $appointment): bool
    {
        return $this->view($user, $appointment);
    }

    public function delete(User $user, Appointment $appointment): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
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
