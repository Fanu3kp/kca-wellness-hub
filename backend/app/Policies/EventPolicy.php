<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;

class EventPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Event $event): bool
    {
        return $event->is_published || $user->hasRole('admin');
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, Event $event): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, Event $event): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, Event $event): bool
    {
        return false;
    }

    public function forceDelete(User $user, Event $event): bool
    {
        return false;
    }
}
