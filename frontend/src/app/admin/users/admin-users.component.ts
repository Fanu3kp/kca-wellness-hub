import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { User } from '../../core/models/domain.model';

interface ApiUser {
  id: number | string;
  name: string;
  email: string;
  roles: string[];
  is_active: boolean;
  profile?: { campus_id?: number | string | null; student_number?: string | null; phone?: string | null };
}

interface ApiUserCollection {
  data: { data: ApiUser[] };
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [FormsModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent, LoadingComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit {
  users: ApiUser[] = [];
  search = '';
  roleFilter = '';
  loading = false;
  error = '';
  submitting = false;

  constructor(
    private readonly api: ApiService,
    readonly authService: AuthService
  ) {}

  ngOnInit(): void { this.loadUsers(); }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    this.api.get<ApiUserCollection>('/users', { search: this.search, role: this.roleFilter }).subscribe({
      next: (response) => { this.users = response.data.data; this.loading = false; },
      error: () => { this.loading = false; this.error = 'Users could not be loaded.'; }
    });
  }

  toggleStatus(user: ApiUser): void {
    this.submitting = true;
    this.api.patch<{ message: string }>(`/users/${user.id}`, { is_active: !user.is_active }).subscribe({
      next: () => { user.is_active = !user.is_active; this.submitting = false; },
      error: () => { this.submitting = false; }
    });
  }

  get filteredUsers(): ApiUser[] {
    return this.users.filter((u) => {
      const q = this.search.toLowerCase();
      const matchesSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const matchesRole = !this.roleFilter || u.roles.includes(this.roleFilter);
      return matchesSearch && matchesRole;
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  }
}
