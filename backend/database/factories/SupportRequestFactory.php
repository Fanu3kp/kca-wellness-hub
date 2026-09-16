<?php

namespace Database\Factories;

use App\Models\Campus;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<SupportRequest> */
class SupportRequestFactory extends Factory
{
    public function definition(): array
    {
        return [
            'requester_id' => User::factory(),
            'campus_id' => Campus::factory(),
            'category' => fake()->randomElement(['academic_stress', 'relationships', 'anxiety', 'career', 'general_wellness']),
            'subject' => fake()->sentence(4),
            'details' => fake()->paragraph(),
            'status' => fake()->randomElement(['pending', 'assigned', 'in_progress', 'resolved']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'source' => 'web',
            'is_anonymous' => false,
        ];
    }
}
