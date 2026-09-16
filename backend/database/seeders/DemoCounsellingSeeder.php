<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\ConversationParticipant;
use App\Models\Message;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Database\Seeder;

class DemoCounsellingSeeder extends Seeder
{
    public function run(): void
    {
        $student = User::where('email', 'student@example.test')->firstOrFail();
        $counsellor = User::where('email', 'counsellor@example.test')->firstOrFail();
        $campus = $student->profile?->campus_id;

        $request = SupportRequest::updateOrCreate(
            ['subject' => 'Demo wellness check-in'],
            [
                'requester_id' => $student->id,
                'campus_id' => $campus,
                'assigned_to' => $counsellor->id,
                'category' => 'general_wellness',
                'details' => 'Demo request containing no personal or confidential counselling information.',
                'status' => 'assigned',
                'priority' => 'low',
                'source' => 'seed',
                'is_anonymous' => false,
            ]
        );

        $conversation = Conversation::updateOrCreate(
            ['support_request_id' => $request->id],
            [
                'created_by' => $student->id,
                'subject' => 'Demo support conversation',
                'status' => 'open',
            ]
        );

        ConversationParticipant::updateOrCreate(
            ['conversation_id' => $conversation->id, 'user_id' => $student->id],
            ['role' => 'requester', 'joined_at' => now()]
        );
        ConversationParticipant::updateOrCreate(
            ['conversation_id' => $conversation->id, 'user_id' => $counsellor->id],
            ['role' => 'counsellor', 'joined_at' => now()]
        );

        Message::updateOrCreate(
            ['conversation_id' => $conversation->id, 'sender_id' => $counsellor->id, 'body' => 'Demo message: please use the approved support process.'],
            [
                'message_type' => 'text',
                'sent_at' => now(),
            ]
        );
    }
}
