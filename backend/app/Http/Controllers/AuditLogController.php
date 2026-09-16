<?php

namespace App\Http\Controllers;

use App\Models\AuditLog;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuditLogController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', AuditLog::class);
        $query = AuditLog::query()->with('user:id,name,email');

        if ($request->filled('action')) {
            $query->where('action', $request->string('action'));
        }

        if ($request->filled('entity_type')) {
            $query->where('entity_type', $request->string('entity_type'));
        }

        if ($request->filled('user_id')) {
            $query->where('user_id', $request->integer('user_id'));
        }

        return response()->json(['data' => $query->latest()->paginate(50)]);
    }

    public function show(AuditLog $auditLog): JsonResponse
    {
        $this->authorize('view', $auditLog);

        return $this->json($auditLog->load('user:id,name,email'));
    }
}
