<?php

namespace App\Policies;

use App\Models\SocialLink;
use App\Models\User;

class SocialLinkPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, SocialLink $socialLink): bool
    {
        return $socialLink->is_active;
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, SocialLink $socialLink): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, SocialLink $socialLink): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, SocialLink $socialLink): bool
    {
        return false;
    }

    public function forceDelete(User $user, SocialLink $socialLink): bool
    {
        return false;
    }
}
