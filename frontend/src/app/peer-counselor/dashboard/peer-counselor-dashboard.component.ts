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
  selector: 'app-peer-counselor-dashboard',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './peer-counselor-dashboard.component.html',
  styleUrl: './peer-counselor-dashboard.component.scss'
})
export class PeerCounselorDashboardComponent {
  readonly user$ = this.authService.currentUser$;
  readonly campus$ = this.campusService.selectedCampus$;
  availability = 'available';
  requests = [
    { name: 'KCA Student', concern: 'Academic pressure', time: '10 minutes ago', status: 'New' },
    { name: 'KCA Student', concern: 'Friendship concern', time: '1 hour ago', status: 'Waiting' }
  ];
  conversations = [
    { name: 'Amina Mohamed', topic: 'Study stress', lastActive: '5 min ago', unread: 2 },
    { name: 'Brian Otieno', topic: 'Family support', lastActive: '1 hour ago', unread: 0 }
  ];
  schedule = [
    { day: 'Mon', time: '14:00', activity: 'Peer session · Room 3', type: 'session' },
    { day: 'Tue', time: '10:00', activity: 'Supervision · Guidance staff', type: 'supervision' },
    { day: 'Wed', time: '15:00', activity: 'Training · Module 3', type: 'training' },
    { day: 'Thu', time: '11:00', activity: 'Peer session · Virtual', type: 'session' },
    { day: 'Fri', time: '09:00', activity: 'Open availability', type: 'open' }
  ];
  todaySessions = 2;
  activeConversations = 4;
  unreadNotifications = 3;
  resources = [
    { title: 'Active listening guide', category: 'Training' },
    { title: 'Boundary setting toolkit', category: 'Training' },
    { title: 'Referral pathways', category: 'Professional' }
  ];

  constructor(readonly authService: AuthService, readonly campusService: CampusService) {}

  setAvailability(value: string): void {
    this.availability = value;
  }
}
