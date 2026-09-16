<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\SupportRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConversationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Conversation::class);
        $query = Conversation::query()->with(['supportRequest', 'creator:id,name,email', 'participants:id,name,email']);

        if (! $request->user()->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin'])) {
            $query->whereHas('participants', static function ($query) use ($request): void {
                $query->where('user_id', $request->user()->id)->whereNull('left_at');
            });
        }

        return response()->json(['data' => $query->latest('last_message_at')->paginate(15)]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Conversation::class);
        $payload = $request->validate([
            'support_request_id' => ['nullable', 'exists:support_requests,id'],
            'subject' => ['nullable', 'string', 'max:255'],
        ]);

        $conversation = DB::transaction(function () use ($payload, $request): Conversation {
            if (isset($payload['support_request_id'])) {
                $supportRequest = SupportRequest::findOrFail($payload['support_request_id']);
                $this->authorize('view', $supportRequest);
            }

            $conversation = Conversation::create([
                'support_request_id' => $payload['support_request_id'] ?? null,
                'created_by' => $request->user()->id,
                'subject' => $payload['subject'] ?? null,
                'status' => 'open',
            ]);
            $conversation->participants()->attach($request->user()->id, [
                'role' => 'creator',
                'joined_at' => now(),
            ]);

            return $conversation;
        });

        $this->audit('conversation.created', Conversation::class, $conversation->id);

        return $this->json($conversation, 201);
    }

    public function show(Conversation $conversation): JsonResponse
    {
        $this->authorize('view', $conversation);
        $conversation->load(['supportRequest', 'creator:id,name,email', 'participants:id,name,email', 'messages.sender:id,name,email']);

        return $this->json($conversation);
    }

    public function update(Request $request, Conversation $conversation): JsonResponse
    {
        $this->authorize('update', $conversation);
        $payload = $request->validate([
            'subject' => ['sometimes', 'nullable', 'string', 'max:255'],
            'status' => ['sometimes', 'in:open,closed'],
        ]);
        $conversation->update($payload);
        $this->audit('conversation.updated', Conversation::class, $conversation->id);

        return $this->json($conversation);
    }

    public function destroy(Conversation $conversation): JsonResponse
    {
        $this->authorize('delete', $conversation);
        $conversation->delete();
        $this->audit('conversation.deleted', Conversation::class, $conversation->id);

        return $this->message('Conversation deleted.');
    }
}
