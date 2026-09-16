<?php

namespace Database\Factories;

use App\Models\Conversation;
use App\Models\Escalation;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Escalation> */
class EscalationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'support_request_id' => SupportRequest::factory(),
            'conversation_id' => Conversation::factory(),
            'escalated_by' => User::factory(),
            'assigned_to' => User::factory(),
            'reason' => fake()->sentence(),
            'severity' => fake()->randomElement(['low', 'medium', 'high', 'critical']),
            'status' => 'open',
            'external_reference' => fake()->optional()->lexify('ESC-??????'),
            'notes' => fake()->optional()->sentence(),
            'escalated_at' => now(),
        ];
    }
}
