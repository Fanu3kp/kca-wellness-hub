<?php

namespace App\Http\Controllers;

use App\Models\SupportRequest;
use App\Models\User;
use App\Models\Notification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupportRequestController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', SupportRequest::class);
        $query = SupportRequest::query()->with(['campus', 'assignee:id,name,email']);

        $user = $request->user();
        $isStaff = $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']);

        if (! $isStaff) {
            $query->where('requester_id', $user->id);
        } elseif (! $user->hasRole('admin')) {
            $campusId = $user->profile?->campus_id;
            if ($campusId) {
                $query->where('campus_id', $campusId);
            }
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

        $user = $request->user();
        $campusId = $payload['campus_id'] ?? $user->profile?->campus_id;

        if (! $campusId && $user->hasRole('student')) {
            abort(422, 'You must be associated with a campus to create a support request.');
        }

        $payload['requester_id'] = $user->id;
        $payload['campus_id'] = $campusId;
        $payload['status'] = 'pending';

        $supportRequest = DB::transaction(function () use ($payload, $user, $campusId): SupportRequest {
            $supportRequest = SupportRequest::create($payload);

            $assignedCounselor = $this->assignPeerCounselor($campusId, $user->id, $supportRequest);

            if ($assignedCounselor) {
                $supportRequest->update([
                    'assigned_to' => $assignedCounselor->id,
                    'status' => 'assigned',
                ]);

                Notification::create([
                    'user_id' => $assignedCounselor->id,
                    'type' => 'escalation',
                    'title' => 'New client request assigned',
                    'body' => 'A student on your campus has submitted a support request in the wellness hub.',
                    'data' => [
                        'support_request_id' => $supportRequest->id,
                        'category' => $supportRequest->category,
                        'priority' => $supportRequest->priority,
                    ],
                ]);
            } else {
                $peerCounselors = User::query()
                    ->whereHas('roles', fn ($q) => $q->where('name', 'peer_counselor'))
                    ->whereHas('profile', fn ($q) => $q->where('campus_id', $campusId))
                    ->get();

                foreach ($peerCounselors as $counselor) {
                    Notification::create([
                        'user_id' => $counselor->id,
                        'type' => 'escalation',
                        'title' => 'New support request on your campus',
                        'body' => 'A student has submitted a support request. Please review and claim it.',
                        'data' => [
                            'support_request_id' => $supportRequest->id,
                            'category' => $supportRequest->category,
                            'priority' => $supportRequest->priority,
                        ],
                    ]);
                }
            }

            return $supportRequest;
        });

        $this->audit('support_request.created', SupportRequest::class, $supportRequest->id);

        return $this->json($supportRequest->load(['campus', 'assignee:id,name,email']), 201);
    }

    private function assignPeerCounselor(?int $campusId, int $requesterId, SupportRequest $supportRequest): ?User
    {
        if (! $campusId) return null;

        return User::query()
            ->where('is_active', true)
            ->where('id', '!=', $requesterId)
            ->whereHas('roles', fn ($q) => $q->where('name', 'peer_counselor'))
            ->whereHas('profile', fn ($q) => $q->where('campus_id', $campusId))
            ->inRandomOrder()
            ->first();
    }

    public function referToGuidance(Request $request, SupportRequest $supportRequest): JsonResponse
    {
        $user = $request->user();
        $this->authorize('view', $supportRequest);

        if (! $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin'])) {
            if ($supportRequest->requester_id !== $user->id) {
                abort(403, 'You can only refer your own requests.');
            }
        }

        if ($user->hasRole('peer_counselor') && $supportRequest->campus_id !== ($user->profile?->campus_id)) {
            abort(403, 'You can only refer requests from students on your own campus.');
        }

        $payload = $request->validate([
            'reason' => ['nullable', 'string', 'max:10000'],
            'notes' => ['nullable', 'string', 'max:10000'],
        ]);

        if (! $supportRequest->campus_id && ! $user->hasRole('admin')) {
            abort(422, 'Cannot refer a request without a campus.');
        }

        $campusId = $supportRequest->campus_id ?? $user->profile?->campus_id;
        $guidanceTier = User::query()
            ->whereHas('roles', fn ($q) => $q->whereIn('name', ['guidance_staff', 'hod']))
            ->when($campusId, fn ($q) => $q->whereHas('profile', fn ($pq) => $pq->where('campus_id', $campusId)))
            ->get();

        if ($guidanceTier->isEmpty()) {
            abort(404, 'No Guidance & Counselling staff or HOD found on this campus.');
        }

        $recipient = $guidanceTier->first(fn (User $staff) => $staff->hasRole('hod')) ?? $guidanceTier->first();

        $reason = $payload['reason'] ?? "Referral requested for {$supportRequest->category} support.";

        return DB::transaction(function () use ($supportRequest, $user, $recipient, $guidanceTier, $reason, $payload): JsonResponse {
            $referral = \App\Models\Referral::create([
                'support_request_id' => $supportRequest->id,
                'from_user_id' => $user->id,
                'to_user_id' => $recipient->id,
                'reason' => $reason,
                'notes' => $payload['notes'] ?? null,
                'status' => 'pending',
                'referred_at' => now(),
            ]);

            $referralData = [
                'support_request_id' => $supportRequest->id,
                'referral_id' => $referral->id,
                'category' => $supportRequest->category,
            ];

            foreach ($guidanceTier as $staff) {
                Notification::create([
                    'user_id' => $staff->id,
                    'type' => 'escalation',
                    'title' => 'Referral from your campus',
                    'body' => "A support request requires professional Guidance & Counselling review.",
                    'data' => $referralData,
                ]);
            }

            if ($supportRequest->requester_id !== $user->id) {
                Notification::create([
                    'user_id' => $supportRequest->requester_id,
                    'type' => 'message',
                    'title' => 'Referral to Guidance & Counselling',
                    'body' => 'Your support request has been referred to professional Guidance & Counselling staff.',
                    'data' => [
                        'support_request_id' => $supportRequest->id,
                        'referral_id' => $referral->id,
                    ],
                ]);
            }

            $this->audit('referral.created', \App\Models\Referral::class, $referral->id, ['from_student' => true]);

            return $this->json($referral->load('fromUser:id,name,email', 'toUser:id,name,email'), 201);
        });
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
