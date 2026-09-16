<?php

namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    public function index(): JsonResponse
    {
        return $this->json(SocialLink::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('platform')
            ->get());
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', SocialLink::class);
        $payload = $request->validate([
            'platform' => ['required', 'string', 'max:40', 'in:facebook,instagram,tiktok,linkedin,x,youtube,whatsapp,website'],
            'label' => ['required', 'string', 'max:80'],
            'url' => ['required', 'url', 'max:2000'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'is_active' => ['boolean'],
        ]);
        $link = SocialLink::create($payload);
        $this->audit('social_link.created', SocialLink::class, $link->id);

        return $this->json($link, 201);
    }

    public function show(SocialLink $socialLink): JsonResponse
    {
        $this->authorize('view', $socialLink);

        return $this->json($socialLink);
    }

    public function update(Request $request, SocialLink $socialLink): JsonResponse
    {
        $this->authorize('update', $socialLink);
        $payload = $request->validate([
            'platform' => ['sometimes', 'string', 'max:40', 'in:facebook,instagram,tiktok,linkedin,x,youtube,whatsapp,website'],
            'label' => ['sometimes', 'string', 'max:80'],
            'url' => ['sometimes', 'url', 'max:2000'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'is_active' => ['boolean'],
        ]);
        $socialLink->update($payload);
        $this->audit('social_link.updated', SocialLink::class, $socialLink->id);

        return $this->json($socialLink);
    }

    public function destroy(SocialLink $socialLink): JsonResponse
    {
        $this->authorize('delete', $socialLink);
        $socialLink->delete();
        $this->audit('social_link.deleted', SocialLink::class, $socialLink->id);

        return $this->message('Social link deleted.');
    }
}
