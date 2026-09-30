import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

interface SupportRequest {
  id: string;
  requester_id: string;
  campus_id: string;
  category: string;
  subject: string;
  details: string;
  status: 'pending' | 'assigned' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assigned_to?: string;
  assignee?: { id: string; name: string; email: string } | null;
  campus?: { id: string; name: string; code: string } | null;
  created_at: string;
}

interface ApiSupportRequest {
  id: number | string;
  requester_id: number | string;
  campus_id: number | string | null;
  category: string;
  subject: string;
  details: string;
  status: string;
  priority: string;
  assigned_to?: number | string | null;
  assignee?: { id: number | string; name: string; email: string } | null;
  campus?: { id: number | string; name: string; code: string } | null;
  created_at: string;
}

interface ApiSupportRequestCollection {
  data: { data: ApiSupportRequest[] };
}

@Component({
  selector: 'app-support-requests',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent, LoadingComponent],
  templateUrl: './support-requests.component.html',
  styleUrl: './support-requests.component.scss'
})
export class SupportRequestsComponent implements OnInit {
  requests: SupportRequest[] = [];
  showCreateForm = false;
  newRequestCategory = 'academic-pressure';
  newRequestSubject = '';
  newRequestDetails = '';
  newRequestCampusId = '';
  loading = false;
  error = '';
  submitting = false;

  categories = [
    { value: 'academic-pressure', label: 'Academic pressure' },
    { value: 'relationship', label: 'Relationship' },
    { value: 'adjustment', label: 'Adjustment' },
    { value: 'friendship', label: 'Friendship' },
    { value: 'general-wellbeing', label: 'General wellbeing' },
    { value: 'motivation', label: 'Motivation' },
    { value: 'stress', label: 'Stress' },
    { value: 'sleep', label: 'Sleep' },
    { value: 'career', label: 'Career' },
    { value: 'urgent', label: 'Urgent' }
  ];

  priorities = ['low', 'medium', 'high'];
  selectedPriority = 'medium';

  constructor(
    private readonly api: ApiService,
    readonly authService: AuthService,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void { this.loadRequests(); }

  loadRequests(): void {
    this.loading = true;
    this.error = '';
    this.api.get<ApiSupportRequestCollection>('/support-requests').subscribe({
      next: (response) => {
        this.requests = response.data.data.map((item) => ({
          id: String(item.id),
          requester_id: String(item.requester_id),
          campus_id: String(item.campus_id ?? ''),
          category: item.category,
          subject: item.subject,
          details: item.details,
          status: item.status as SupportRequest['status'],
          priority: item.priority as SupportRequest['priority'],
          assigned_to: item.assigned_to ? String(item.assigned_to) : undefined,
          assignee: item.assignee ? { id: String(item.assignee.id), name: item.assignee.name, email: item.assignee.email } : null,
          campus: item.campus ? { id: String(item.campus.id), name: item.campus.name, code: item.campus.code } : null,
          created_at: item.created_at
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Support requests could not be loaded.'; }
    });
  }

  createRequest(): void {
    if (!this.newRequestSubject.trim() || !this.newRequestDetails.trim()) return;
    this.submitting = true;
    this.error = '';
    const campusId = this.campusService.getPersistableCampusId(this.campusService.selectedCampus);
    this.api.post<ApiSupportRequest>('/support-requests', {
      campus_id: this.newRequestCampusId || campusId || this.campusService.selectedCampus.id,
      category: this.newRequestCategory,
      subject: this.newRequestSubject.trim(),
      details: this.newRequestDetails.trim(),
      priority: this.selectedPriority
    }).subscribe({
      next: (item) => {
        this.requests.unshift({
          id: String(item.id),
          requester_id: String(item.requester_id),
          campus_id: String(item.campus_id ?? ''),
          category: item.category,
          subject: item.subject,
          details: item.details,
          status: item.status as SupportRequest['status'],
          priority: item.priority as SupportRequest['priority'],
          assigned_to: item.assigned_to ? String(item.assigned_to) : undefined,
          assignee: item.assignee ? { id: String(item.assignee.id), name: item.assignee.name, email: item.assignee.email } : null,
          campus: item.campus ? { id: String(item.campus.id), name: item.campus.name, code: item.campus.code } : null,
          created_at: item.created_at
        });
        this.newRequestSubject = '';
        this.newRequestDetails = '';
        this.showCreateForm = false;
        this.submitting = false;
      },
      error: () => { this.submitting = false; this.error = 'Request could not be created.'; }
    });
  }

  referToGuidance(requestId: string): void {
    const request = this.requests.find((r) => r.id === requestId);
    if (!request || request.status === 'resolved' || request.status === 'closed') return;

    this.submitting = true;
    this.error = '';
    this.api.post(`/support-requests/${requestId}/refer-to-guidance`, {
      reason: `Referral from student for ${request.category.replace(/-/g, ' ')} support`,
      notes: 'Student requested referral to Guidance & Counselling department.'
    }).subscribe({
      next: () => {
        request.status = 'assigned';
        request.assigned_to = request.assignee ? request.assignee.id : undefined;
        this.error = '';
        this.submitting = false;
      },
      error: () => { this.submitting = false; this.error = 'Referral could not be created.'; }
    });
  }

  canRefer(request: SupportRequest): boolean {
    return !['resolved', 'closed'].includes(request.status);
  }

  statusBadgeTone(status: string): 'calm' | 'professional' | 'urgent' | 'neutral' {
    switch (status) {
      case 'pending': return 'neutral';
      case 'assigned': return 'professional';
      case 'in_progress': return 'calm';
      case 'resolved': return 'calm';
      case 'closed': return 'neutral';
      default: return 'neutral';
    }
  }

  priorityColor(priority: string): string {
    switch (priority) {
      case 'high': return '#a33a2d';
      case 'medium': return '#BEA429';
      default: return '#146b58';
    }
  }
}
