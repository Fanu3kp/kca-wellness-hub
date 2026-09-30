import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ReportService } from '../../core/services/report.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { BarChartComponent } from '../../shared/components/charts/bar-chart.component';
import { PieChartComponent } from '../../shared/components/charts/pie-chart.component';
import { LineChartComponent } from '../../shared/components/charts/line-chart.component';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, BarChartComponent, PieChartComponent, LineChartComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.scss'
})
export class AdminReportsComponent implements OnInit {
  dashboard: any = null;
  breakdown: any = null;
  trends: any = null;
  campusBreakdown: any[] = [];
  escalationReport: any = null;

  loading = true;
  error = '';

  selectedCampusId: string | number | null = null;
  days = 30;
  reportDate = new Date();

  campuses = this.campusService.getCampuses();

  constructor(
    readonly reportService: ReportService,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.loading = true;
    this.error = '';

    this.reportService.loadDashboard(this.selectedCampusId ?? null).subscribe({
      next: (data) => { this.dashboard = data; },
      error: () => { this.error = 'Could not load dashboard data.'; }
    });

    this.reportService.loadSupportRequestBreakdown(this.selectedCampusId ?? null).subscribe({
      next: (data) => { this.breakdown = data; },
      error: () => {}
    });

    this.reportService.loadAppointmentTrends(this.selectedCampusId ?? null, this.days).subscribe({
      next: (data) => { this.trends = data; },
      error: () => {}
    });

    this.reportService.loadCampusBreakdown().subscribe({
      next: (data) => { this.campusBreakdown = data; },
      error: () => {}
    });

    this.reportService.loadEscalationReport(this.selectedCampusId ?? null).subscribe({
      next: (data) => { this.escalationReport = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  onCampusChange(): void {
    this.loadReports();
  }

  statusSegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.statusSegments(this.breakdown);
  }

  categorySegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.categorySegments(this.breakdown);
  }

  prioritySegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.prioritySegments(this.breakdown);
  }

  modeSegments() {
    if (!this.trends) return { segments: [], total: 0 };
    return this.reportService.modeSegments(this.trends);
  }

  appointmentStatusSegments() {
    if (!this.trends) return { segments: [], total: 0 };
    return this.reportService.appointmentStatusSegments(this.trends);
  }

  campusBars() {
    if (!this.campusBreakdown.length) return [];
    return this.reportService.campusStatsBars(this.campusBreakdown);
  }

  campusRequestBars() {
    if (!this.campusBreakdown.length) return [];
    return this.reportService.campusRequestBars(this.campusBreakdown);
  }

  trendSeries() {
    if (!this.trends) return [];
    return this.reportService.appointmentTrendSeries(this.trends);
  }

  escalationSeveritySegments() {
    if (!this.escalationReport) return { segments: [], total: 0 };
    const severityColors = { low: '#10B981', medium: '#F59E0B', high: '#EF4444', critical: '#7C3AED' };
    const entries = Object.entries(this.escalationReport.by_severity);
    const total = entries.reduce((sum: number, [, count]) => sum + (count as number), 0) || 1;
    const segments = entries.map(([severity, count]) => ({
      label: severity,
      value: count as number,
      color: severityColors[severity as keyof typeof severityColors] ?? '#9CA3AF',
    }));
    return { segments, total };
  }

  statCards(): { label: string; value: string; trend: string }[] {
    if (!this.dashboard) return [];
    const s = this.dashboard.stats;
    return [
      { label: 'Total students', value: this.formatNumber(s.total_students), trend: this.dashboard.campus ? `#${this.dashboard.campus.code}` : 'All campuses' },
      { label: 'Active peer counselors', value: this.formatNumber(s.active_peer_counselors), trend: 'Active' },
      { label: 'Support requests (period)', value: this.formatNumber(s.support_requests_period), trend: 'This period' },
      { label: 'Open escalations', value: this.formatNumber(s.open_escalations), trend: 'Open' },
      { label: 'Appointments booked', value: this.formatNumber(s.appointments_booked), trend: 'This period' },
      { label: 'Resources published', value: this.formatNumber(s.published_resources), trend: 'Total' },
    ];
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }

  get selectedCampusLabel(): string {
    if (!this.selectedCampusId) return 'All campuses';
    const campus = this.campuses.find((c) => String(c.id) === String(this.selectedCampusId));
    return campus?.shortName ?? 'Selected campus';
  }

  printReport(): void {
    this.reportDate = new Date();
    window.print();
  }
}
