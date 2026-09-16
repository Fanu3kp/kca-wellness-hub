<?php

namespace Database\Factories;

use App\Models\BookingProvider;
use App\Models\Campus;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<BookingProvider> */
class BookingProviderFactory extends Factory
{
    public function definition(): array
    {
        return [
            'campus_id' => Campus::factory(),
            'name' => fake()->name(),
            'mode' => fake()->randomElement(['main', 'virtual']),
            'external_booking_url' => fake()->url(),
            'is_active' => true,
            'sort_order' => fake()->numberBetween(0, 20),
        ];
    }
}
