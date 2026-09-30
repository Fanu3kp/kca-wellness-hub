<?php

namespace Tests\Feature;

use App\Models\Appointment;
use App\Models\Campus;
use App\Models\Conversation;
use App\Models\ConversationParticipant;
use App\Models\Profile;
use App\Models\Role;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PrivacyTest extends TestCase
{
    use RefreshDatabase;

    private Campus $campusA;

    private Campus $campusB;

    private Role $studentRole;

    private Role $peerRole;

    private Role $guidanceRole;

    protected function setUp(): void
    {
        parent::setUp();

        $this->campusA = Campus::create([
            'name' => 'Campus A', 'code' => 'CAMP-A', 'location' => 'Location A', 'is_active' => true,
        ]);
        $this->campusB = Campus::create([
            'name' => 'Campus B', 'code' => 'CAMP-B', 'location' => 'Location B', 'is_active' => true,
        ]);

        $this->studentRole = Role::create(['name' => 'student', 'description' => 'Student user']);
        $this->peerRole = Role::create(['name' => 'peer_counselor', 'description' => 'Peer counselor']);
        $this->guidanceRole = Role::create(['name' => 'guidance_staff', 'description' => 'Guidance staff']);
    }

    private function createUser(string $role, Campus $campus): User
    {
        $user = User::factory()->create(['is_active' => true]);
        $user->roles()->attach(Role::where('name', $role)->firstOrFail());
        Profile::create(['user_id' => $user->id, 'campus_id' => $campus->id]);

        return $user;
    }

    public function test_peer_counselor_cannot_view_conversation_from_other_campus(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentB = $this->createUser('student', $this->campusB);

        $supportRequest = SupportRequest::create([
            'requester_id' => $studentB->id,
            'campus_id' => $this->campusB->id,
            'category' => 'academic_stress',
            'subject' => 'Test subject',
            'details' => 'Test details',
            'status' => 'pending',
            'priority' => 'medium',
            'source' => 'web',
            'is_anonymous' => false,
        ]);

        $conversation = Conversation::create([
            'support_request_id' => $supportRequest->id,
            'created_by' => $studentB->id,
            'subject' => 'Test conversation',
            'status' => 'open',
        ]);

        $conversation->participants()->attach([
            $studentB->id => ['role' => 'creator', 'joined_at' => now()],
            $peerA->id => ['role' => 'participant', 'joined_at' => now()],
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/conversations/{$conversation->id}");

        $response->assertOk()
            ->assertJsonPath('data.id', $conversation->id);
    }

    public function test_peer_counselor_cannot_view_conversation_from_other_campus_without_participation(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentB = $this->createUser('student', $this->campusB);
        $counselorB = $this->createUser('peer_counselor', $this->campusB);

        $supportRequest = SupportRequest::create([
            'requester_id' => $studentB->id,
            'campus_id' => $this->campusB->id,
            'category' => 'academic_stress',
            'subject' => 'Test subject',
            'details' => 'Test details',
            'status' => 'pending',
            'priority' => 'medium',
            'source' => 'web',
            'is_anonymous' => false,
        ]);

        $conversation = Conversation::create([
            'support_request_id' => $supportRequest->id,
            'created_by' => $studentB->id,
            'subject' => 'Private conversation',
            'status' => 'open',
        ]);

        $conversation->participants()->attach([
            $studentB->id => ['role' => 'creator', 'joined_at' => now()],
            $counselorB->id => ['role' => 'participant', 'joined_at' => now()],
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/conversations/{$conversation->id}");

        $response->assertForbidden();
    }

    public function test_peer_counselor_cannot_view_appointment_from_other_campus(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentB = $this->createUser('student', $this->campusB);

        $appointment = Appointment::create([
            'user_id' => $studentB->id,
            'campus_id' => $this->campusB->id,
            'starts_at' => now()->addDay(),
            'ends_at' => now()->addDay()->addHour(),
            'status' => 'pending',
            'booking_reference' => 'APPT-TEST',
            'mode' => 'physical',
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/appointments/{$appointment->id}");

        $response->assertForbidden();
    }

    public function test_peer_counselor_can_view_appointment_on_own_campus(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentA = $this->createUser('student', $this->campusA);

        $appointment = Appointment::create([
            'user_id' => $studentA->id,
            'peer_counselor_id' => $peerA->id,
            'campus_id' => $this->campusA->id,
            'starts_at' => now()->addDay(),
            'ends_at' => now()->addDay()->addHour(),
            'status' => 'pending',
            'booking_reference' => 'APPT-TEST-2',
            'mode' => 'physical',
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/appointments/{$appointment->id}");

        $response->assertOk();
    }

    public function test_peer_counselor_cannot_view_support_request_from_other_campus(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentB = $this->createUser('student', $this->campusB);

        $supportRequest = SupportRequest::create([
            'requester_id' => $studentB->id,
            'campus_id' => $this->campusB->id,
            'category' => 'academic_stress',
            'subject' => 'Private request',
            'details' => 'Private details',
            'status' => 'pending',
            'priority' => 'medium',
            'source' => 'web',
            'is_anonymous' => false,
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/support-requests/{$supportRequest->id}");

        $response->assertForbidden();
    }

    public function test_peer_counselor_can_view_support_request_on_own_campus(): void
    {
        $peerA = $this->createUser('peer_counselor', $this->campusA);
        $studentA = $this->createUser('student', $this->campusA);

        $supportRequest = SupportRequest::create([
            'requester_id' => $studentA->id,
            'campus_id' => $this->campusA->id,
            'category' => 'academic_stress',
            'subject' => 'Campus A request',
            'details' => 'Request details',
            'status' => 'pending',
            'priority' => 'medium',
            'source' => 'web',
            'is_anonymous' => false,
        ]);

        $response = $this->withToken($peerA->createToken('test')->plainTextToken)
            ->getJson("/api/support-requests/{$supportRequest->id}");

        $response->assertOk();
    }

    public function test_student_cannot_view_other_student_conversations(): void
    {
        $studentA = $this->createUser('student', $this->campusA);
        $studentB = $this->createUser('student', $this->campusA);
        $peerA = $this->createUser('peer_counselor', $this->campusA);

        $supportRequest = SupportRequest::create([
            'requester_id' => $studentB->id,
            'campus_id' => $this->campusA->id,
            'category' => 'academic_stress',
            'subject' => 'Test subject',
            'details' => 'Test details',
            'status' => 'pending',
            'priority' => 'medium',
            'source' => 'web',
            'is_anonymous' => false,
        ]);

        $conversation = Conversation::create([
            'support_request_id' => $supportRequest->id,
            'created_by' => $studentB->id,
            'subject' => 'Private conversation',
            'status' => 'open',
        ]);

        $conversation->participants()->attach([
            $studentB->id => ['role' => 'creator', 'joined_at' => now()],
            $peerA->id => ['role' => 'participant', 'joined_at' => now()],
        ]);

        $response = $this->withToken($studentA->createToken('test')->plainTextToken)
            ->getJson("/api/conversations/{$conversation->id}");

        $response->assertForbidden();
    }
}
