<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_user_can_submit_a_contact_message(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
            'message' => 'I would like to ask about available support.',
        ]);

        $response->assertCreated()
            ->assertJson(['message' => 'Thank you. Your message has been received by the KCA Wellness Hub team.']);

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
            'status' => 'unread',
        ]);
    }

    public function test_contact_message_requires_name_email_and_subject(): void
    {
        $response = $this->postJson('/api/contact', [
            'message' => 'Missing required fields',
        ]);

        $response->assertUnprocessable();
    }
}
