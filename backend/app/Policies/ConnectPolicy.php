<?php

namespace App\Policies;

use App\Models\Connect;
use App\Models\User;

class ConnectPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Connect $connect): bool
    {
        return $user->id === $connect->follower_id || $user->id === $connect->followed_id;
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, Connect $connect): bool
    {
        return $user->id === $connect->followed_id;
    }

    public function delete(User $user, Connect $connect): bool
    {
        return $user->id === $connect->follower_id || $user->id === $connect->followed_id;
    }

    public function restore(User $user, Connect $connect): bool
    {
        return false;
    }

    public function forceDelete(User $user, Connect $connect): bool
    {
        return false;
    }
}
