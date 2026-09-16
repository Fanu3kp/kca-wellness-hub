import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { finalize, map } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CampusService } from '../../../core/services/campus.service';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { CampusSelectorComponent } from '../campus-selector/campus-selector.component';
import { LoadingComponent } from '../loading/loading.component';
import { BadgeComponent } from '../badge/badge.component';
import { UserRole } from '../../../core/models/domain.model';

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AsyncPipe, NgIf, UiIconComponent, CampusSelectorComponent, LoadingComponent, BadgeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  campusOpen = false;
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  readonly notifications$ = this.notificationService.notifications$;
  readonly unreadCount$ = this.notificationService.notifications$.pipe(map((notifications) => notifications.filter((notification) => !notification.read).length));

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    readonly notificationService: NotificationService,
    private readonly router: Router
  ) {}

  get navLinks(): NavLink[] {
    const user = this.authService.currentUser;
    if (!user) {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/campus-selection', label: 'Campuses', icon: 'compass' },
        { path: '/events', label: 'Events', icon: 'calendar' }
      ];
    }

    const role = user.roles[0];
    if (role === 'student') {
      const campusId = this.campusService.selectedCampus?.id ?? '';
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/student', label: 'Dashboard', icon: 'home' },
        { path: '/student/quick-help', label: 'Quick Help', icon: 'compass' },
        { path: '/student/peer-counselors', label: 'Peer Counselors', icon: 'users' },
        { path: '/student/appointments', label: 'Appointments', icon: 'calendar' },
        { path: '/student/resources', label: 'Resources', icon: 'book' },
        { path: '/student/favorites', label: 'Favorites', icon: 'bookmark' },
        { path: '/student/wellness', label: 'Wellness', icon: 'heart' },
        { path: '/student/goals', label: 'Vision & Goals', icon: 'target' },
        { path: '/student/challenges', label: 'Challenges', icon: 'trophy' },
        { path: `/campuses/${campusId}`, label: 'Gallery', icon: 'book' },
        { path: '/events', label: 'Events', icon: 'calendar' },
        { path: '/student/notifications', label: 'Notifications', icon: 'bell' }
      ];
    }
    if (role === 'peer_counselor') {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/peer-counselor', label: 'My Dashboard', icon: 'home' },
        { path: '/peer-counselor/training', label: 'Academy', icon: 'graduation' },
        { path: '/peer-counselor/conversations', label: 'Conversations', icon: 'chat' },
        { path: '/peer-counselor/requests', label: 'Requests', icon: 'bell' }
      ];
    }
    if (role === 'guidance_staff') {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/guidance', label: 'Dashboard', icon: 'home' },
        { path: '/guidance/escalations', label: 'Escalations', icon: 'alert' },
        { path: '/guidance/appointments', label: 'Appointments', icon: 'calendar' },
        { path: '/guidance/resources', label: 'Resources', icon: 'book' }
      ];
    }
    if (role === 'admin') {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/admin', label: 'Dashboard', icon: 'home' },
        { path: '/admin/users', label: 'Users', icon: 'users' },
        { path: '/admin/campuses', label: 'Campuses', icon: 'compass' },
        { path: '/admin/reports', label: 'Reports', icon: 'chart' }
      ];
    }
    return [
      { path: '/landing', label: 'Home', icon: 'home' },
      { path: '/campus-selection', label: 'Campuses', icon: 'compass' },
      { path: '/events', label: 'Events', icon: 'calendar' }
    ];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.authService.logout().pipe(finalize(() => {
      this.closeMenu();
      this.router.navigate(['/landing']);
    })).subscribe();
  }

  initials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }

  roleBadgeTone(roles: UserRole[]): 'calm' | 'peer' | 'professional' | 'urgent' | 'neutral' {
    if (roles.includes('admin')) return 'professional';
    if (roles.includes('guidance_staff')) return 'professional';
    if (roles.includes('peer_counselor')) return 'peer';
    return 'calm';
  }
}
