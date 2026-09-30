import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ReportService } from '../core/services/report.service';
import { CampusService } from '../core/services/campus.service';
import { AuthService } from '../core/services/auth.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { BarChartComponent } from '../shared/components/charts/bar-chart.component';
import { PieChartComponent } from '../shared/components/charts/pie-chart.component';
import { LineChartComponent } from '../shared/components/charts/line-chart.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-campus-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    AsyncPipe,
    UiIconComponent,
    CardComponent,
    BadgeComponent,
    AlertComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    LoadingComponent
  ],
  templateUrl: './campus-dashboard.component.html',
  styleUrl: './campus-dashboard.component.scss'
})
export class CampusDashboardComponent implements OnInit {
  campusId: string | number | null = null;
  campus: any = null;

  dashboard: any = null;
  breakdown: any = null;
  trends: any = null;
  campusBreakdown: any[] = [];

  loading = true;
  error = '';
  reportDate = new Date();

  days = 30;

  constructor(
    private readonly route: ActivatedRoute,
    readonly reportService: ReportService,
    readonly campusService: CampusService,
    readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    const campusSlug = this.route.snapshot.data?.['campusSlug'];
    if (campusSlug) {
      const campus = this.campusService.getCampusBySlug(campusSlug as string);
      if (campus) {
        this.campusId = campus.id;
        this.campusService.selectCampus(campus);
        this.campus = campus;
      }
    } else {
      const routeCampusId = this.route.snapshot.params['campusId'];
      if (routeCampusId) {
        this.campusId = routeCampusId;
      } else if (this.authService.currentUser) {
        this.campusId = this.authService.currentUser.campusId;
      } else {
        this.campusId = this.campusService.selectedCampus.id;
      }
    }
    if (!this.campus) {
      this.campus = this.campusService.getCampus(String(this.campusId)) ?? this.campusService.selectedCampus;
    }
    this.loadReports();
  }

  loadReports(): void {
    this.loading = true;
    this.error = '';

    this.reportService.loadDashboard(this.campusId).subscribe({
      next: (data) => { this.dashboard = data; },
      error: () => { this.error = 'Could not load dashboard data.'; }
    });

    this.reportService.loadSupportRequestBreakdown(this.campusId).subscribe({
      next: (data) => { this.breakdown = data; },
      error: () => {}
    });

    this.reportService.loadAppointmentTrends(this.campusId, this.days).subscribe({
      next: (data) => { this.trends = data; this.loading = false; },
      error: () => { this.loading = false; }
    });

    if (this.authService.hasRole('admin')) {
      this.reportService.loadCampusBreakdown().subscribe({
        next: (data) => { this.campusBreakdown = data; },
        error: () => {}
      });
    }
  }

  statusSegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.statusSegments(this.breakdown);
  }

  categorySegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.categorySegments(this.breakdown);
  }

  modeSegments() {
    if (!this.trends) return { segments: [], total: 0 };
    return this.reportService.modeSegments(this.trends);
  }

  trendSeries() {
    if (!this.trends) return [];
    return this.reportService.appointmentTrendSeries(this.trends);
  }

  statCards() {
    if (!this.dashboard) return [];
    const s = this.dashboard.stats;
    return [
      { label: 'Students', value: this.formatNumber(s.total_students), icon: 'users', tone: 'teal' as const },
      { label: 'Peer counselors', value: this.formatNumber(s.active_peer_counselors), icon: 'graduation', tone: 'purple' as const },
      { label: 'Support requests', value: this.formatNumber(s.support_requests_period), icon: 'chat', tone: 'orange' as const },
      { label: 'Open escalations', value: this.formatNumber(s.open_escalations), icon: 'alert', tone: 'urgent' as const },
      { label: 'Appointments', value: this.formatNumber(s.appointments_booked), icon: 'calendar', tone: 'professional' as const },
    ];
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }

  printReport(): void {
    this.reportDate = new Date();
    window.print();
  }
}
