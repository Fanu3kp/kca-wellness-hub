<?php

namespace Database\Factories;

use App\Models\Notification;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Notification> */
class NotificationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'type' => fake()->randomElement(['appointment', 'support_request', 'training']),
            'title' => fake()->sentence(3),
            'body' => fake()->paragraph(),
            'data' => ['demo' => true],
        ];
    }
}
