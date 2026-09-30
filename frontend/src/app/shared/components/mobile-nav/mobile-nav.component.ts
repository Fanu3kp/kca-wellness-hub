import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CampusService } from '../../../core/services/campus.service';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

interface MobileNavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UiIconComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  readonly user$ = this.authService.currentUser$;
  constructor(
    readonly authService: AuthService,
    private readonly campusService: CampusService
  ) {}

  private get townPath(): string {
    const campusSlug = this.campusService.selectedCampus?.slug ?? '';
    return campusSlug ? '/' + campusSlug : '/campus-selection';
  }

  private get commonLinks(): MobileNavLink[] {
    return [
      { path: '/events', label: 'Events', icon: 'calendar' },
      { path: '/reports', label: 'Reports', icon: 'chart' },
      { path: '/contact', label: 'Contact', icon: 'mail' },
      { path: '/login', label: 'Login', icon: 'login' },
      { path: this.townPath, label: 'Town', icon: 'compass' },
    ];
  }

  private get roleHomePath(): string {
    const user = this.authService.currentUser;
    const role = user?.roles[0];
    if (role === 'student') return '/student';
    if (role === 'peer_counselor') return '/peer-counselor';
    if (role === 'guidance_staff' || role === 'hod') return '/guidance';
    return '/landing';
  }

  get links() {
    const user = this.authService.currentUser;

    if (!user) {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/campus-selection', label: 'Campuses', icon: 'compass' },
        { path: '/events', label: 'Events', icon: 'calendar' },
        { path: '/contact', label: 'Contact', icon: 'mail' },
        { path: '/login', label: 'Log in', icon: 'logout' },
        { path: '/register', label: 'Join', icon: 'plus' }
      ];
    }

    const role = user.roles[0];

    if (role === 'student' || role === 'peer_counselor' || role === 'guidance_staff' || role === 'hod') {
      return [
        { path: this.roleHomePath, label: 'Home', icon: 'home' },
        ...this.commonLinks,
      ];
    }

    if (role === 'admin') {
      return [
        { path: '/admin', label: 'Home', icon: 'home' },
        { path: '/admin/users', label: 'Users', icon: 'users' },
        { path: '/admin/campuses', label: 'Campuses', icon: 'compass' },
        { path: '/admin/reports', label: 'Reports', icon: 'chart' },
        { path: '/student/profile', label: 'Profile', icon: 'heart' }
      ];
    }

    return [
      { path: '/landing', label: 'Home', icon: 'home' },
      { path: '/campus-selection', label: 'Campuses', icon: 'compass' },
      { path: '/events', label: 'Events', icon: 'calendar' },
      { path: '/contact', label: 'Contact', icon: 'mail' },
      { path: '/login', label: 'Log in', icon: 'logout' },
      { path: '/register', label: 'Join', icon: 'plus' }
    ];
  }
}
