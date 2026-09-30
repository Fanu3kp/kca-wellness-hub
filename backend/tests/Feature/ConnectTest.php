<?php

namespace Tests\Feature;

use App\Models\Connect;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ConnectTest extends TestCase
{
    use RefreshDatabase;

    private User $actor;
    private User $target;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actor = User::factory()->create(['is_active' => true]);
        $this->target = User::factory()->create(['is_active' => true]);
    }

    public function test_authenticated_user_can_send_connect_request(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => $this->target->id]);

        $response->assertCreated()
            ->assertJsonStructure(['data' => ['id', 'follower_id', 'followed_id', 'status', 'created_at', 'updated_at']]);

        $this->assertDatabaseHas('connects', [
            'follower_id' => $this->actor->id,
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);
    }

    public function test_unauthenticated_user_cannot_send_connect_request(): void
    {
        $response = $this->postJson('/api/connects', ['followed_id' => $this->target->id]);

        $response->assertUnauthorized();
    }

    public function test_cannot_follow_self(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => $this->actor->id]);

        $response->assertUnprocessable();
    }

    public function test_cannot_send_duplicate_connect_request(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => $this->target->id]);

        $response->assertUnprocessable();
    }

    public function test_cannot_send_connect_request_to_inactive_user(): void
    {
        $inactive = User::factory()->create(['is_active' => false]);
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => $inactive->id]);

        $response->assertNotFound();
    }

    public function test_cannot_send_connect_request_to_nonexistent_user(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => 99999]);

        $response->assertUnprocessable();
    }

    public function test_target_can_accept_pending_request(): void
    {
        $token = $this->target->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/accept');

        $response->assertOk()
            ->assertJson(['data' => ['status' => 'accepted']]);

        $this->assertDatabaseHas('connects', [
            'id' => $connect->id,
            'status' => 'accepted',
        ]);
    }

    public function test_only_target_can_accept_request(): void
    {
        $other = User::factory()->create(['is_active' => true]);
        $token = $other->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/accept');

        $response->assertForbidden();
    }

    public function test_cannot_accept_non_pending_request(): void
    {
        $token = $this->target->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/accept');

        $response->assertUnprocessable();
    }

    public function test_target_can_reject_pending_request(): void
    {
        $token = $this->target->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/reject');

        $response->assertOk()
            ->assertJson(['data' => ['status' => 'rejected']]);

        $this->assertDatabaseHas('connects', [
            'id' => $connect->id,
            'status' => 'rejected',
        ]);
    }

    public function test_only_target_can_reject_request(): void
    {
        $other = User::factory()->create(['is_active' => true]);
        $token = $other->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/reject');

        $response->assertForbidden();
    }

    public function test_cannot_reject_non_pending_request(): void
    {
        $token = $this->target->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->postJson('/api/connects/' . $connect->id . '/reject');

        $response->assertUnprocessable();
    }

    public function test_can_list_incoming_requests(): void
    {
        $token = $this->target->createToken('test')->plainTextToken;

        $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);

        $other = User::factory()->create();
        $other->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->getJson('/api/connects/incoming');

        $response->assertOk()
            ->assertJsonCount(1, 'data');
    }

    public function test_user_can_unfollow(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->deleteJson('/api/connects/' . $connect->id);

        $response->assertOk()
            ->assertJson(['message' => 'Unfollowed.']);

        $this->assertDatabaseMissing('connects', ['id' => $connect->id]);
    }

    public function test_only_follower_can_unfollow(): void
    {
        $other = User::factory()->create(['is_active' => true]);
        $token = $other->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->deleteJson('/api/connects/' . $connect->id);

        $response->assertForbidden();
    }

    public function test_follower_and_following_counts(): void
    {
        $follower1 = User::factory()->create(['is_active' => true]);
        $follower2 = User::factory()->create(['is_active' => true]);
        $following1 = User::factory()->create(['is_active' => true]);
        $following2 = User::factory()->create(['is_active' => true]);

        $follower1->connects()->create(['followed_id' => $this->target->id, 'status' => 'accepted']);
        $follower2->connects()->create(['followed_id' => $this->target->id, 'status' => 'accepted']);
        $this->target->connects()->create(['followed_id' => $following1->id, 'status' => 'accepted']);
        $this->target->connects()->create(['followed_id' => $following2->id, 'status' => 'accepted']);

        $pendingFollower = User::factory()->create(['is_active' => true]);
        Connect::create([
            'follower_id' => $pendingFollower->id,
            'followed_id' => $this->target->id,
            'status' => 'pending',
        ]);
        $rejectedFollowing = User::factory()->create(['is_active' => true]);
        Connect::create([
            'follower_id' => $this->target->id,
            'followed_id' => $rejectedFollowing->id,
            'status' => 'rejected',
        ]);

        $token = $this->target->createToken('test')->plainTextToken;

        $followersResponse = $this->withToken($token)
            ->getJson('/api/connects/' . $this->target->id . '/followers');
        $followersResponse->assertOk()
            ->assertJsonCount(2, 'data');

        $followingResponse = $this->withToken($token)
            ->getJson('/api/connects/' . $this->target->id . '/following');
        $followingResponse->assertOk()
            ->assertJsonCount(2, 'data');
    }

    public function test_connection_status_endpoint(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $connect = $this->actor->connects()->create([
            'followed_id' => $this->target->id,
            'status' => 'accepted',
        ]);

        $response = $this->withToken($token)
            ->getJson('/api/connects/status/' . $this->target->id);

        $response->assertOk()
            ->assertJson([
                'data' => [
                    'status' => 'accepted',
                    'is_following' => true,
                    'connect_id' => $connect->id,
                ],
            ]);
    }

    public function test_connection_status_no_connect(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->getJson('/api/connects/status/' . $this->target->id);

        $response->assertOk()
            ->assertJson([
                'data' => [
                    'status' => null,
                    'is_following' => false,
                    'connect_id' => null,
                ],
            ]);
    }

    public function test_nonexistent_user_connection_status(): void
    {
        $token = $this->actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->getJson('/api/connects/status/99999');

        $response->assertNotFound();
    }

    public function test_user_cannot_connect_with_different_campus(): void
    {
        $campusA = \App\Models\Campus::create([
            'name' => 'Campus A', 'code' => 'CAMP-A', 'location' => 'Location A', 'is_active' => true,
        ]);
        $campusB = \App\Models\Campus::create([
            'name' => 'Campus B', 'code' => 'CAMP-B', 'location' => 'Location B', 'is_active' => true,
        ]);

        $actor = User::factory()->create(['is_active' => true]);
        \App\Models\Profile::create(['user_id' => $actor->id, 'campus_id' => $campusA->id]);

        $target = User::factory()->create(['is_active' => true]);
        \App\Models\Profile::create(['user_id' => $target->id, 'campus_id' => $campusB->id]);

        $token = $actor->createToken('test')->plainTextToken;

        $response = $this->withToken($token)
            ->postJson('/api/connects', ['followed_id' => $target->id]);

        $response->assertForbidden();
    }
}
