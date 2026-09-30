import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { ApiService } from '../../core/services/api.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

interface ProfilePayload {
  id?: number | string;
  campus_id?: number | string | null;
  student_number?: string | null;
  phone?: string | null;
  gender?: string | null;
  bio?: string | null;
  preferences?: {
    campus_announcements?: boolean;
    appointment_reminders?: boolean;
    wellness_challenges?: boolean;
  } | null;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  profile: ProfilePayload | null = null;
  editing = false;
  loading = false;
  saving = false;
  error = '';

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    private readonly api: ApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.error = '';
    this.api.get<{ data: ProfilePayload }>('/profile').subscribe({
      next: (response) => {
        this.profile = response.data;
        const campusId = response.data.campus_id;
        if (campusId) {
          const campus = this.campusService.getCampus(String(campusId));
          if (campus) this.campusService.selectCampus(campus);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Your profile could not be loaded.';
      }
    });
  }

  savePreferences(): void {
    if (!this.profile) return;
    this.saving = true;
    this.error = '';
    this.api.patch<{ data: ProfilePayload }>('/profile', { preferences: this.profile.preferences }).subscribe({
      next: (response) => {
        this.profile = response.data;
        this.saving = false;
        this.editing = false;
      },
      error: () => {
        this.saving = false;
        this.error = 'Your preferences could not be saved.';
      }
    });
  }

  get roleLabel(): string {
    const user = this.authService.currentUser;
    if (!user) return '';
    return user.roles.map((r) => r.replace('_', ' ')).join(', ');
  }

  get roleTone(): 'calm' | 'peer' | 'professional' | 'urgent' | 'neutral' {
    const user = this.authService.currentUser;
    if (!user) return 'neutral';
    if (user.roles.includes('peer_counselor')) return 'peer';
    if (user.roles.includes('guidance_staff') || user.roles.includes('hod') || user.roles.includes('admin')) return 'professional';
    return 'calm';
  }

  initials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/landing']));
  }
}
