import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Connect, ConnectStatusResponse } from '../models/connect.model';

interface ConnectCollection {
  data: Connect[];
}

interface ConnectMessage {
  message: string;
}

interface FollowerCollection {
  data: { id: number | string; name: string; email: string }[];
}

@Injectable({ providedIn: 'root' })
export class ConnectService {
  private readonly api = inject(ApiService);

  createConnect(followedId: number | string): Observable<Connect> {
    return this.api.post<Connect>('/connects', { followed_id: followedId });
  }

  acceptConnect(id: number | string): Observable<Connect> {
    return this.api.post<Connect>(`/connects/${id}/accept`, {});
  }

  rejectConnect(id: number | string): Observable<Connect> {
    return this.api.post<Connect>(`/connects/${id}/reject`, {});
  }

  getIncoming(): Observable<Connect[]> {
    return this.api.get<ConnectCollection>('/connects/incoming').pipe(
      map((response) => response.data)
    );
  }

  unfollow(id: number | string): Observable<ConnectMessage> {
    return this.api.delete<ConnectMessage>(`/connects/${id}`);
  }

  getStatus(userId: number | string): Observable<ConnectStatusResponse> {
    return this.api.get<{ data: ConnectStatusResponse }>(`/connects/status/${userId}`).pipe(
      map((response) => response.data)
    );
  }

  getFollowers(userId: number | string): Observable<{ id: number | string; name: string; email: string }[]> {
    return this.api.get<FollowerCollection>(`/connects/${userId}/followers`).pipe(
      map((response) => response.data)
    );
  }

  getFollowing(userId: number | string): Observable<{ id: number | string; name: string; email: string }[]> {
    return this.api.get<FollowerCollection>(`/connects/${userId}/following`).pipe(
      map((response) => response.data)
    );
  }
}