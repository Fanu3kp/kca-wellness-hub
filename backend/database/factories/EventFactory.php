<?php

namespace Database\Factories;

use App\Models\Campus;
use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Event> */
class EventFactory extends Factory
{
    public function definition(): array
    {
        return [
            'campus_id' => Campus::factory(),
            'title' => fake()->sentence(4),
            'slug' => fake()->unique()->slug(),
            'description' => fake()->paragraph(),
            'starts_at' => fake()->dateTimeBetween('+1 day', '+60 days'),
            'ends_at' => now()->addHours(2),
            'location' => fake()->optional()->word(),
            'external_url' => fake()->optional()->url(),
            'capacity' => fake()->numberBetween(10, 200),
            'is_published' => true,
            'published_at' => now(),
        ];
    }
}
