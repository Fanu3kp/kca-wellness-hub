<?php

namespace Database\Factories;

use App\Models\Connect;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Connect> */
class ConnectFactory extends Factory
{
    public function definition(): array
    {
        $follower = User::factory();
        $followed = User::factory();

        return [
            'follower_id' => $follower,
            'followed_id' => $followed,
            'status' => fake()->randomElement(['pending', 'accepted', 'rejected']),
        ];
    }

    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending',
        ]);
    }

    public function accepted(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'accepted',
        ]);
    }

    public function rejected(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'rejected',
        ]);
    }
}
