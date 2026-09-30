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

interface NavGroup {
  label: string;
  links: NavLink[];
}

interface NavLink {
  path: string;
  label: string;
  icon: string;
  groups?: NavGroup[];
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
  openRoleMenu = '';
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

  private get townLink(): NavLink {
    const campusSlug = this.campusService.selectedCampus?.slug ?? '';
    return { path: campusSlug ? '/' + campusSlug : '/campus-selection', label: 'Town', icon: 'compass' };
  }

  private get commonNavLinks(): NavLink[] {
    return [
      { path: '/landing', label: 'Home', icon: 'home' },
      { path: '/events', label: 'Events', icon: 'calendar' },
      { path: '/reports', label: 'Reports', icon: 'chart' },
      { path: '/contact', label: 'Contact', icon: 'mail' },
      this.townLink,
    ];
  }

  private roleLinks(role: 'student' | 'peer_counselor' | 'guidance_staff'): NavLink {
    const definitions = {
      student: {
        label: 'Students',
        icon: 'graduation',
        dashboard: '/student',
        login: '/student/login',
        register: '/student/register',
        registerLabel: 'Student registration',
        loginLabel: 'Students sign-in',
      },
      peer_counselor: {
        label: 'Peer Counselor',
        icon: 'users',
        dashboard: '/peer-counselor',
        login: '/peer-counselor/login',
        register: '/peer-counselor/register',
        registerLabel: 'Peer counselor registration',
        loginLabel: 'Peer counselor sign-in',
      },
      guidance_staff: {
        label: 'Guidance Staff',
        icon: 'briefcase',
        dashboard: '/guidance',
        login: '/guidance/login',
        register: '/guidance/register',
        registerLabel: 'Guidance staff or administrator registration',
        loginLabel: 'Guidance staff or administrator sign-in',
      },
    } as const;

    const definition = definitions[role];
    const signedIn = Boolean(this.authService.currentUser?.roles.includes(role));

    return {
      path: signedIn ? definition.dashboard : definition.login,
      label: definition.label,
      icon: definition.icon,
      groups: [
        {
          label: 'Register or create an account',
          links: [
            { path: definition.register, label: definition.registerLabel, icon: 'plus' },
          ],
        },
        {
          label: 'Sign in',
          links: [
            { path: definition.login, label: definition.loginLabel, icon: 'arrow' },
          ],
        },
      ],
    };
  }

  private get baseLinks(): NavLink[] {
    return [
      { path: '/landing', label: 'Home', icon: 'home' },
      { path: '/events', label: 'Events', icon: 'calendar' },
      { path: '/reports', label: 'Reports', icon: 'chart' },
      { path: '/contact', label: 'Contact', icon: 'mail' },
      this.townLink,
      this.roleLinks('student'),
      this.roleLinks('peer_counselor'),
      this.roleLinks('guidance_staff'),
    ];
  }

  private get studentLinks(): NavLink[] {
    return [
      { path: '/student', label: 'Dashboard', icon: 'home' },
      { path: '/student/peer-counselors', label: 'Peer Counselors', icon: 'users' },
      { path: '/student/appointments', label: 'Appointments', icon: 'calendar' },
      { path: '/student/goals', label: 'Vision & Goals', icon: 'target' },
      { path: '/student/reports', label: 'Campus Reports', icon: 'chart' },
      { path: '/student/notifications', label: 'Notifications', icon: 'bell' },
    ];
  }

  private get peerCounselorLinks(): NavLink[] {
    return [
      { path: '/peer-counselor', label: 'My Dashboard', icon: 'home' },
      { path: '/peer-counselor/training', label: 'Academy', icon: 'graduation' },
      { path: '/peer-counselor/conversations', label: 'Conversations', icon: 'chat' },
      { path: '/peer-counselor/requests', label: 'Requests', icon: 'bell' },
      { path: '/peer-counselor/reports', label: 'Reports', icon: 'chart' },
    ];
  }

  private get guidanceLinks(): NavLink[] {
    return [
      { path: '/guidance', label: 'Dashboard', icon: 'home' },
      { path: '/guidance/escalations', label: 'Escalations', icon: 'alert' },
      { path: '/guidance/appointments', label: 'Appointments', icon: 'calendar' },
      { path: '/guidance/reports', label: 'Reports', icon: 'chart' },
    ];
  }

  private getRoleDashboardLinks(role: string): NavLink[] {
    if (role === 'student') return this.studentLinks;
    if (role === 'peer_counselor') return this.peerCounselorLinks;
    if (role === 'guidance_staff' || role === 'hod') return this.guidanceLinks;
    return [];
  }

  get navLinks(): NavLink[] {
    const user = this.authService.currentUser;

    if (!user) {
      return this.baseLinks;
    }

    const role = user.roles[0];

    if (role === 'student' || role === 'peer_counselor' || role === 'guidance_staff' || role === 'hod') {
      return this.commonNavLinks;
    }

    if (role === 'admin') {
      return [
        ...this.baseLinks,
        { path: '/admin', label: 'Dashboard', icon: 'home' },
        { path: '/admin/users', label: 'Users', icon: 'users' },
        { path: '/admin/campuses', label: 'Campuses', icon: 'compass' },
        { path: '/admin/reports', label: 'Reports', icon: 'chart' },
      ];
    }

    return this.baseLinks;
  }

  get mobileNavLinks(): NavLink[] {
    const user = this.authService.currentUser;

    if (!user) {
      return this.baseLinks;
    }

    const role = user.roles[0];

    if (role === 'student' || role === 'peer_counselor' || role === 'guidance_staff' || role === 'hod') {
      return [...this.commonNavLinks, ...this.getRoleDashboardLinks(role)];
    }

    return this.navLinks;
  }

  toggleRoleMenu(path: string, forceOpen = false): void {
    this.openRoleMenu = forceOpen || this.openRoleMenu !== path ? path : '';
  }

  closeRoleMenuOnFocus(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as Node | null;
    const currentTarget = event.currentTarget as HTMLElement | null;
    if (relatedTarget && currentTarget?.contains(relatedTarget)) return;
    this.closeRoleMenu();
  }

  closeRoleMenu(): void {
    this.openRoleMenu = '';
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.closeRoleMenu();
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
    if (roles.includes('hod')) return 'professional';
    if (roles.includes('peer_counselor')) return 'peer';
    return 'calm';
  }
}
