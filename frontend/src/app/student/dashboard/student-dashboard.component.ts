import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../../core/services/campus.service';
import { AuthService } from '../../core/services/auth.service';
import { WellnessService } from '../../core/services/wellness.service';
import { NotificationService } from '../../core/services/notification.service';
import { ChallengeService } from '../../core/services/challenge.service';
import { ResourceStateService } from '../../core/services/resource-state.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  readonly moods = ['Great', 'Good', 'Okay', 'Low', 'Stressed', 'Very low'];
  selectedMood = '';
  moodMessage = '';
  readonly pathways = this.wellnessService.pathways;
  readonly resources = this.wellnessService.resources.slice(0, 3);
  readonly joinedChallenges = this.challengeService.joinedIds.length;
  readonly favoriteCount = this.resourceState.state.favoriteIds.length;
  today = new Intl.DateTimeFormat('en-KE', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date());

  community = [
    { name: 'Mindful Mornings', members: 48, type: 'Group', icon: 'sun' },
    { name: 'Stress Busters', members: 32, type: 'Group', icon: 'sparkles' },
    { name: 'Career Connect', members: 24, type: 'Group', icon: 'briefcase' }
  ];

  galleryItems = [
    { icon: 'users', title: 'Community', description: 'Students connecting and supporting each other' },
    { icon: 'heart', title: 'Wellness', description: 'Mental health awareness activities' }
  ];

  constructor(
    readonly authService: AuthService,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService,
    readonly notificationService: NotificationService,
    readonly challengeService: ChallengeService,
    readonly resourceState: ResourceStateService
  ) {
    this.notificationService.getNotifications().subscribe();
  }

  checkMood(mood: string): void {
    this.selectedMood = mood;
    const messages: Record<string, string> = {
      Great: 'Wonderful. What is one thing you would like to carry into today?',
      Good: 'A good moment is worth noticing. Keep making space for what supports you.',
      Okay: 'It is okay to be in the middle. A small pause or conversation can help.',
      Low: 'Thank you for naming that. You do not have to handle it alone.',
      Stressed: 'Let’s slow things down. A quiet exercise or a listening peer may help.',
      'Very low': 'Your safety matters. Consider reaching out to urgent support now.'
    };
    this.moodMessage = messages[mood] ?? '';
  }
}
