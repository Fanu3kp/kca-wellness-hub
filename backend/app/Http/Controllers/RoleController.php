<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(): JsonResponse
    {
        $this->authorize('viewAny', Role::class);

        return $this->json(Role::query()->orderBy('name')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Role::class);
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:40', 'unique:roles,name'],
            'description' => ['nullable', 'string', 'max:255'],
        ]);
        $role = Role::create($payload);
        $this->audit('role.created', Role::class, $role->id);

        return $this->json($role, 201);
    }

    public function show(Role $role): JsonResponse
    {
        $this->authorize('view', $role);

        return $this->json($role);
    }

    public function update(Request $request, Role $role): JsonResponse
    {
        $this->authorize('update', $role);
        $payload = $request->validate([
            'name' => ['sometimes', 'string', 'max:40', 'unique:roles,name,'.$role->id],
            'description' => ['nullable', 'string', 'max:255'],
        ]);
        $role->update($payload);
        $this->audit('role.updated', Role::class, $role->id);

        return $this->json($role);
    }

    public function destroy(Role $role): JsonResponse
    {
        $this->authorize('delete', $role);
        $role->delete();
        $this->audit('role.deleted', Role::class, $role->id);

        return $this->message('Role deleted.');
    }
}
