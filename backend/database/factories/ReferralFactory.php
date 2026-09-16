<?php

namespace Database\Factories;

use App\Models\Referral;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Referral> */
class ReferralFactory extends Factory
{
    public function definition(): array
    {
        return [
            'support_request_id' => SupportRequest::factory(),
            'from_user_id' => User::factory(),
            'to_user_id' => User::factory(),
            'reason' => fake()->sentence(),
            'notes' => fake()->optional()->sentence(),
            'status' => 'pending',
            'referred_at' => now(),
        ];
    }
}
