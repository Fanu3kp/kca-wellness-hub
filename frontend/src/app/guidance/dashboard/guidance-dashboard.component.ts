import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-guidance-dashboard',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './guidance-dashboard.component.html',
  styleUrl: './guidance-dashboard.component.scss'
})
export class GuidanceDashboardComponent {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  escalations = [
    { student: 'KCA Student', campus: 'Ruaraka Main', concern: 'Professional support requested', status: 'Pending review' },
    { student: 'KCA Student', campus: 'Town', concern: 'Referral follow-up', status: 'New' }
  ];

  constructor(readonly authService: AuthService, readonly campusService: CampusService) {}
}
