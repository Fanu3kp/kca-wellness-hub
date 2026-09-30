import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CampusService } from '../../core/services/campus.service';
import { AuthService } from '../../core/services/auth.service';
import { WellnessService } from '../../core/services/wellness.service';
import { NotificationService } from '../../core/services/notification.service';
import { ReportService } from '../../core/services/report.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { BarChartComponent } from '../../shared/components/charts/bar-chart.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, BarChartComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent implements OnInit {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  readonly moods = ['Great', 'Good', 'Okay', 'Low', 'Stressed', 'Very low'];
  selectedMood = '';
  moodMessage = '';
  readonly pathways = this.wellnessService.pathways;
  today = new Intl.DateTimeFormat('en-KE', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date());

  community = [
    { name: 'Mindful Mornings', members: 48, type: 'Group', icon: 'sun' },
    { name: 'Stress Busters', members: 32, type: 'Group', icon: 'sparkles' },
    { name: 'Career Connect', members: 24, type: 'Group', icon: 'briefcase' }
  ];

  galleryItems = [
    { icon: 'users', title: 'Community', description: 'Students connecting and supporting each other' },
    { icon: 'heart', title: 'Wellness', description: 'Mental health awareness activities' }
  ];

  dashboard: any = null;
  campusBreakdown: any[] = [];
  loadingStats = true;
  reportDate = new Date();

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService,
    readonly notificationService: NotificationService,
    private readonly reportService: ReportService
  ) {
    this.notificationService.getNotifications().subscribe();
  }

  ngOnInit(): void {
    const campusId = this.authService.currentUser?.campusId;
    if (campusId) {
      this.reportService.loadDashboard(campusId).subscribe({
        next: (data) => { this.dashboard = data; this.loadingStats = false; },
        error: () => { this.loadingStats = false; }
      });
      this.reportService.loadCampusBreakdown().subscribe({
        next: (data) => { this.campusBreakdown = data; },
        error: () => {}
      });
    } else {
      this.loadingStats = false;
    }
  }

  checkMood(mood: string): void {
    this.selectedMood = mood;
    const messages: Record<string, string> = {
      Great: 'Wonderful. What is one thing you would like to carry into today?',
      Good: 'A good moment is worth noticing. Keep making space for what supports you.',
      Okay: 'It is okay to be in the middle. A small pause or conversation can help.',
      Low: 'Thank you for naming that. You do not have to handle it alone.',
      Stressed: 'Let us slow things down. A quiet exercise or a listening peer may help.',
      'Very low': 'Your safety matters. Consider reaching out to urgent support now.'
    };
    this.moodMessage = messages[mood] ?? '';
  }

  statCards(): { label: string; value: string }[] {
    if (!this.dashboard) return [];
    const s = this.dashboard.stats;
    return [
      { label: 'My campus students', value: this.formatNumber(s.total_students) },
      { label: 'Active peer counselors', value: this.formatNumber(s.active_peer_counselors) },
      { label: 'Support requests', value: this.formatNumber(s.support_requests_period) },
      { label: 'Appointments booked', value: this.formatNumber(s.appointments_booked) },
    ];
  }

  campusBars() {
    if (!this.campusBreakdown.length) return [];
    return this.reportService.campusStatsBars(this.campusBreakdown);
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }

  printReport(): void {
    this.reportDate = new Date();
    window.print();
  }
}
