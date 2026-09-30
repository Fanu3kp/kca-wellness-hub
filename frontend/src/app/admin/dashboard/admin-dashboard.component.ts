import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReportService } from '../../core/services/report.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { PieChartComponent } from '../../shared/components/charts/pie-chart.component';
import { BarChartComponent } from '../../shared/components/charts/bar-chart.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, PieChartComponent, BarChartComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  campusBreakdown: any[] = [];
  dashboard: any = null;
  breakdown: any = null;
  loading = true;

  constructor(
    private readonly reportService: ReportService,
    private readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    this.reportService.loadCampusBreakdown().subscribe({
      next: (data) => { this.campusBreakdown = data; this.loading = false; },
      error: () => { this.loading = false; }
    });

    this.reportService.loadDashboard(null).subscribe({
      next: (data) => { this.dashboard = data; },
      error: () => {}
    });

    this.reportService.loadSupportRequestBreakdown(null).subscribe({
      next: (data) => { this.breakdown = data; },
      error: () => {}
    });
  }

  statCards(): { label: string; value: string; icon: string; tone: 'teal' | 'purple' | 'orange' | 'blue' }[] {
    const base = [
      { label: 'Students', value: '0', icon: 'users', tone: 'teal' as const },
      { label: 'Peer counselors', value: '0', icon: 'graduation', tone: 'purple' as const },
      { label: 'Campuses', value: this.campusBreakdown.length.toString() || '0', icon: 'home', tone: 'orange' as const },
      { label: 'Resources', value: '0', icon: 'book', tone: 'blue' as const },
    ];

    if (this.dashboard) {
      const s = this.dashboard.stats;
      return [
        { label: 'Students', value: this.formatNumber(s.total_students), icon: 'users', tone: 'teal' as const },
        { label: 'Peer counselors', value: this.formatNumber(s.active_peer_counselors), icon: 'graduation', tone: 'purple' as const },
        { label: 'Campuses', value: this.campusBreakdown.length.toString() || '0', icon: 'home', tone: 'orange' as const },
        { label: 'Resources', value: this.formatNumber(s.published_resources), icon: 'book', tone: 'blue' as const },
      ];
    }

    return base;
  }

  campusBars() {
    if (!this.campusBreakdown.length) return [];
    return this.reportService.campusStatsBars(this.campusBreakdown);
  }

  statusSegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.statusSegments(this.breakdown);
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }
}
