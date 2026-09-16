<?php

namespace App\Policies;

use App\Models\WellnessResource;
use App\Models\User;

class WellnessResourcePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, WellnessResource $wellnessResource): bool
    {
        return $wellnessResource->is_published || $user->hasRole('admin');
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, WellnessResource $wellnessResource): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, WellnessResource $wellnessResource): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, WellnessResource $wellnessResource): bool
    {
        return false;
    }

    public function forceDelete(User $user, WellnessResource $wellnessResource): bool
    {
        return false;
    }
}
