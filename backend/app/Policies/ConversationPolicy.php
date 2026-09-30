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
        if ($user->hasRole('admin')) {
            return true;
        }

        if ($user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod'])) {
            $campusId = $user->profile?->campus_id;

            if (! $campusId) {
                return false;
            }

            $onCampus = $conversation->supportRequest()
                ->where('campus_id', $campusId)
                ->exists();

            if (! $onCampus) {
                $onCampus = $conversation->participants()
                    ->whereHas('profile', static fn ($q) => $q->where('campus_id', $campusId))
                    ->whereNull('left_at')
                    ->exists();
            }

            return $onCampus;
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
        if (! $this->view($user, $conversation)) {
            return false;
        }

        return $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);
    }

    public function delete(User $user, Conversation $conversation): bool
    {
        return $user->hasAnyRole(['guidance_staff', 'hod', 'admin']);
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
