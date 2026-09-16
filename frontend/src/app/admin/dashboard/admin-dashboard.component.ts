import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Students', value: '1,240', icon: 'users', tone: 'teal' },
    { label: 'Peer counselors', value: '18', icon: 'graduation', tone: 'purple' },
    { label: 'Campuses', value: '03', icon: 'home', tone: 'orange' },
    { label: 'Resources', value: '24', icon: 'book', tone: 'blue' }
  ];
}
