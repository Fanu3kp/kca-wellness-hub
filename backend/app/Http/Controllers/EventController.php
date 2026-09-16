<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EventController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Event::query()->where('is_published', true)->with('campus:id,name,code');

        if ($request->filled('campus_id')) {
            $query->where('campus_id', $request->integer('campus_id'));
        }

        if ($request->filled('from')) {
            $query->where('starts_at', '>=', $request->string('from'));
        }

        if ($request->filled('to')) {
            $query->where('starts_at', '<=', $request->string('to'));
        }

        return $this->json($query->orderBy('starts_at')->paginate(15));
    }

    public function show(Event $event): JsonResponse
    {
        $this->authorize('view', $event);

        return $this->json($event->load('campus'));
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Event::class);
        $payload = $request->validate([
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:events,slug'],
            'description' => ['nullable', 'string'],
            'starts_at' => ['required', 'date'],
            'ends_at' => ['required', 'date', 'after:starts_at'],
            'location' => ['nullable', 'string', 'max:255'],
            'external_url' => ['nullable', 'url', 'max:2000'],
            'capacity' => ['nullable', 'integer', 'min:1'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
        ]);
        $payload['slug'] ??= Str::slug($payload['title']);
        $payload['published_at'] ??= $payload['is_published'] ? now() : null;
        $event = Event::create($payload);
        $this->audit('event.created', Event::class, $event->id);

        return $this->json($event, 201);
    }

    public function update(Request $request, Event $event): JsonResponse
    {
        $this->authorize('update', $event);
        $payload = $request->validate([
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'title' => ['sometimes', 'string', 'max:255'],
            'slug' => ['sometimes', 'string', 'max:255', 'unique:events,slug,'.$event->id],
            'description' => ['nullable', 'string'],
            'starts_at' => ['sometimes', 'date'],
            'ends_at' => ['sometimes', 'date', 'after:starts_at'],
            'location' => ['nullable', 'string', 'max:255'],
            'external_url' => ['nullable', 'url', 'max:2000'],
            'capacity' => ['nullable', 'integer', 'min:1'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
        ]);
        if (isset($payload['is_published']) && $payload['is_published'] && ! $event->published_at) {
            $payload['published_at'] = now();
        }
        $event->update($payload);
        $this->audit('event.updated', Event::class, $event->id);

        return $this->json($event);
    }

    public function destroy(Event $event): JsonResponse
    {
        $this->authorize('delete', $event);
        $event->delete();
        $this->audit('event.deleted', Event::class, $event->id);

        return $this->message('Event deleted.');
    }
}
