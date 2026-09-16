<?php

namespace Database\Factories;

use App\Models\Campus;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Profile> */
class ProfileFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'campus_id' => Campus::factory(),
            'student_number' => fake()->unique()->numerify('KCA-######'),
            'phone' => fake()->optional()->phoneNumber(),
            'date_of_birth' => fake()->optional()->dateTimeBetween('-25 years', '-17 years'),
            'gender' => fake()->randomElement(['female', 'male', 'non-binary', 'prefer_not_to_say']),
            'bio' => fake()->optional()->sentence(),
            'emergency_contact_name' => fake()->optional()->name(),
            'emergency_contact_phone' => fake()->optional()->phoneNumber(),
            'preferences' => ['notifications' => true],
        ];
    }
}
