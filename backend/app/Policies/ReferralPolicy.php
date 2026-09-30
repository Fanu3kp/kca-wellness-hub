<?php

namespace App\Policies;

use App\Models\Referral;
use App\Models\User;

class ReferralPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function view(User $user, Referral $referral): bool
    {
        return $user->hasRole('admin')
            || $referral->from_user_id === $user->id
            || $referral->to_user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function update(User $user, Referral $referral): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin'])
            || ($referral->to_user_id === $user->id && $referral->status === 'pending');
    }

    public function delete(User $user, Referral $referral): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, Referral $referral): bool
    {
        return false;
    }

    public function forceDelete(User $user, Referral $referral): bool
    {
        return false;
    }
}
