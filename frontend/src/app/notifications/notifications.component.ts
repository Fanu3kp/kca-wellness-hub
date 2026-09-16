import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../core/services/notification.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [AsyncPipe, RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications$ = this.notificationService.notifications$;

  submitting = false;
  error = '';

  constructor(readonly notificationService: NotificationService) {}

  markRead(): void {
    this.submitting = true;
    this.error = '';
    this.notificationService.markAllRead().subscribe({
      next: () => {
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        this.error = 'Notifications could not be updated.';
      }
    });
  }
}
