<?php

namespace App\Http\Controllers;

use App\Models\TrainingModule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TrainingModuleController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = TrainingModule::query()->where('is_published', true);

        if ($request->filled('level')) {
            $query->where('level', $request->string('level'));
        }

        if ($request->filled('search')) {
            $query->where('title', 'like', '%'.$request->string('search').'%');
        }

        return $this->json($query->orderBy('sort_order')->paginate(15));
    }

    public function show(TrainingModule $trainingModule): JsonResponse
    {
        $this->authorize('view', $trainingModule);

        return $this->json($trainingModule);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', TrainingModule::class);
        $payload = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:training_modules,slug'],
            'description' => ['nullable', 'string'],
            'content_url' => ['nullable', 'url', 'max:2000'],
            'duration_minutes' => ['sometimes', 'integer', 'min:1'],
            'level' => ['sometimes', 'in:beginner,intermediate,advanced'],
            'is_published' => ['boolean'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        $payload['slug'] ??= Str::slug($payload['title']);
        $module = TrainingModule::create($payload);
        $this->audit('training_module.created', TrainingModule::class, $module->id);

        return $this->json($module, 201);
    }

    public function update(Request $request, TrainingModule $trainingModule): JsonResponse
    {
        $this->authorize('update', $trainingModule);
        $payload = $request->validate([
            'title' => ['sometimes', 'string', 'max:255'],
            'slug' => ['sometimes', 'string', 'max:255', 'unique:training_modules,slug,'.$trainingModule->id],
            'description' => ['nullable', 'string'],
            'content_url' => ['nullable', 'url', 'max:2000'],
            'duration_minutes' => ['sometimes', 'integer', 'min:1'],
            'level' => ['sometimes', 'in:beginner,intermediate,advanced'],
            'is_published' => ['boolean'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        $trainingModule->update($payload);
        $this->audit('training_module.updated', TrainingModule::class, $trainingModule->id);

        return $this->json($trainingModule);
    }

    public function destroy(TrainingModule $trainingModule): JsonResponse
    {
        $this->authorize('delete', $trainingModule);
        $trainingModule->delete();
        $this->audit('training_module.deleted', TrainingModule::class, $trainingModule->id);

        return $this->message('Training module deleted.');
    }
}
