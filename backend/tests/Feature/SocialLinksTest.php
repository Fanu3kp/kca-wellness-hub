<?php

namespace Tests\Feature;

use App\Models\Role;
use App\Models\SocialLink;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SocialLinksTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;
    private User $student;

    protected function setUp(): void
    {
        parent::setUp();

        $adminRole = Role::create(['name' => 'admin', 'description' => 'Platform administrator']);
        $studentRole = Role::create(['name' => 'student', 'description' => 'Student user']);

        $this->admin = User::factory()->create(['is_active' => true]);
        $this->admin->roles()->attach($adminRole);

        $this->student = User::factory()->create(['is_active' => true]);
        $this->student->roles()->attach($studentRole);
    }

    public function test_public_can_view_active_social_links(): void
    {
        SocialLink::factory()->create(['platform' => 'facebook', 'is_active' => true]);
        SocialLink::factory()->create(['platform' => 'instagram', 'is_active' => false]);

        $response = $this->getJson('/api/social-links');

        $response->assertOk()
            ->assertJsonCount(1, 'data');
    }

    public function test_admin_can_create_social_link(): void
    {
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/social-links', [
                'platform' => 'tiktok',
                'label' => 'KCA Wellness Hub TikTok',
                'url' => 'https://www.tiktok.com/@kcawellnesshub',
                'sort_order' => 3,
                'is_active' => true,
            ]);

        $response->assertCreated()
            ->assertJson(['data' => ['platform' => 'tiktok']]);

        $this->assertDatabaseHas('social_links', ['platform' => 'tiktok']);
    }

    public function test_admin_cannot_create_social_link_with_invalid_platform(): void
    {
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/social-links', [
                'platform' => 'myspace',
                'label' => 'Bad Platform',
                'url' => 'https://example.com',
            ]);

        $response->assertUnprocessable();
    }

    public function test_admin_cannot_create_social_link_with_invalid_url(): void
    {
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/social-links', [
                'platform' => 'facebook',
                'label' => 'Bad URL',
                'url' => 'not-a-url',
            ]);

        $response->assertUnprocessable();
    }

    public function test_student_cannot_create_social_link(): void
    {
        $token = $this->student->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/social-links', [
                'platform' => 'facebook',
                'label' => 'No Access',
                'url' => 'https://example.com',
            ]);

        $response->assertForbidden();
    }

    public function test_unauthenticated_cannot_create_social_link(): void
    {
        $response = $this->postJson('/api/social-links', [
            'platform' => 'facebook',
            'label' => 'No Access',
            'url' => 'https://example.com',
        ]);

        $response->assertUnauthorized();
    }

    public function test_admin_can_update_social_link(): void
    {
        $link = SocialLink::factory()->create(['platform' => 'facebook']);
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->putJson('/api/social-links/' . $link->id, [
                'label' => 'Updated Label',
                'url' => 'https://updated.example.com',
            ]);

        $response->assertOk()
            ->assertJson(['data' => ['label' => 'Updated Label']]);
    }

    public function test_admin_cannot_update_social_link_with_invalid_platform(): void
    {
        $link = SocialLink::factory()->create(['platform' => 'facebook']);
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->putJson('/api/social-links/' . $link->id, [
                'platform' => 'unknown',
            ]);

        $response->assertUnprocessable();
    }

    public function test_admin_can_delete_social_link(): void
    {
        $link = SocialLink::factory()->create(['platform' => 'facebook']);
        $token = $this->admin->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->deleteJson('/api/social-links/' . $link->id);

        $response->assertOk()
            ->assertJson(['message' => 'Social link deleted.']);

        $this->assertDatabaseMissing('social_links', ['id' => $link->id]);
    }

    public function test_student_cannot_update_social_link(): void
    {
        $link = SocialLink::factory()->create(['platform' => 'facebook']);
        $token = $this->student->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->putJson('/api/social-links/' . $link->id, [
                'label' => 'Hacked',
            ]);

        $response->assertForbidden();
    }

    public function test_student_cannot_delete_social_link(): void
    {
        $link = SocialLink::factory()->create(['platform' => 'facebook']);
        $token = $this->student->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->deleteJson('/api/social-links/' . $link->id);

        $response->assertForbidden();
    }

    public function test_all_eight_platforms_can_be_created(): void
    {
        $token = $this->admin->createToken('test')->plainTextToken;
        $platforms = ['facebook', 'instagram', 'tiktok', 'linkedin', 'x', 'youtube', 'whatsapp', 'website'];

        foreach ($platforms as $platform) {
            $response = $this->withToken($token)
                ->postJson('/api/social-links', [
                    'platform' => $platform,
                    'label' => 'Test ' . $platform,
                    'url' => 'https://example.test/' . $platform,
                ]);

            $response->assertCreated();
            $this->assertDatabaseHas('social_links', ['platform' => $platform]);
        }
    }
}
