<?php

namespace App\Http\Controllers;

use App\Models\Escalation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EscalationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Escalation::class);
        $query = Escalation::query()->with(['supportRequest', 'conversation', 'escalatedBy:id,name,email', 'assignee:id,name,email']);

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        if ($request->filled('severity')) {
            $query->where('severity', $request->string('severity'));
        }

        return response()->json(['data' => $query->latest('escalated_at')->paginate(15)]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Escalation::class);
        $payload = $request->validate([
            'support_request_id' => ['required', 'exists:support_requests,id'],
            'conversation_id' => ['nullable', 'exists:conversations,id'],
            'assigned_to' => ['nullable', 'exists:users,id'],
            'reason' => ['required', 'string', 'max:10000'],
            'severity' => ['sometimes', 'in:low,medium,high,critical'],
            'status' => ['sometimes', 'in:open,in_progress,resolved,closed'],
            'external_reference' => ['nullable', 'string', 'max:100'],
            'notes' => ['nullable', 'string', 'max:10000'],
            'escalated_at' => ['nullable', 'date'],
        ]);
        $payload['escalated_by'] = $request->user()->id;
        $payload['severity'] ??= 'medium';
        $payload['status'] ??= 'open';
        $payload['escalated_at'] ??= now();
        $escalation = Escalation::create($payload);
        $this->audit('escalation.created', Escalation::class, $escalation->id, ['severity' => $escalation->severity]);

        return $this->json($escalation, 201);
    }

    public function show(Escalation $escalation): JsonResponse
    {
        $this->authorize('view', $escalation);

        return $this->json($escalation->load(['supportRequest', 'conversation', 'escalatedBy:id,name,email', 'assignee:id,name,email']));
    }

    public function update(Request $request, Escalation $escalation): JsonResponse
    {
        $this->authorize('update', $escalation);
        $payload = $request->validate([
            'assigned_to' => ['sometimes', 'nullable', 'exists:users,id'],
            'reason' => ['sometimes', 'string', 'max:10000'],
            'severity' => ['sometimes', 'in:low,medium,high,critical'],
            'status' => ['sometimes', 'in:open,in_progress,resolved,closed'],
            'external_reference' => ['nullable', 'string', 'max:100'],
            'notes' => ['nullable', 'string', 'max:10000'],
            'resolved_at' => ['nullable', 'date'],
        ]);
        $escalation->update($payload);
        $this->audit('escalation.updated', Escalation::class, $escalation->id, ['status' => $escalation->status]);

        return $this->json($escalation);
    }

    public function destroy(Escalation $escalation): JsonResponse
    {
        $this->authorize('delete', $escalation);
        $escalation->delete();
        $this->audit('escalation.deleted', Escalation::class, $escalation->id);

        return $this->message('Escalation deleted.');
    }
}
