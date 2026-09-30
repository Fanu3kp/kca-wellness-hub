import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiService } from './api.service';

export interface DashboardStats {
  total_students: number;
  active_peer_counselors: number;
  support_requests_period: number;
  open_escalations: number;
  appointments_booked: number;
  published_resources: number;
}

export interface DashboardSummary {
  campus: { id: number | string; name: string; code: string } | null;
  period: { from: string; to: string };
  stats: DashboardStats;
}

export interface SupportRequestBreakdown {
  by_status: Record<string, number>;
  by_category: Record<string, number>;
  by_priority: Record<string, number>;
}

export interface AppointmentTrendPoint {
  day: string;
  count: number;
}

export interface AppointmentTrends {
  period_days: number;
  by_day: AppointmentTrendPoint[];
  by_status: Record<string, number>;
  by_mode: Record<string, number>;
}

export interface CampusStat {
  id: number | string;
  name: string;
  code: string;
  short_name: string;
  percentage: number;
  stats: {
    students: number;
    peer_counselors: number;
    support_requests: number;
    appointments: number;
  };
}

export interface EscalationReport {
  by_severity: Record<string, number>;
  by_status: Record<string, number>;
}

const statusColors: Record<string, string> = {
  pending: '#9CA3AF',
  assigned: '#3B82F6',
  in_progress: '#F59E0B',
  resolved: '#10B981',
  closed: '#6B7280',
  confirmed: '#3B82F6',
  cancelled: '#EF4444',
  completed: '#10B981',
};

const categoryColors: Record<string, string> = {
  'academic-pressure': '#1B2C57',
  relationship: '#8B5CF6',
  adjustment: '#F59E0B',
  friendship: '#10B981',
  'general-wellbeing': '#14B8A8',
  motivation: '#8B5CF6',
  stress: '#EF4444',
  sleep: '#3B82F6',
  career: '#14B8A8',
  urgent: '#EF4444',
};

const priorityColors = {
  low: '#10B981',
  medium: '#F59E0B',
  high: '#EF4444',
};

const modeColors = {
  physical: '#1B2C57',
  virtual: '#14B8A8',
};

const severityColors = {
  low: '#10B981',
  medium: '#F59E0B',
  high: '#EF4444',
  critical: '#7C3AED',
};

const campusColors = ['#1B2C57', '#8B5CF6', '#F59E0B', '#14B8A8', '#EF4444', '#3B82F6'];

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private readonly api: ApiService) {}

  loadDashboard(campusId?: string | number | null): Observable<DashboardSummary> {
    return this.api.get<{ data: DashboardSummary }>('/reports/dashboard', { campus_id: campusId ?? null }).pipe(
      map((response) => response.data),
      catchError(() => of(this.fallbackDashboard()))
    );
  }

  loadSupportRequestBreakdown(campusId?: string | number | null): Observable<SupportRequestBreakdown> {
    return this.api.get<{ data: SupportRequestBreakdown }>('/reports/support-requests', { campus_id: campusId ?? null }).pipe(
      map((response) => response.data),
      catchError(() => of({ by_status: {}, by_category: {}, by_priority: {} }))
    );
  }

  loadAppointmentTrends(campusId?: string | number | null, days = 30): Observable<AppointmentTrends> {
    return this.api.get<{ data: AppointmentTrends }>('/reports/appointments', {
      campus_id: campusId ?? null,
      days,
    }).pipe(
      map((response) => {
        if (!response.data.by_day) {
          response.data.by_day = [];
        }
        return response.data;
      }),
      catchError(() => of(this.fallbackAppointmentTrends()))
    );
  }

  loadCampusBreakdown(): Observable<CampusStat[]> {
    return this.api.get<{ data: CampusStat[] }>('/reports/campuses').pipe(
      map((response) => response.data.map((c, i) => ({ ...c, color: campusColors[i % campusColors.length] }))),
      catchError(() => of(this.fallbackCampusBreakdown()))
    );
  }

  loadEscalationReport(campusId?: string | number | null): Observable<EscalationReport> {
    return this.api.get<{ data: EscalationReport }>('/reports/escalations', { campus_id: campusId ?? null }).pipe(
      map((response) => response.data),
      catchError(() => of({ by_severity: {}, by_status: {} }))
    );
  }

  statusSegments(breakdown: SupportRequestBreakdown): { segments: any[]; total: number } {
    const entries = Object.entries(breakdown.by_status);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
    const segments = entries.map(([status, count]) => ({
      label: status,
      value: count,
      color: statusColors[status] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  categorySegments(breakdown: SupportRequestBreakdown): { segments: any[]; total: number } {
    const entries = Object.entries(breakdown.by_category);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
    const segments = entries.map(([category, count]) => ({
      label: category.replace(/-/g, ' '),
      value: count,
      color: categoryColors[category] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  prioritySegments(breakdown: SupportRequestBreakdown): { segments: any[]; total: number } {
    const entries = Object.entries(breakdown.by_priority);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
    const segments = entries.map(([priority, count]) => ({
      label: priority,
      value: count,
      color: priorityColors[priority as keyof typeof priorityColors] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  modeSegments(trends: AppointmentTrends): { segments: any[]; total: number } {
    const entries = Object.entries(trends.by_mode);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
    const segments = entries.map(([mode, count]) => ({
      label: mode,
      value: count,
      color: modeColors[mode as keyof typeof modeColors] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  appointmentStatusSegments(trends: AppointmentTrends): { segments: any[]; total: number } {
    const entries = Object.entries(trends.by_status);
    const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
    const segments = entries.map(([status, count]) => ({
      label: status,
      value: count,
      color: statusColors[status] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  campusStatsBars(breakdown: CampusStat[]): any[] {
    const maxStudents = Math.max(...breakdown.map((c) => c.stats.students), 1);
    return breakdown.map((campus) => ({
      label: campus.short_name ?? campus.name,
      value: campus.stats.students,
      color: campusColors[campus.id ? Number(campus.id) - 1 : 0] ?? '#1B2C57',
    }));
  }

  campusRequestBars(breakdown: CampusStat[]): any[] {
    const maxRequests = Math.max(...breakdown.map((c) => c.stats.support_requests), 1);
    return breakdown.map((campus) => ({
      label: campus.short_name ?? campus.name,
      value: campus.stats.support_requests,
      color: campusColors[campus.id ? Number(campus.id) - 1 : 0] ?? '#1B2C57',
    }));
  }

  appointmentTrendSeries(trends: AppointmentTrends): any[] {
    const data = trends.by_day
      .map((point) => ({
        label: point.day.substring(5),
        value: point.count,
      }));
    return [
      { name: 'Appointments', data, color: '#1B2C57' },
    ];
  }

  private fallbackDashboard(): DashboardSummary {
    return {
      campus: null,
      period: { from: '', to: '' },
      stats: {
        total_students: 0,
        active_peer_counselors: 0,
        support_requests_period: 0,
        open_escalations: 0,
        appointments_booked: 0,
        published_resources: 0,
      },
    };
  }

  private fallbackAppointmentTrends(): AppointmentTrends {
    const days: AppointmentTrendPoint[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push({ day: d.toISOString().split('T')[0], count: 0 });
    }
    return {
      period_days: 30,
      by_day: days,
      by_status: {},
      by_mode: {},
    };
  }

  private fallbackCampusBreakdown(): CampusStat[] {
    return [];
  }
}
