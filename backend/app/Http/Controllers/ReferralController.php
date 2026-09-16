<?php

namespace App\Http\Controllers;

use App\Models\Referral;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReferralController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Referral::class);
        $query = Referral::query()->with(['supportRequest', 'fromUser:id,name,email', 'toUser:id,name,email']);

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        return response()->json(['data' => $query->latest('referred_at')->paginate(15)]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Referral::class);
        $payload = $request->validate([
            'support_request_id' => ['required', 'exists:support_requests,id'],
            'to_user_id' => ['required', 'exists:users,id'],
            'reason' => ['required', 'string', 'max:10000'],
            'notes' => ['nullable', 'string', 'max:10000'],
            'status' => ['sometimes', 'in:pending,accepted,declined,completed'],
            'referred_at' => ['nullable', 'date'],
        ]);
        $payload['from_user_id'] = $request->user()->id;
        $payload['status'] ??= 'pending';
        $payload['referred_at'] ??= now();
        $referral = Referral::create($payload);
        $this->audit('referral.created', Referral::class, $referral->id);

        return $this->json($referral, 201);
    }

    public function show(Referral $referral): JsonResponse
    {
        $this->authorize('view', $referral);

        return $this->json($referral->load(['supportRequest', 'fromUser:id,name,email', 'toUser:id,name,email']));
    }

    public function update(Request $request, Referral $referral): JsonResponse
    {
        $this->authorize('update', $referral);
        $payload = $request->validate([
            'status' => ['sometimes', 'in:pending,accepted,declined,completed'],
            'reason' => ['sometimes', 'string', 'max:10000'],
            'notes' => ['nullable', 'string', 'max:10000'],
            'completed_at' => ['nullable', 'date'],
        ]);
        $referral->update($payload);
        $this->audit('referral.updated', Referral::class, $referral->id, ['status' => $referral->status]);

        return $this->json($referral);
    }

    public function destroy(Referral $referral): JsonResponse
    {
        $this->authorize('delete', $referral);
        $referral->delete();
        $this->audit('referral.deleted', Referral::class, $referral->id);

        return $this->message('Referral deleted.');
    }
}
