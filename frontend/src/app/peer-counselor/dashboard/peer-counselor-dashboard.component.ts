import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { NotificationService } from '../../core/services/notification.service';
import { ReportService } from '../../core/services/report.service';
import { ApiService } from '../../core/services/api.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { PieChartComponent } from '../../shared/components/charts/pie-chart.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

interface PeerSupportRequest {
  id: string;
  subject: string;
  category: string;
  status: string;
  priority: string;
  created_at: string;
  requester_id: string;
  campus_id: string | null;
  campus?: { id: string; name: string; code: string } | null;
  assignee?: { id: string; name: string; email: string } | null;
  alreadyReferred?: boolean;
}

@Component({
  selector: 'app-peer-counselor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, PieChartComponent, LoadingComponent],
  templateUrl: './peer-counselor-dashboard.component.html',
  styleUrl: './peer-counselor-dashboard.component.scss'
})
export class PeerCounselorDashboardComponent implements OnInit {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  availability = 'available';

  supportRequests: PeerSupportRequest[] = [];
  loadingRequests = false;
  referralError = '';
  referralSuccess = '';
  referredIds = new Set<string>();

  conversations = [
    { name: 'Amina Mohamed', topic: 'Study stress', lastActive: '5 min ago', unread: 2 },
    { name: 'Brian Otieno', topic: 'Family support', lastActive: '1 hour ago', unread: 0 }
  ];

  schedule = [
    { day: 'Mon', time: '14:00', activity: 'Peer session · Room 3', type: 'session' },
    { day: 'Tue', time: '10:00', activity: 'Supervision · Guidance staff', type: 'supervision' },
    { day: 'Wed', time: '15:00', activity: 'Training · Module 3', type: 'training' },
    { day: 'Thu', time: '11:00', activity: 'Peer session · Virtual', type: 'session' },
    { day: 'Fri', time: '09:00', activity: 'Open availability', type: 'open' }
  ];

  todaySessions = 2;
  activeConversations = 4;
  unreadNotifications = 0;

  resources = [
    { title: 'Active listening guide', category: 'Training' },
    { title: 'Boundary setting toolkit', category: 'Training' },
    { title: 'Referral pathways', category: 'Professional' }
  ];

  dashboard: any = null;
  breakdown: any = null;
  loadingStats = true;

  recentNotifications: any[] = [];

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    readonly notificationService: NotificationService,
    private readonly reportService: ReportService,
    private readonly api: ApiService
  ) {
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.unreadNotifications = notifications.filter((n) => !n.read).length;
      this.recentNotifications = notifications.slice(0, 3);
    });
  }

  ngOnInit(): void {
    this.loadReports();
    this.loadSupportRequests();
  }

  loadReports(): void {
    const campusId = this.authService.currentUser?.campusId;
    if (campusId) {
      this.reportService.loadDashboard(campusId).subscribe({
        next: (data) => { this.dashboard = data; this.loadingStats = false; },
        error: () => { this.loadingStats = false; }
      });
      this.reportService.loadSupportRequestBreakdown(campusId).subscribe({
        next: (data) => { this.breakdown = data; },
        error: () => {}
      });
    } else {
      this.loadingStats = false;
    }
  }

  loadSupportRequests(): void {
    this.loadingRequests = true;
    this.referralError = '';
    this.api.get<{ data: { data: any[] } }>('/support-requests').subscribe({
      next: (response) => {
        this.supportRequests = response.data.data.map((item) => ({
          id: String(item.id),
          subject: item.subject,
          category: item.category,
          status: item.status,
          priority: item.priority ?? 'medium',
          created_at: item.created_at,
          requester_id: String(item.requester_id),
          campus_id: String(item.campus_id ?? ''),
          campus: item.campus ? { id: String(item.campus.id), name: item.campus.name, code: item.campus.code } : null,
          assignee: item.assignee ? { id: String(item.assignee.id), name: item.assignee.name, email: item.assignee.email } : null,
        }));
        this.loadingRequests = false;
      },
      error: () => { this.loadingRequests = false; }
    });
  }

  referToGuidance(requestId: string): void {
    const request = this.supportRequests.find((r) => r.id === requestId);
    if (!request) return;

    this.referralError = '';
    this.referralSuccess = '';
    this.api.post(`/support-requests/${requestId}/refer-to-guidance`, {
      reason: `Peer counselor referral for ${request.category.replace(/-/g, ' ')} support`,
      notes: 'Peer counselor has reviewed this case and recommends professional Guidance & Counselling input. Client details kept confidential per session privacy.'
    }).subscribe({
      next: () => {
        request.alreadyReferred = true;
        request.status = 'assigned';
        this.referredIds.add(requestId);
        this.referralSuccess = `Client request referred to Guidance & Counselling. The referral is visible only to professional staff.`;
      },
      error: () => {
        this.referralError = 'Could not create the referral. Please try again.';
      }
    });
  }

  canRefer(request: PeerSupportRequest): boolean {
    return !['resolved', 'closed'].includes(request.status) && !request.alreadyReferred;
  }

  canReferAny(): boolean {
    return this.supportRequests.some((r) => this.canRefer(r));
  }

  setAvailability(value: string): void {
    this.availability = value;
  }

  statusSegments() {
    if (!this.breakdown) return { segments: [], total: 0 };
    return this.reportService.statusSegments(this.breakdown);
  }

  statCards() {
    if (!this.dashboard) return [];
    const s = this.dashboard.stats;
    return [
      { label: 'Peer counselors', value: this.formatNumber(s.active_peer_counselors), icon: 'graduation', tone: 'purple' as const },
      { label: 'Support requests', value: this.formatNumber(s.support_requests_period), icon: 'chat', tone: 'orange' as const },
      { label: 'Open escalations', value: this.formatNumber(s.open_escalations), icon: 'alert', tone: 'urgent' as const },
      { label: 'Appointments', value: this.formatNumber(s.appointments_booked), icon: 'calendar', tone: 'professional' as const },
    ];
  }

  private formatNumber(n: number): string {
    return new Intl.NumberFormat('en-KE').format(n);
  }

  notificationIcon(type: string): string {
    const map: Record<string, string> = {
      message: 'chat',
      appointment: 'calendar',
      resource: 'book',
      training: 'graduation',
      announcement: 'bell',
      escalation: 'alert',
    };
    return map[type] ?? 'bell';
  }
}
