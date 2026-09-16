<?php

namespace Database\Factories;

use App\Models\Conversation;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Conversation> */
class ConversationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'support_request_id' => SupportRequest::factory(),
            'created_by' => User::factory(),
            'subject' => fake()->sentence(5),
            'status' => 'open',
        ];
    }
}
