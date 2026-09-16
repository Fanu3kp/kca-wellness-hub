import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';

interface VirtualSession {
  id: string;
  title: string;
  counselor: string;
  photoUrl: string;
  date: string;
  time: string;
  mode: 'Physical' | 'Virtual';
  status: 'Upcoming' | 'Completed';
}

@Component({
  selector: 'app-virtual-support',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './virtual-support.component.html',
  styleUrl: './virtual-support.component.scss'
})
export class VirtualSupportComponent {
  sessions: VirtualSession[] = [
    { id: 'v1', title: 'Counseling Session', counselor: 'Belinda', photoUrl: 'assets/guidance-counselling/Belinda.jpeg', date: 'Sep 18', time: '10:00', mode: 'Virtual', status: 'Upcoming' },
    { id: 'v2', title: 'Check-in Session', counselor: 'Emily', photoUrl: 'assets/guidance-counselling/Emily.jpeg', date: 'Sep 20', time: '14:00', mode: 'Virtual', status: 'Upcoming' },
    { id: 'v3', title: 'Follow-up Session', counselor: 'Tasha', photoUrl: 'assets/guidance-counselling/Tasha.jpeg', date: 'Sep 15', time: '11:00', mode: 'Physical', status: 'Completed' }
  ];

  get upcomingSessions() { return this.sessions.filter((s) => s.status === 'Upcoming'); }
  get completedSessions() { return this.sessions.filter((s) => s.status === 'Completed'); }
}
