<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Campus;
use App\Models\Escalation;
use App\Models\SupportRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class ReportController extends Controller
{
    public function dashboard(Request $request): JsonResponse
    {
        $this->authorize('viewReports', Campus::class);

        $campusId = $this->resolveCampusId($request);

        $campus = $campusId ? Campus::query()->whereKey($campusId)->first() : null;

        $from = $request->filled('from')
            ? Carbon::parse($request->string('from'))
            : now()->startOfMonth();
        $to = $request->filled('to')
            ? Carbon::parse($request->string('to'))
            : now()->endOfMonth();

        $stats = [
            'total_students' => User::query()
                ->whereHas('roles', fn ($q) => $q->where('name', 'student'))
                ->when($campusId, fn ($q) => $q->whereHas('profile', fn ($pq) => $pq->where('campus_id', $campusId)))
                ->count(),
            'active_peer_counselors' => User::query()
                ->whereHas('roles', fn ($q) => $q->where('name', 'peer_counselor'))
                ->where('is_active', true)
                ->when($campusId, fn ($q) => $q->whereHas('profile', fn ($pq) => $pq->where('campus_id', $campusId)))
                ->count(),
            'support_requests_period' => SupportRequest::query()
                ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
                ->whereBetween('created_at', [$from, $to])
                ->count(),
            'open_escalations' => Escalation::query()
                ->when($campusId, function ($q) use ($campusId) {
                    $q->whereHas('supportRequest', fn ($sq) => $sq->where('campus_id', $campusId));
                })
                ->whereIn('status', ['open', 'in_progress'])
                ->count(),
            'appointments_booked' => Appointment::query()
                ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
                ->whereBetween('starts_at', [$from, $to])
                ->count(),
            'published_resources' => 24,
        ];

        return $this->json([
            'campus' => $campus ? ['id' => $campus->id, 'name' => $campus->name, 'code' => $campus->code, 'short_name' => $campus->shortName ?? $campus->name] : null,
            'period' => ['from' => $from->toISOString(), 'to' => $to->toISOString()],
            'stats' => $stats,
        ]);
    }

    public function supportRequestBreakdown(Request $request): JsonResponse
    {
        $this->authorize('viewReports', Campus::class);

        $campusId = $this->resolveCampusId($request);

        $byStatus = SupportRequest::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->selectRaw('status, COUNT(*) as count')
            ->whereIn('status', ['pending', 'assigned', 'in_progress', 'resolved', 'closed'])
            ->groupBy('status')
            ->pluck('count', 'status')
            ->all();

        $byCategory = SupportRequest::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->selectRaw('category, COUNT(*) as count')
            ->groupBy('category')
            ->pluck('count', 'category')
            ->all();

        $byPriority = SupportRequest::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->selectRaw('priority, COUNT(*) as count')
            ->groupBy('priority')
            ->pluck('count', 'priority')
            ->all();

        return $this->json([
            'by_status' => $byStatus,
            'by_category' => $byCategory,
            'by_priority' => $byPriority,
        ]);
    }

    public function appointmentTrends(Request $request): JsonResponse
    {
        $this->authorize('viewReports', Campus::class);

        $campusId = $this->resolveCampusId($request);
        $days = $request->filled('days') ? min(max($request->integer('days'), 7), 90) : 30;

        $from = now()->subDays($days)->startOfDay();
        $to = now()->endOfDay();

        $byDay = Appointment::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->whereBetween('starts_at', [$from, $to])
            ->selectRaw('DATE(starts_at) as day, COUNT(*) as count')
            ->groupBy('day')
            ->pluck('count', 'day')
            ->all();

        $byStatus = Appointment::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->selectRaw('status, COUNT(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status')
            ->all();

        $byMode = Appointment::query()
            ->when($campusId, fn ($q) => $q->where('campus_id', $campusId))
            ->selectRaw('COALESCE(mode, "physical") as mode, COUNT(*) as count')
            ->groupBy('mode')
            ->pluck('count', 'mode')
            ->all();

        $daysArray = [];
        for ($i = 0; $i < $days; $i++) {
            $date = now()->subDays($days - 1 - $i)->format('Y-m-d');
            $daysArray[] = ['day' => $date, 'count' => $byDay[$date] ?? 0];
        }

        return $this->json([
            'period_days' => $days,
            'by_day' => $daysArray,
            'by_status' => $byStatus,
            'by_mode' => $byMode,
        ]);
    }

    public function campusBreakdown(Request $request): JsonResponse
    {
        $this->authorize('viewReports', Campus::class);

        $user = $request->user();
        $userCampusId = $user->profile?->campus_id;
        $isAdmin = $user->hasRole('admin');

        $campuses = Campus::query()->orderBy('name')->get();

        if (! $isAdmin && $userCampusId) {
            $campuses = $campuses->where('id', $userCampusId);
        }

        $breakdown = $campuses->map(function (Campus $campus) {
            return [
                'id' => $campus->id,
                'name' => $campus->name,
                'code' => $campus->code,
                'short_name' => $campus->shortName ?? $campus->name,
                'stats' => [
                    'students' => User::query()
                        ->whereHas('roles', fn ($q) => $q->where('name', 'student'))
                        ->whereHas('profile', fn ($q) => $q->where('campus_id', $campus->id))
                        ->count(),
                    'peer_counselors' => User::query()
                        ->whereHas('roles', fn ($q) => $q->where('name', 'peer_counselor'))
                        ->whereHas('profile', fn ($q) => $q->where('campus_id', $campus->id))
                        ->count(),
                    'support_requests' => SupportRequest::query()
                        ->where('campus_id', $campus->id)
                        ->whereBetween('created_at', [now()->subDays(30), now()])
                        ->count(),
                    'appointments' => Appointment::query()
                        ->where('campus_id', $campus->id)
                        ->whereBetween('starts_at', [now()->subDays(30), now()])
                        ->count(),
                ],
            ];
        })->values();

        $totalStudents = $breakdown->sum('stats.students');
        $breakdown = $breakdown->map(function ($item) use ($totalStudents) {
            $item['percentage'] = $totalStudents > 0
                ? round(($item['stats']['students'] / $totalStudents) * 100, 1)
                : 0;

            return $item;
        });

        return $this->json($breakdown);
    }

    public function escalationReport(Request $request): JsonResponse
    {
        $this->authorize('viewReports', Campus::class);

        $campusId = $this->resolveCampusId($request);

        $openEscalations = Escalation::query()
            ->when($campusId, fn ($q) => $q->whereHas('supportRequest', fn ($sq) => $sq->where('campus_id', $campusId)))
            ->whereIn('status', ['open', 'in_progress'])
            ->newQuery();

        $bySeverity = (clone $openEscalations)
            ->selectRaw('severity, COUNT(*) as count')
            ->groupBy('severity')
            ->pluck('count', 'severity')
            ->all();

        $byStatus = Escalation::query()
            ->when($campusId, fn ($q) => $q->whereHas('supportRequest', fn ($sq) => $sq->where('campus_id', $campusId)))
            ->selectRaw('status, COUNT(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status')
            ->all();

        return $this->json([
            'by_severity' => $bySeverity,
            'by_status' => $byStatus,
        ]);
    }

    private function resolveCampusId(Request $request): ?int
    {
        $user = $request->user();

        if ($user->hasRole('admin')) {
            return $request->filled('campus_id') ? $request->integer('campus_id') : null;
        }

        $userCampusId = $user->profile?->campus_id;
        $requestedCampusId = $request->filled('campus_id') ? $request->integer('campus_id') : null;

        if ($requestedCampusId !== null && $requestedCampusId !== $userCampusId) {
            throw new AccessDeniedHttpException('You can only view reports for your own campus.');
        }

        return $userCampusId ?? $requestedCampusId;
    }
}
