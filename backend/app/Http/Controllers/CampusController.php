<?php

namespace App\Http\Controllers;

use App\Models\Campus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CampusController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Campus::query()->where('is_active', true);

        if ($request->filled('search')) {
            $query->where('name', 'like', '%'.$request->string('search').'%');
        }

        return $this->json($query->orderBy('name')->get());
    }

    public function show(Campus $campus): JsonResponse
    {
        return $this->json($campus);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Campus::class);
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:80', 'unique:campuses,name'],
            'code' => ['required', 'string', 'max:20', 'unique:campuses,code'],
            'location' => ['nullable', 'string', 'max:255'],
            'physical_support' => ['boolean'],
            'virtual_support' => ['boolean'],
            'is_active' => ['boolean'],
        ]);
        $campus = Campus::create($payload);
        $this->audit('campus.created', Campus::class, $campus->id);

        return $this->json($campus, 201);
    }

    public function update(Request $request, Campus $campus): JsonResponse
    {
        $this->authorize('update', $campus);
        $payload = $request->validate([
            'name' => ['sometimes', 'string', 'max:80', 'unique:campuses,name,'.$campus->id],
            'code' => ['sometimes', 'string', 'max:20', 'unique:campuses,code,'.$campus->id],
            'location' => ['nullable', 'string', 'max:255'],
            'physical_support' => ['boolean'],
            'virtual_support' => ['boolean'],
            'is_active' => ['boolean'],
        ]);
        $campus->update($payload);
        $this->audit('campus.updated', Campus::class, $campus->id);

        return $this->json($campus);
    }

    public function destroy(Campus $campus): JsonResponse
    {
        $this->authorize('delete', $campus);
        $campus->delete();
        $this->audit('campus.deleted', Campus::class, $campus->id);

        return $this->message('Campus deleted.');
    }
}
