<?php

namespace App\Http\Controllers;

use App\Models\BookingProvider;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookingProviderController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = BookingProvider::query()->where('is_active', true)->with('campus:id,name,code');

        if ($request->filled('campus_id')) {
            $query->where('campus_id', $request->integer('campus_id'));
        }

        if ($request->filled('mode')) {
            $query->where('mode', $request->string('mode'));
        }

        return $this->json($query->orderBy('sort_order')->orderBy('name')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', BookingProvider::class);
        $payload = $request->validate([
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'name' => ['required', 'string', 'max:80'],
            'mode' => ['required', 'in:main,virtual'],
            'external_booking_url' => ['required', 'url', 'max:2000'],
            'is_active' => ['boolean'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        $provider = BookingProvider::create($payload);
        $this->audit('booking_provider.created', BookingProvider::class, $provider->id);

        return $this->json($provider, 201);
    }

    public function show(BookingProvider $bookingProvider): JsonResponse
    {
        $this->authorize('view', $bookingProvider);

        return $this->json($bookingProvider->load('campus'));
    }

    public function update(Request $request, BookingProvider $bookingProvider): JsonResponse
    {
        $this->authorize('update', $bookingProvider);
        $payload = $request->validate([
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'name' => ['sometimes', 'string', 'max:80'],
            'mode' => ['sometimes', 'in:main,virtual'],
            'external_booking_url' => ['sometimes', 'url', 'max:2000'],
            'is_active' => ['boolean'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
        ]);
        $bookingProvider->update($payload);
        $this->audit('booking_provider.updated', BookingProvider::class, $bookingProvider->id);

        return $this->json($bookingProvider);
    }

    public function destroy(BookingProvider $bookingProvider): JsonResponse
    {
        $this->authorize('delete', $bookingProvider);
        $bookingProvider->delete();
        $this->audit('booking_provider.deleted', BookingProvider::class, $bookingProvider->id);

        return $this->message('Booking provider deleted.');
    }
}
