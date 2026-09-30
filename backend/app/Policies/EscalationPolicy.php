<?php

namespace App\Policies;

use App\Models\Escalation;
use App\Models\User;

class EscalationPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function view(User $user, Escalation $escalation): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin'])
            || $escalation->escalated_by === $user->id
            || $escalation->assigned_to === $user->id;
    }

    public function create(User $user): bool
    {
        return $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function update(User $user, Escalation $escalation): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin'])
            || ($escalation->assigned_to === $user->id && $escalation->status === 'open');
    }

    public function delete(User $user, Escalation $escalation): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, Escalation $escalation): bool
    {
        return false;
    }

    public function forceDelete(User $user, Escalation $escalation): bool
    {
        return false;
    }
}
