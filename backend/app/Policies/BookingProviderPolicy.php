<?php

namespace App\Policies;

use App\Models\BookingProvider;
use App\Models\User;

class BookingProviderPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, BookingProvider $bookingProvider): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, BookingProvider $bookingProvider): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, BookingProvider $bookingProvider): bool
    {
        return $user->hasRole('admin');
    }

    public function restore(User $user, BookingProvider $bookingProvider): bool
    {
        return false;
    }

    public function forceDelete(User $user, BookingProvider $bookingProvider): bool
    {
        return false;
    }
}
