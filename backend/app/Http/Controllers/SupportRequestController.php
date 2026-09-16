<?php

namespace App\Http\Controllers;

use App\Models\SupportRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupportRequestController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', SupportRequest::class);
        $query = SupportRequest::query()->with(['campus', 'assignee:id,name,email']);

        if (! $request->user()->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin'])) {
            $query->where('requester_id', $request->user()->id);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        if ($request->filled('campus_id')) {
            $query->where('campus_id', $request->integer('campus_id'));
        }

        return response()->json([
            'data' => $query->latest()->paginate(15),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', SupportRequest::class);
        $payload = $request->validate([
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'category' => ['required', 'string', 'max:80'],
            'subject' => ['required', 'string', 'max:255'],
            'details' => ['required', 'string', 'max:10000'],
            'priority' => ['sometimes', 'in:low,medium,high'],
            'source' => ['sometimes', 'string', 'max:30'],
            'is_anonymous' => ['boolean'],
        ]);
        $payload['requester_id'] = $request->user()->id;
        $payload['status'] = 'pending';
        $requestPayload = DB::transaction(static fn (): SupportRequest => SupportRequest::create($payload));
        $this->audit('support_request.created', SupportRequest::class, $requestPayload->id);

        return $this->json($requestPayload, 201);
    }

    public function show(SupportRequest $supportRequest): JsonResponse
    {
        $this->authorize('view', $supportRequest);

        return $this->json($supportRequest);
    }

    public function update(Request $request, SupportRequest $supportRequest): JsonResponse
    {
        $this->authorize('update', $supportRequest);
        $payload = $request->validate([
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'category' => ['sometimes', 'string', 'max:80'],
            'subject' => ['sometimes', 'string', 'max:255'],
            'details' => ['sometimes', 'string', 'max:10000'],
            'status' => ['sometimes', 'in:pending,assigned,in_progress,resolved,closed'],
            'priority' => ['sometimes', 'in:low,medium,high'],
            'assigned_to' => ['sometimes', 'nullable', 'exists:users,id'],
            'resolved_at' => ['sometimes', 'nullable', 'date'],
        ]);
        $supportRequest->update($payload);
        $this->audit('support_request.updated', SupportRequest::class, $supportRequest->id, ['status' => $supportRequest->status]);

        return $this->json($supportRequest);
    }

    public function destroy(SupportRequest $supportRequest): JsonResponse
    {
        $this->authorize('delete', $supportRequest);
        $supportRequest->delete();
        $this->audit('support_request.deleted', SupportRequest::class, $supportRequest->id);

        return $this->message('Support request deleted.');
    }
}
