<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\PersonalAccessToken;
use Tests\TestCase;

class LogoutTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_user_can_logout(): void
    {
        $user = User::factory()->create(['is_active' => true]);
        $token = $user->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/logout');

        $response->assertOk()
            ->assertJson(['message' => 'Logged out.']);
    }

    public function test_logout_deletes_current_access_token(): void
    {
        $user = User::factory()->create(['is_active' => true]);
        $token = $user->createToken('test')->plainTextToken;

        $this->withToken($token)
            ->postJson('/api/logout');

        $this->assertDatabaseMissing('personal_access_tokens', ['id' => $user->currentAccessToken()?->id]);
    }

    public function test_unauthenticated_user_cannot_logout(): void
    {
        $response = $this->postJson('/api/logout');

        $response->assertUnauthorized();
    }

public function test_token_is_invalid_after_logout(): void
    {
        $user = User::factory()->create(['is_active' => true]);
        $token = $user->createToken('test')->plainTextToken;

        $this->withToken($token)
            ->postJson('/api/logout');

        $tokenRecord = \Laravel\Sanctum\PersonalAccessToken::where('token', hash('sha256', $token))->first();
        $this->assertNull($tokenRecord);
    }

    public function test_logout_with_multiple_tokens_only_deletes_current_token(): void
    {
        $user = User::factory()->create(['is_active' => true]);
        $token1 = $user->createToken('test-token-1')->plainTextToken;
        $token2 = $user->createToken('test-token-2')->plainTextToken;

        $this->withToken($token1)
            ->postJson('/api/logout');

        $this->assertNotNull(PersonalAccessToken::findToken($token2));
        $this->assertNull(PersonalAccessToken::findToken($token1));

        $response = $this->withToken($token2)
            ->getJson('/api/user');

        $response->assertOk();
    }
}
