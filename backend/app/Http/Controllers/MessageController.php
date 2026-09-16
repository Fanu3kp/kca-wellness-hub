<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Conversation $conversation): JsonResponse
    {
        $this->authorize('view', $conversation);
        $messages = $conversation->messages()
            ->with('sender:id,name,email')
            ->latest('sent_at')
            ->paginate(30);

        return response()->json(['data' => $messages]);
    }

    public function store(Request $request, Conversation $conversation): JsonResponse
    {
        $this->authorize('view', $conversation);
        $payload = $request->validate([
            'body' => ['required', 'string', 'max:20000'],
            'message_type' => ['sometimes', 'in:text,system'],
        ]);

        $canParticipate = $conversation->participants()
            ->where('user_id', $request->user()->id)
            ->whereNull('left_at')
            ->exists();

        abort_unless(
            $canParticipate || $request->user()->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']),
            403
        );

        $message = $conversation->messages()->create([
            'sender_id' => $request->user()->id,
            'body' => $payload['body'],
            'message_type' => $payload['message_type'] ?? 'text',
            'sent_at' => now(),
        ]);
        $conversation->update(['last_message_at' => now()]);
        $this->audit('message.created', Message::class, $message->id, ['conversation_id' => $conversation->id]);

        return $this->json($message, 201);
    }

    public function show(Conversation $conversation, Message $message): JsonResponse
    {
        $this->authorize('view', $conversation);
        abort_unless($message->conversation_id === $conversation->id, 404);

        return $this->json($message);
    }

    public function update(Request $request, Conversation $conversation, Message $message): JsonResponse
    {
        $this->authorize('view', $conversation);
        abort_unless($message->conversation_id === $conversation->id, 404);
        abort_unless(
            $message->sender_id === $request->user()->id
                || $request->user()->hasAnyRole(['guidance_staff', 'admin']),
            403
        );

        $payload = $request->validate(['body' => ['required', 'string', 'max:20000']]);
        $message->update($payload);
        $this->audit('message.updated', Message::class, $message->id);

        return $this->json($message);
    }

    public function destroy(Conversation $conversation, Message $message): JsonResponse
    {
        $this->authorize('view', $conversation);
        abort_unless($message->conversation_id === $conversation->id, 404);
        abort_unless(
            $message->sender_id === $request->user()->id
                || $request->user()->hasAnyRole(['guidance_staff', 'admin']),
            403
        );
        $message->delete();
        $this->audit('message.deleted', Message::class, $message->id);

        return $this->message('Message deleted.');
    }
}
