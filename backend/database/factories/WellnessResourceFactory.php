<?php

namespace Database\Factories;

use App\Models\Campus;
use App\Models\WellnessResource;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<WellnessResource> */
class WellnessResourceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'campus_id' => Campus::factory(),
            'title' => fake()->sentence(4),
            'slug' => fake()->unique()->slug(),
            'summary' => fake()->paragraph(),
            'body' => fake()->paragraphs(3, true),
            'category' => fake()->randomElement(['mindfulness', 'academic', 'relationships', 'crisis_support']),
            'audience' => 'student',
            'url' => fake()->optional()->url(),
            'is_published' => true,
            'published_at' => now(),
            'sort_order' => fake()->numberBetween(0, 20),
        ];
    }
}
