<?php

namespace App\Policies;

use App\Models\SupportRequest;
use App\Models\User;

class SupportRequestPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, SupportRequest $supportRequest): bool
    {
        if ($supportRequest->requester_id === $user->id
            || $supportRequest->assigned_to === $user->id) {
            return true;
        }

        if ($user->hasRole('admin')) {
            return true;
        }

        if ($user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod'])) {
            return (int) ($supportRequest->campus_id) === (int) ($user->profile?->campus_id);
        }

        return false;
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, SupportRequest $supportRequest): bool
    {
        if ($supportRequest->assigned_to === $user->id
            || $user->hasAnyRole(['guidance_staff', 'hod', 'admin'])) {
            return true;
        }

        if ($supportRequest->requester_id === $user->id && $supportRequest->status === 'pending') {
            return true;
        }

        return false;
    }

    public function delete(User $user, SupportRequest $supportRequest): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
    }

    public function restore(User $user, SupportRequest $supportRequest): bool
    {
        return $user->hasRole('admin');
    }

    public function forceDelete(User $user, SupportRequest $supportRequest): bool
    {
        return $user->hasRole('admin');
    }
}
