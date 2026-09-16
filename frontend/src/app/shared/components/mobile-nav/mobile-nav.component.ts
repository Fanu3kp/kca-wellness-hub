import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UiIconComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  readonly user$ = this.authService.currentUser$;
  constructor(readonly authService: AuthService) {}

  get links() {
    const user = this.authService.currentUser;
    if (!user) {
      return [
        { path: '/landing', label: 'Home', icon: 'home' },
        { path: '/campus-selection', label: 'Campuses', icon: 'compass' },
        { path: '/events', label: 'Events', icon: 'calendar' },
        { path: '/login', label: 'Log in', icon: 'logout' },
        { path: '/register', label: 'Join', icon: 'plus' }
      ];
    }

    const role = user.roles[0];
    if (role === 'student') {
      return [
        { path: '/student', label: 'Home', icon: 'home' },
        { path: '/student/quick-help', label: 'Help', icon: 'compass' },
        { path: '/student/goals', label: 'Vision', icon: 'target' },
        { path: '/student/challenges', label: 'Challenges', icon: 'trophy' },
        { path: '/student/peer-counselors', label: 'Peers', icon: 'users' },
        { path: '/student/appointments', label: 'Book', icon: 'calendar' },
        { path: '/student/notifications', label: 'Alerts', icon: 'bell' }
      ];
    }
    if (role === 'peer_counselor') {
      return [
        { path: '/peer-counselor', label: 'Home', icon: 'home' },
        { path: '/peer-counselor/requests', label: 'Requests', icon: 'bell' },
        { path: '/peer-counselor/conversations', label: 'Chat', icon: 'chat' },
        { path: '/peer-counselor/training', label: 'Academy', icon: 'graduation' },
        { path: '/student/profile', label: 'Profile', icon: 'heart' }
      ];
    }
    if (role === 'guidance_staff') {
      return [
        { path: '/guidance', label: 'Home', icon: 'home' },
        { path: '/guidance/escalations', label: 'Escalations', icon: 'alert' },
        { path: '/guidance/appointments', label: 'Appointments', icon: 'calendar' },
        { path: '/guidance/resources', label: 'Resources', icon: 'book' },
        { path: '/student/profile', label: 'Profile', icon: 'heart' }
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
      { path: '/login', label: 'Log in', icon: 'logout' },
      { path: '/register', label: 'Join', icon: 'plus' }
    ];
  }
}
