<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Notification::class);
        $query = Notification::query()
            ->where('user_id', $request->user()->id)
            ->orderByDesc('read_at')
            ->orderByDesc('created_at');

        if ($request->filled('unread')) {
            $query->whereNull('read_at');
        }

        return response()->json(['data' => $query->paginate(20)]);
    }

    public function show(Notification $notification): JsonResponse
    {
        $this->authorize('view', $notification);

        return $this->json($notification);
    }

    public function markRead(Request $request, Notification $notification): JsonResponse
    {
        $this->authorize('update', $notification);
        abort_unless($notification->user_id === $request->user()->id, 403);
        $notification->update(['read_at' => $notification->read_at ?? now()]);
        $this->audit('notification.marked_read', Notification::class, $notification->id);

        return $this->json($notification);
    }

    public function markAllRead(Request $request): JsonResponse
    {
        $updated = Notification::query()
            ->where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);
        $this->audit('notification.marked_all_read', Notification::class, null, ['updated' => $updated]);

        return $this->message('Notifications marked as read.');
    }
}
