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
        return $supportRequest->requester_id === $user->id
            || $supportRequest->assigned_to === $user->id
            || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, SupportRequest $supportRequest): bool
    {
        return $supportRequest->assigned_to === $user->id
            || $user->hasAnyRole(['guidance_staff', 'admin'])
            || ($supportRequest->requester_id === $user->id && $supportRequest->status === 'pending');
    }

    public function delete(User $user, SupportRequest $supportRequest): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'admin']);
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
