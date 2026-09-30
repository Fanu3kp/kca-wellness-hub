import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { ReportService } from '../../core/services/report.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { PieChartComponent } from '../../shared/components/charts/pie-chart.component';

@Component({
  selector: 'app-guidance-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, PieChartComponent],
  templateUrl: './guidance-dashboard.component.html',
  styleUrl: './guidance-dashboard.component.scss'
})
export class GuidanceDashboardComponent implements OnInit {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  dashboard: any = null;
  breakdown: any = null;

  escalations = [
    { student: 'KCA Student', campus: 'Ruaraka Main', concern: 'Professional support requested', status: 'Pending review' },
    { student: 'KCA Student', campus: 'Town', concern: 'Referral follow-up', status: 'New' }
  ];

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    private readonly reportService: ReportService
  ) {}

  ngOnInit(): void {
    const campusId = this.authService.currentUser?.campusId;
    if (campusId) {
      this.reportService.loadDashboard(campusId).subscribe({
        next: (data) => { this.dashboard = data; },
        error: () => {}
      });
      this.reportService.loadSupportRequestBreakdown(campusId).subscribe({
        next: (data) => { this.breakdown = data; },
        error: () => {}
      });
    }
  }

  statusSegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.statusSegments(this.breakdown);
  }

  statCards() {
    if (!this.dashboard) return [];
    const s = this.dashboard.stats;
    return [
      { label: 'Students', value: this.formatNumber(s.total_students), icon: 'users', tone: 'teal' as const },
      { label: 'Peer counselors', value: this.formatNumber(s.active_peer_counselors), icon: 'graduation', tone: 'purple' as const },
      { label: 'Pending escalations', value: this.formatNumber(s.open_escalations), icon: 'bell', tone: 'orange' as const },
      { label: 'Appointments this week', value: this.formatNumber(s.appointments_booked), icon: 'calendar', tone: 'blue' as const },
    ];
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }
}
