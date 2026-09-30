<?php

namespace App\Http\Controllers;

use App\Models\Connect;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ConnectController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'followed_id' => ['required', 'exists:users,id'],
        ]);

        $follower = $request->user();
        $followed = User::findOrFail($payload['followed_id']);

        if (! $followed->is_active) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if ($follower->id === $followed->id) {
            return response()->json(['message' => 'Cannot follow yourself.'], 422);
        }

        if (! $follower->hasRole('admin')) {
            $followerCampusId = $follower->profile?->campus_id;
            $followedCampusId = $followed->profile?->campus_id;

            if ($followerCampusId && $followedCampusId && (int) $followerCampusId !== (int) $followedCampusId) {
                return response()->json(['message' => 'You can only connect with users on your own campus.'], 403);
            }
        }

        if ($follower->id === $followed->id) {
            return response()->json(['message' => 'Cannot follow yourself.'], 422);
        }

        $exists = Connect::where('follower_id', $follower->id)
            ->where('followed_id', $followed->id)
            ->first();

        if ($exists) {
            return response()->json(['message' => 'Connect request already exists.'], 422);
        }

        $connect = Connect::create([
            'follower_id' => $follower->id,
            'followed_id' => $followed->id,
            'status' => 'pending',
        ]);

        $this->audit('connect.requested', Connect::class, $connect->id);

        return response()->json(['data' => $connect], 201);
    }

    public function accept(Request $request, Connect $connect): JsonResponse
    {
        $this->authorize('update', $connect);

        if ($connect->status !== 'pending') {
            return response()->json(['message' => 'Only pending requests can be accepted.'], 422);
        }

        $connect->update(['status' => 'accepted']);
        $this->audit('connect.accepted', Connect::class, $connect->id);

        return response()->json(['data' => $connect]);
    }

    public function reject(Request $request, Connect $connect): JsonResponse
    {
        $this->authorize('update', $connect);

        if ($connect->status !== 'pending') {
            return response()->json(['message' => 'Only pending requests can be rejected.'], 422);
        }

        $connect->update(['status' => 'rejected']);
        $this->audit('connect.rejected', Connect::class, $connect->id);

        return response()->json(['data' => $connect]);
    }

    public function incoming(Request $request): JsonResponse
    {
        $requests = Connect::where('followed_id', $request->user()->id)
            ->where('status', 'pending')
            ->with('follower')
            ->orderByDesc('created_at')
            ->get();

        return response()->json(['data' => $requests]);
    }

    public function destroy(Request $request, Connect $connect): JsonResponse
    {
        $this->authorize('delete', $connect);

        if ($request->user()->id !== $connect->follower_id) {
            return response()->json(['message' => 'Forbidden.'], 403);
        }

        $connect->delete();
        $this->audit('connect.unfollowed', Connect::class, $connect->id);

        return response()->json(['message' => 'Unfollowed.']);
    }

    public function status(Request $request, User $user): JsonResponse
    {
        $authUser = $request->user();

        $connect = Connect::where('follower_id', $authUser->id)
            ->where('followed_id', $user->id)
            ->first();

        return response()->json(['data' => [
            'status' => $connect?->status,
            'is_following' => $connect?->status === 'accepted',
            'connect_id' => $connect?->id,
        ]]);
    }

    public function followers(User $user): JsonResponse
    {
        $followers = User::whereIn('id', function ($query) use ($user) {
            $query->select('follower_id')
                ->from('connects')
                ->whereColumn('followed_id', '=', $user->id)
                ->where('status', 'accepted');
        })->get();

        return response()->json(['data' => $followers]);
    }

    public function following(User $user): JsonResponse
    {
        $following = User::whereIn('id', function ($query) use ($user) {
            $query->select('followed_id')
                ->from('connects')
                ->whereColumn('follower_id', '=', $user->id)
                ->where('status', 'accepted');
        })->get();

        return response()->json(['data' => $following]);
    }
}
