import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.scss'
})
export class AdminReportsComponent implements OnInit {
  stats = [
    { label: 'Total students', value: '1,240', trend: '+5%' },
    { label: 'Active peer counselors', value: '18', trend: '+2' },
    { label: 'Support requests this month', value: '87', trend: '+12%' },
    { label: 'Escalations open', value: '6', trend: '-3' },
    { label: 'Appointments booked', value: '142', trend: '+18%' },
    { label: 'Resources published', value: '24', trend: '+4' }
  ];

  recentActivity = [
    { action: 'New student registered', campus: 'Ruaraka Main', time: '10 minutes ago' },
    { action: 'Peer counselor trained', campus: 'Town', time: '1 hour ago' },
    { action: 'Escalation resolved', campus: 'Kitengela', time: '2 hours ago' },
    { action: 'Support request created', campus: 'Ruaraka Main', time: '3 hours ago' },
    { action: 'Counselor appointment booked', campus: 'Town', time: '4 hours ago' }
  ];

  ngOnInit(): void {}
}
