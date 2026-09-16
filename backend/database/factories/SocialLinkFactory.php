<?php

namespace Database\Factories;

use App\Models\SocialLink;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<SocialLink> */
class SocialLinkFactory extends Factory
{
    public function definition(): array
    {
        return [
            'platform' => fake()->randomElement(['facebook', 'instagram', 'tiktok', 'linkedin', 'x', 'youtube', 'whatsapp', 'website']),
            'label' => fake()->sentence(2),
            'url' => fake()->url(),
            'sort_order' => fake()->numberBetween(0, 20),
            'is_active' => true,
        ];
    }
}
