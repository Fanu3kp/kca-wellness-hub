<?php

namespace App\Policies;

use App\Models\TrainingModule;
use App\Models\User;

class TrainingModulePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, TrainingModule $trainingModule): bool
    {
        return $trainingModule->is_published || $user->hasRole('admin');
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, TrainingModule $trainingModule): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, TrainingModule $trainingModule): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, TrainingModule $trainingModule): bool
    {
        return false;
    }

    public function forceDelete(User $user, TrainingModule $trainingModule): bool
    {
        return false;
    }
}
