<?php

namespace App\Http\Controllers;

use App\Mail\AppointmentBooked;
use App\Models\Appointment;
use App\Models\BookingProvider;
use App\Models\Notification;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AppointmentController extends Controller
{
    protected const CAMPUS_STAFF = ['peer_counselor', 'guidance_staff', 'hod', 'admin'];

    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Appointment::class);
        $query = Appointment::query()
            ->with([
                'user:id,name,email',
                'bookingProvider:id,name,mode,campus_id',
                'peerCounselor:id,name,email',
                'campus:id,name,code',
                'supportRequest:id,subject,status',
            ]);

        $user = $request->user();
        $isAdmin = $user->hasRole('admin');
        $isStaff = $user->hasAnyRole(self::CAMPUS_STAFF);

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
            $requestedCampusId = $request->integer('campus_id');
            if (! $isAdmin) {
                $userCampusId = $user->profile?->campus_id;
                abort_if($userCampusId && (int) $requestedCampusId !== (int) $userCampusId, 403, 'You can only view appointments for your campus.');
            }
            $query->where('campus_id', $requestedCampusId);
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
            'booking_provider_id' => ['sometimes', 'nullable', 'exists:booking_providers,id'],
            'peer_counselor_id' => ['sometimes', 'nullable', 'exists:users,id'],
            'campus_id' => ['nullable', 'exists:campuses,id'],
            'support_request_id' => ['nullable', 'exists:support_requests,id'],
            'starts_at' => ['required', 'date'],
            'ends_at' => ['required', 'date', 'after:starts_at'],
            'mode' => ['sometimes', 'in:physical,virtual'],
            'notes' => ['nullable', 'string', 'max:10000'],
        ]);

        if (! isset($payload['booking_provider_id']) && ! isset($payload['peer_counselor_id'])) {
            abort(422, 'Either booking_provider_id or peer_counselor_id is required.');
        }

        if (isset($payload['peer_counselor_id'])) {
            $peer = User::query()->whereKey($payload['peer_counselor_id'])->where('is_active', true)->firstOrFail();
            abort_unless($peer->hasRole('peer_counselor'), 422, 'The selected user is not an active peer counselor.');
            $payload['booking_provider_id'] ??= null;
            $payload['attendee_mode'] = 'peer';
        }

        if (isset($payload['booking_provider_id'])) {
            $provider = BookingProvider::query()
                ->whereKey($payload['booking_provider_id'])
                ->where('is_active', true)
                ->firstOrFail();

            $campusId = $payload['campus_id'] ?? $provider->campus_id;
            if ($provider->campus_id && $campusId && (int) $provider->campus_id !== (int) $campusId) {
                abort(422, 'The selected campus does not match this booking provider.');
            }

            $payload['mode'] = $payload['mode'] ?? ($provider->mode === 'virtual' ? 'virtual' : 'physical');
            $payload['attendee_mode'] = 'provider';
        } else {
            $peerProfile = $peer->profile;
            $campusId = $payload['campus_id'] ?? $peerProfile?->campus_id;
            $payload['mode'] = $payload['mode'] ?? 'physical';
            $payload['attendee_mode'] = 'peer';
        }

        $user = $request->user();
        $profileCampusId = $user->profile?->campus_id;
        if ($profileCampusId && $campusId && (int) $profileCampusId !== (int) $campusId && ! $user->hasAnyRole(self::CAMPUS_STAFF) || ! $campusId && $user->hasRole('student')) {
            abort(422, $campusId ? 'Select a booking provider for your campus.' : 'A campus is required for this appointment.');
        }

        if (isset($payload['support_request_id'])) {
            $supportRequest = SupportRequest::query()->whereKey($payload['support_request_id'])->firstOrFail();
            $canLinkRequest = $supportRequest->requester_id === $user->id
                || $supportRequest->assigned_to === $user->id
                || $user->hasAnyRole(self::CAMPUS_STAFF);
            abort_unless($canLinkRequest, 403, 'You cannot link this support request.');

            $srCampusId = $supportRequest->campus_id;
            if ($srCampusId && $campusId && (int) $srCampusId !== (int) $campusId && ! $user->hasRole('admin')) {
                abort(422, 'The support request campus does not match the selected campus.');
            }
        }

        $payload['user_id'] = $user->id;
        $payload['campus_id'] = $campusId;
        $payload['status'] = 'pending';
        $payload['booking_reference'] = 'APPT-'.Str::uuid();

        $providerId = $payload['booking_provider_id'] ?? null;
        $peerId = $payload['peer_counselor_id'] ?? null;

        $hasConflict = Appointment::query()
            ->when($providerId, fn ($q) => $q->where('booking_provider_id', $providerId))
            ->when($peerId, fn ($q) => $q->where('peer_counselor_id', $peerId))
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

        if (isset($payload['peer_counselor_id'])) {
            Notification::create([
                'user_id' => $payload['peer_counselor_id'],
                'type' => 'appointment',
                'title' => 'New appointment request from a student',
                'body' => 'You have a new appointment request for peer counselling support. Review the details in your dashboard.',
                'data' => [
                    'appointment_id' => $appointment->id,
                    'booking_reference' => $appointment->booking_reference,
                    'requester_id' => $user->id,
                ],
            ]);
        }

        if (isset($payload['booking_provider_id'])) {
            Notification::create([
                'user_id' => $payload['booking_provider_id'],
                'type' => 'appointment',
                'title' => 'New appointment booked',
                'body' => 'A new appointment has been booked through your service.',
                'data' => [
                    'appointment_id' => $appointment->id,
                    'booking_reference' => $appointment->booking_reference,
                ],
            ]);
        }

        $appointment->load([
            'user:id,name,email',
            'bookingProvider:id,name,mode,campus_id',
            'peerCounselor:id,name,email',
            'campus:id,name,code',
            'supportRequest:id,subject,status',
        ]);

        Mail::to($appointment->user->email)->send(new AppointmentBooked($appointment));

        $this->audit('appointment.created', Appointment::class, $appointment->id);

        return $this->json($appointment->load(['bookingProvider', 'peerCounselor', 'campus']), 201);
    }

    public function show(Appointment $appointment): JsonResponse
    {
        $this->authorize('view', $appointment);

        return $this->json($appointment->load([
            'user:id,name,email',
            'bookingProvider:id,name,mode,campus_id',
            'peerCounselor:id,name,email',
            'campus:id,name,code',
            'supportRequest:id,subject,status',
        ]));
    }

    public function update(Request $request, Appointment $appointment): JsonResponse
    {
        $this->authorize('update', $appointment);
        $payload = $request->validate([
            'booking_provider_id' => ['sometimes', 'nullable', 'exists:booking_providers,id'],
            'peer_counselor_id' => ['sometimes', 'nullable', 'exists:users,id'],
            'campus_id' => ['sometimes', 'nullable', 'exists:campuses,id'],
            'support_request_id' => ['sometimes', 'nullable', 'exists:support_requests,id'],
            'starts_at' => ['sometimes', 'date'],
            'ends_at' => ['sometimes', 'date', 'after:starts_at'],
            'mode' => ['sometimes', 'in:physical,virtual'],
            'status' => ['sometimes', 'in:pending,confirmed,cancelled,completed'],
            'booking_reference' => ['sometimes', 'nullable', 'string', 'max:100'],
            'notes' => ['sometimes', 'nullable', 'string', 'max:10000'],
            'cancelled_at' => ['sometimes', 'nullable', 'date'],
        ]);

        $user = $request->user();

        if (array_key_exists('campus_id', $payload) && ! $user->hasRole('admin')) {
            abort(422, 'Only administrators can change the campus of an appointment.');
        }

        if (array_key_exists('booking_provider_id', $payload) && isset($payload['booking_provider_id'])) {
            $provider = BookingProvider::query()
                ->whereKey($payload['booking_provider_id'])
                ->where('is_active', true)
                ->firstOrFail();

            $effectiveCampusId = $payload['campus_id'] ?? $appointment->campus_id;
            if ($provider->campus_id && (int) $provider->campus_id !== (int) $effectiveCampusId && ! $user->hasRole('admin')) {
                abort(422, 'The selected campus does not match this booking provider.');
            }
        }

        $payload['campus_id'] ??= $appointment->campus_id;

        if (isset($payload['peer_counselor_id'])) {
            $peer = User::query()->whereKey($payload['peer_counselor_id'])->where('is_active', true)->firstOrFail();
            abort_unless($peer->hasRole('peer_counselor'), 422, 'The selected user is not an active peer counselor.');
        }

        if (array_key_exists('support_request_id', $payload)) {
            $supportRequest = $payload['support_request_id']
                ? SupportRequest::query()->whereKey($payload['support_request_id'])->firstOrFail()
                : null;
            if ($supportRequest) {
                $canLinkRequest = $supportRequest->requester_id === $user->id
                    || $supportRequest->assigned_to === $user->id
                    || $user->hasAnyRole(self::CAMPUS_STAFF);
                abort_unless($canLinkRequest, 403, 'You cannot link this support request.');

                $srCampusId = $supportRequest->campus_id;
                if ($srCampusId && $payload['campus_id'] && (int) $srCampusId !== (int) $payload['campus_id'] && ! $user->hasRole('admin')) {
                    abort(422, 'The support request campus does not match the appointment campus.');
                }
            }
        }

        if (array_key_exists('starts_at', $payload) || array_key_exists('ends_at', $payload)) {
            $startsAt = $payload['starts_at'] ?? $appointment->starts_at;
            $endsAt = $payload['ends_at'] ?? $appointment->ends_at;
            abort_if($startsAt && $endsAt && strtotime((string) $endsAt) <= strtotime((string) $startsAt), 422, 'The appointment end time must be after the start time.');

            $providerId = $payload['booking_provider_id'] ?? $appointment->booking_provider_id;
            $peerId = $payload['peer_counselor_id'] ?? $appointment->peer_counselor_id;

            $hasConflict = Appointment::query()
                ->where('id', '!=', $appointment->id)
                ->whereIn('status', ['pending', 'confirmed'])
                ->where(function ($q) use ($providerId, $peerId): void {
                    if ($providerId) {
                        $q->where('booking_provider_id', $providerId);
                    } elseif ($peerId) {
                        $q->where('peer_counselor_id', $peerId);
                    }
                })
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

        return $this->json($appointment->load([
            'user:id,name,email',
            'bookingProvider:id,name,mode,campus_id',
            'peerCounselor:id,name,email',
            'campus:id,name,code',
            'supportRequest:id,subject,status',
        ]));
    }

    public function cancel(Request $request, Appointment $appointment): JsonResponse
    {
        $user = $request->user();
        $this->authorize('cancel', $appointment);

        abort_unless(
            $appointment->user_id === $user->id
                || $user->hasAnyRole(['peer_counselor', 'guidance_staff', 'hod', 'admin']),
            403,
            'You can only cancel your own appointment.'
        );

        $canCancel = in_array($appointment->status, ['pending', 'confirmed'], true);
        abort_unless($canCancel, 422, 'Only pending or confirmed appointments can be cancelled.');

        DB::transaction(function () use ($appointment, $user): void {
            $appointment->update(['status' => 'cancelled', 'cancelled_at' => now()]);
            $appointment->delete();

            $recipients = [$appointment->user_id];
            if ($appointment->peer_counselor_id) {
                $recipients[] = $appointment->peer_counselor_id;
            }

            $notificationData = [
                'appointment_id' => $appointment->id,
                'booking_reference' => $appointment->booking_reference,
            ];

            foreach (array_unique($recipients) as $recipientId) {
                if ($recipientId === $user->id) {
                    continue;
                }
                Notification::create([
                    'user_id' => $recipientId,
                    'type' => 'appointment',
                    'title' => 'Appointment cancelled',
                    'body' => 'An appointment has been cancelled.',
                    'data' => $notificationData,
                ]);
            }
        });

        $this->audit('appointment.cancelled', Appointment::class, $appointment->id);

        return $this->message('Appointment cancelled.');
    }

    public function destroy(Appointment $appointment): JsonResponse
    {
        $this->authorize('delete', $appointment);
        $appointment->update(['status' => 'cancelled', 'cancelled_at' => now()]);
        $appointment->delete();

        Notification::create([
            'user_id' => $appointment->user_id,
            'type' => 'appointment',
            'title' => 'Appointment cancelled',
            'body' => 'Your appointment has been cancelled by staff.',
            'data' => [
                'appointment_id' => $appointment->id,
                'booking_reference' => $appointment->booking_reference,
            ],
        ]);

        $this->audit('appointment.cancelled', Appointment::class, $appointment->id);

        return $this->message('Appointment cancelled.');
    }
}
