<?php

namespace App\Policies;

use App\Models\Message;
use App\Models\User;

class MessagePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Message $message): bool
    {
        return $message->conversation->participants()
            ->where('user_id', $user->id)
            ->whereNull('left_at')
            ->exists()
            || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, Message $message): bool
    {
        return $message->sender_id === $user->id
            || $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
    }

    public function delete(User $user, Message $message): bool
    {
        return $message->sender_id === $user->id
            || $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
    }

    public function restore(User $user, Message $message): bool
    {
        return false;
    }

    public function forceDelete(User $user, Message $message): bool
    {
        return false;
    }
}
