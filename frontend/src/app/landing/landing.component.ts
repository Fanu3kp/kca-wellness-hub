import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../core/services/campus.service';
import { AuthService } from '../core/services/auth.service';
import { WellnessService } from '../core/services/wellness.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { SocialLinksComponent } from '../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, ButtonComponent, SocialLinksComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  readonly campuses$ = this.campusService.selectedCampus$;
  readonly user$ = this.authService.currentUser$;
  readonly campuses = this.campusService.getCampuses();
  readonly pathways = this.wellnessService.pathways.slice(0, 4);

  readonly supportCategories = [
    { label: 'Stress', icon: 'sparkles' },
    { label: 'Academic pressure', icon: 'book' },
    { label: 'Relationships', icon: 'heart' },
    { label: 'Career guidance', icon: 'compass' },
    { label: 'Sleep & wellbeing', icon: 'moon' },
    { label: 'General support', icon: 'users' }
  ];

  constructor(
    private readonly campusService: CampusService,
    private readonly authService: AuthService,
    private readonly wellnessService: WellnessService,
    private readonly router: Router
  ) {}

  get greeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  startWithCampus(): void {
    this.router.navigate(['/campus-selection']);
  }
}
