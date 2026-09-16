<?php

namespace App\Policies;

use App\Models\Conversation;
use App\Models\User;

class ConversationPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Conversation $conversation): bool
    {
        if ($user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin'])) {
            return true;
        }

        return $conversation->participants()
            ->where('user_id', $user->id)
            ->whereNull('left_at')
            ->exists();
    }

    public function create(User $user): bool
    {
        return $user->is_active;
    }

    public function update(User $user, Conversation $conversation): bool
    {
        return $this->view($user, $conversation)
            && $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
    }

    public function delete(User $user, Conversation $conversation): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'admin']);
    }

    public function restore(User $user, Conversation $conversation): bool
    {
        return $user->hasRole('admin');
    }

    public function forceDelete(User $user, Conversation $conversation): bool
    {
        return $user->hasRole('admin');
    }
}
