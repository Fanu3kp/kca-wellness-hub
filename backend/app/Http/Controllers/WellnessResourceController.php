<?php

namespace App\Http\Controllers;

use App\Models\WellnessResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class WellnessResourceController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = WellnessResource::query()->where('is_published', true)->with('campus:id,name,code');

        if ($request->filled('category')) {
            $query->where('category', $request->string('category'));
        }

        if ($request->filled('campus_id')) {
            $query->where('campus_id', $request->integer('campus_id'));
        }

        if ($request->filled('search')) {
            $query->where('title', 'like', '%'.$request->string('search').'%');
        }

        return $this->json($query->orderBy('sort_order')->orderByDesc('published_at')->paginate(15));
    }

    public function show(WellnessResource $wellnessResource): JsonResponse
    {
        $this->authorize('view', $wellnessResource);

        return $this->json($wellnessResource->load('campus'));
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', WellnessResource::class);
        $payload = $request->validate([
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:wellness_resources,slug'],
            'summary' => ['nullable', 'string', 'max:2000'],
            'body' => ['nullable', 'string'],
            'category' => ['nullable', 'string', 'max:60'],
            'audience' => ['sometimes', 'string', 'max:60'],
            'url' => ['nullable', 'url', 'max:2000'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        $payload['slug'] ??= Str::slug($payload['title']);
        $payload['published_at'] ??= $payload['is_published'] ? now() : null;
        $resource = WellnessResource::create($payload);
        $this->audit('wellness_resource.created', WellnessResource::class, $resource->id);

        return $this->json($resource, 201);
    }

    public function update(Request $request, WellnessResource $wellnessResource): JsonResponse
    {
        $this->authorize('update', $wellnessResource);
        $payload = $request->validate([
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'title' => ['sometimes', 'string', 'max:255'],
            'slug' => ['sometimes', 'string', 'max:255', 'unique:wellness_resources,slug,'.$wellnessResource->id],
            'summary' => ['nullable', 'string', 'max:2000'],
            'body' => ['nullable', 'string'],
            'category' => ['nullable', 'string', 'max:60'],
            'audience' => ['sometimes', 'string', 'max:60'],
            'url' => ['nullable', 'url', 'max:2000'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        if (isset($payload['is_published']) && $payload['is_published'] && ! $wellnessResource->published_at) {
            $payload['published_at'] = now();
        }
        $wellnessResource->update($payload);
        $this->audit('wellness_resource.updated', WellnessResource::class, $wellnessResource->id);

        return $this->json($wellnessResource);
    }

    public function destroy(WellnessResource $wellnessResource): JsonResponse
    {
        $this->authorize('delete', $wellnessResource);
        $wellnessResource->delete();
        $this->audit('wellness_resource.deleted', WellnessResource::class, $wellnessResource->id);

        return $this->message('Wellness resource deleted.');
    }
}
