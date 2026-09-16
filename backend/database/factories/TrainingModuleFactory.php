<?php

namespace Database\Factories;

use App\Models\TrainingModule;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<TrainingModule> */
class TrainingModuleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'slug' => fake()->unique()->slug(),
            'description' => fake()->paragraph(),
            'content_url' => fake()->optional()->url(),
            'duration_minutes' => fake()->numberBetween(15, 120),
            'level' => fake()->randomElement(['beginner', 'intermediate', 'advanced']),
            'is_published' => true,
            'sort_order' => fake()->numberBetween(0, 20),
        ];
    }
}
