<?php

namespace Database\Factories;

use App\Models\Campus;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Campus> */
class CampusFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->city(),
            'code' => fake()->unique()->lexify('???'),
            'location' => fake()->city(),
            'physical_support' => true,
            'virtual_support' => true,
            'is_active' => true,
        ];
    }
}
