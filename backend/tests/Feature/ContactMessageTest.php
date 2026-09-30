<?php

namespace Tests\Feature;

use App\Models\Campus;
use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\RateLimiter;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_user_can_submit_a_contact_message(): void
    {
        $campus = Campus::factory()->create();

        $response = $this->postJson('/api/contact', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
            'message' => 'I would like to ask about available support.',
            'campus_id' => $campus->id,
        ]);

        $response->assertCreated()
            ->assertJson(['message' => 'Thank you. Your message has been received by the KCA Wellness Hub team.']);

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
            'campus_id' => $campus->id,
            'status' => 'unread',
        ]);

        $contactMessage = ContactMessage::query()->firstOrFail();
        $this->assertSame('I would like to ask about available support.', $contactMessage->message);
        $this->assertNotSame('I would like to ask about available support.', DB::table('contact_messages')->value('message'));
        $this->assertSame('unread', $contactMessage->status);
        $this->assertTrue($contactMessage->campus->is($campus));

        $this->assertDatabaseHas('audit_logs', [
            'action' => 'contact_message.created',
            'entity_type' => ContactMessage::class,
            'entity_id' => $contactMessage->id,
            'user_id' => null,
        ]);
    }

    public function test_contact_message_requires_name_email_and_subject(): void
    {
        $response = $this->postJson('/api/contact', [
            'message' => 'Missing required fields',
        ]);

        $response->assertUnprocessable();
    }

    public function test_contact_message_rejects_an_unknown_campus(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
            'campus_id' => 999999,
        ]);

        $response->assertUnprocessable();
        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'student@example.com',
        ]);
    }

    public function test_contact_endpoint_is_rate_limited(): void
    {
        RateLimiter::clear('contact');

        for ($attempt = 0; $attempt < 10; $attempt++) {
            $this->postJson('/api/contact', [
                'name' => 'KCA Student',
                'email' => 'student@example.com',
                'subject' => 'Wellness support',
            ])->assertCreated();
        }

        $this->postJson('/api/contact', [
            'name' => 'KCA Student',
            'email' => 'student@example.com',
            'subject' => 'Wellness support',
        ])->assertTooManyRequests();
    }
}
