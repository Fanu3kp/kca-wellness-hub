import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { NotificationItem } from '../models/domain.model';
import { ApiService } from './api.service';

interface ApiNotification {
  id: number | string;
  type: NotificationItem['type'];
  title: string;
  body: string;
  read_at?: string | null;
  created_at: string;
}

interface ApiNotificationCollection {
  data: {
    data: ApiNotification[];
  };
}

const fallbackNotifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Welcome to your wellness hub',
    message: 'Your campus support network is ready when you need it.',
    type: 'announcement',
    read: false,
    createdAt: 'Today, 09:00'
  },
  {
    id: 'n2',
    title: 'New wellness resource',
    message: 'A new guide on managing academic pressure is available.',
    type: 'resource',
    read: false,
    createdAt: 'Yesterday, 16:30'
  },
  {
    id: 'n3',
    title: 'Appointment reminder',
    message: 'Professional support is available Monday to Friday, 9:00–16:00.',
    type: 'appointment',
    read: true,
    createdAt: 'Yesterday, 10:00'
  }
];

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly notificationsSource = new BehaviorSubject<NotificationItem[]>(fallbackNotifications);
  readonly notifications$ = this.notificationsSource.asObservable();

  constructor(private readonly api: ApiService) {
    this.loadNotifications().subscribe();
  }

  loadNotifications() {
    return this.api.get<ApiNotificationCollection>('/notifications').pipe(
      map((response) => response.data.data.map((item) => this.fromApi(item))),
      catchError(() => of(this.notificationsSource.value)),
      map((items) => {
        this.notificationsSource.next(items);
        return items;
      })
    );
  }

  getNotifications() {
    return this.notifications$;
  }

  markAllRead() {
    return this.api.patch<{ message: string }>('/notifications/read-all', {}).pipe(
      catchError(() => of({ message: 'Notifications marked as read.' })),
      map(() => {
        const items = this.notificationsSource.value.map((item) => ({ ...item, read: true }));
        this.notificationsSource.next(items);
        return items;
      })
    );
  }

  unreadCount(): number {
    return this.notificationsSource.value.filter((notification) => !notification.read).length;
  }

  private fromApi(item: ApiNotification): NotificationItem {
    return {
      id: String(item.id),
      title: item.title,
      message: item.body ?? '',
      type: item.type,
      read: Boolean(item.read_at),
      createdAt: item.created_at
    };
  }
}
