<?php

namespace App\Policies;

use App\Models\Campus;
use App\Models\User;

class CampusPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Campus $campus): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, Campus $campus): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, Campus $campus): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, Campus $campus): bool
    {
        return false;
    }

    public function forceDelete(User $user, Campus $campus): bool
    {
        return false;
    }

    public function viewReports(User $user): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
    }
}
