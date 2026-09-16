<?php

namespace App\Http\Controllers;

use App\Mail\AppointmentBooked;
use App\Models\Appointment;
use App\Models\BookingProvider;
use App\Models\Notification;
use App\Models\SupportRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AppointmentController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Appointment::class);
        $query = Appointment::query()
            ->with([
                'user:id,name,email',
                'bookingProvider:id,name,mode,campus_id',
                'campus:id,name,code',
                'supportRequest:id,subject,status',
            ]);

        $user = $request->user();
        $isAdmin = $user->hasRole('admin');
        $isStaff = $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);

        if (! $isStaff) {
            $query->where('user_id', $user->id);
        } elseif (! $isAdmin) {
            $campusId = $user->profile?->campus_id;
            if ($campusId) {
                $query->where('campus_id', $campusId);
            }
        }

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        if ($request->filled('campus_id')) {
            $query->where('campus_id', $request->integer('campus_id'));
        }

        if ($request->filled('from')) {
            $query->where('starts_at', '>=', $request->string('from'));
        }

        if ($request->filled('to')) {
            $query->where('starts_at', '<=', $request->string('to'));
        }

        return response()->json(['data' => $query->orderBy('starts_at')->paginate(15)]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->authorize('create', Appointment::class);
        $payload = $request->validate([
            'booking_provider_id' => ['required', 'exists:booking_providers,id'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'support_request_id' => ['nullable', 'exists:support_requests,id'],
            'starts_at' => ['required', 'date'],
            'ends_at' => ['required', 'date', 'after:starts_at'],
            'notes' => ['nullable', 'string', 'max:10000'],
        ]);

        $provider = BookingProvider::query()
            ->whereKey($payload['booking_provider_id'])
            ->where('is_active', true)
            ->firstOrFail();

        $campusId = $payload['campus_id'] ?? $provider->campus_id;
        if ($provider->campus_id && $campusId && (int) $provider->campus_id !== (int) $campusId) {
            abort(422, 'The selected campus does not match this booking provider.');
        }

        $user = $request->user();
        $profileCampusId = $user->profile?->campus_id;
        if ($profileCampusId && $campusId && (int) $profileCampusId !== (int) $campusId && ! $user->hasAnyRole(['guidance_staff', 'admin'])) {
            abort(422, 'Select a booking provider for your campus.');
        }

        if (isset($payload['support_request_id'])) {
            $supportRequest = SupportRequest::query()->whereKey($payload['support_request_id'])->firstOrFail();
            $canLinkRequest = $supportRequest->requester_id === $user->id
                || $supportRequest->assigned_to === $user->id
                || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
            abort_unless($canLinkRequest, 403, 'You cannot link this support request.');
        }

        $payload['user_id'] = $user->id;
        $payload['campus_id'] = $campusId;
        $payload['status'] = 'pending';
        $payload['booking_reference'] = 'APPT-'.Str::uuid();

        $hasConflict = Appointment::query()
            ->where('booking_provider_id', $payload['booking_provider_id'])
            ->whereIn('status', ['pending', 'confirmed'])
            ->where('starts_at', '<', $payload['ends_at'])
            ->where('ends_at', '>', $payload['starts_at'])
            ->exists();
        abort_unless(! $hasConflict, 422, 'That time slot is no longer available.');

        $appointment = DB::transaction(static fn (): Appointment => Appointment::create($payload));
        Notification::create([
            'user_id' => $user->id,
            'type' => 'appointment',
            'title' => 'Appointment request recorded',
            'body' => 'Your appointment request has been recorded and is pending confirmation.',
            'data' => [
                'appointment_id' => $appointment->id,
                'booking_reference' => $appointment->booking_reference,
            ],
        ]);

        $appointment->load([
            'user:id,name,email',
            'bookingProvider:id,name,mode,campus_id',
            'campus:id,name,code',
        ]);

        Mail::to($appointment->user->email)->send(new AppointmentBooked($appointment));

        $this->audit('appointment.created', Appointment::class, $appointment->id);

        return $this->json($appointment->load(['bookingProvider', 'campus']), 201);
    }

    public function show(Appointment $appointment): JsonResponse
    {
        $this->authorize('view', $appointment);

        return $this->json($appointment->load([
            'user:id,name,email',
            'bookingProvider',
            'campus',
            'supportRequest',
        ]));
    }

    public function update(Request $request, Appointment $appointment): JsonResponse
    {
        $this->authorize('update', $appointment);
        $payload = $request->validate([
            'booking_provider_id' => ['sometimes', 'exists:booking_providers,id'],
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'support_request_id' => ['sometimes', 'nullable', 'exists:support_requests,id'],
            'starts_at' => ['sometimes', 'date'],
            'ends_at' => ['sometimes', 'date', 'after:starts_at'],
            'status' => ['sometimes', 'in:pending,confirmed,cancelled,completed'],
            'booking_reference' => ['sometimes', 'nullable', 'string', 'max:100'],
            'notes' => ['sometimes', 'nullable', 'string', 'max:10000'],
            'cancelled_at' => ['sometimes', 'nullable', 'date'],
        ]);

        if (array_key_exists('booking_provider_id', $payload)) {
            $provider = BookingProvider::query()
                ->whereKey($payload['booking_provider_id'])
                ->where('is_active', true)
                ->firstOrFail();
            $campusId = $payload['campus_id'] ?? $appointment->campus_id ?? $provider->campus_id;
            if ($provider->campus_id && $campusId && (int) $provider->campus_id !== (int) $campusId) {
                abort(422, 'The selected campus does not match this booking provider.');
            }
            $payload['campus_id'] = $campusId;
        }

        if (array_key_exists('support_request_id', $payload)) {
            $supportRequest = $payload['support_request_id']
                ? SupportRequest::query()->whereKey($payload['support_request_id'])->firstOrFail()
                : null;
            if ($supportRequest) {
                $canLinkRequest = $supportRequest->requester_id === $request->user()->id
                    || $supportRequest->assigned_to === $request->user()->id
                    || $request->user()->hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
                abort_unless($canLinkRequest, 403, 'You cannot link this support request.');
            }
        }

        if (array_key_exists('starts_at', $payload) || array_key_exists('ends_at', $payload)) {
            $startsAt = $payload['starts_at'] ?? $appointment->starts_at;
            $endsAt = $payload['ends_at'] ?? $appointment->ends_at;
            if ($startsAt && $endsAt && strtotime((string) $endsAt) <= strtotime((string) $startsAt)) {
                abort(422, 'The appointment end time must be after the start time.');
            }

            $hasConflict = Appointment::query()
                ->where('booking_provider_id', $payload['booking_provider_id'] ?? $appointment->booking_provider_id)
                ->where('id', '!=', $appointment->id)
                ->whereIn('status', ['pending', 'confirmed'])
                ->where('starts_at', '<', $endsAt)
                ->where('ends_at', '>', $startsAt)
                ->exists();
            abort_unless(! $hasConflict, 422, 'That time slot is no longer available.');
        }

        if (($payload['status'] ?? $appointment->status) === 'cancelled' && ! isset($payload['cancelled_at'])) {
            $payload['cancelled_at'] = now();
        }

        $appointment->update($payload);
        $this->audit('appointment.updated', Appointment::class, $appointment->id, ['status' => $appointment->status]);

        return $this->json($appointment->load(['bookingProvider', 'campus']));
    }

    public function destroy(Appointment $appointment): JsonResponse
    {
        $this->authorize('delete', $appointment);
        $appointment->update(['status' => 'cancelled', 'cancelled_at' => now()]);
        $appointment->delete();
        $this->audit('appointment.cancelled', Appointment::class, $appointment->id);

        return $this->message('Appointment cancelled.');
    }
}
