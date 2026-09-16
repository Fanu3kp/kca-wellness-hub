import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { SocialLink, SocialPlatform } from '../models/connect.model';

interface SocialLinkCollection {
  data: SocialLink[];
}

export interface SocialLinkPayload {
  platform: SocialPlatform;
  label: string;
  url: string;
  sort_order?: number;
  is_active?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SocialLinkService {
  private readonly api = inject(ApiService);

  getActiveLinks(): Observable<SocialLink[]> {
    return this.api.get<SocialLinkCollection>('/social-links').pipe(
      map((response) => response.data)
    );
  }

  getAll(): Observable<SocialLink[]> {
    return this.api.get<SocialLinkCollection>('/social-links').pipe(
      map((response) => response.data)
    );
  }

  create(payload: SocialLinkPayload): Observable<SocialLink> {
    return this.api.post<SocialLink>('/social-links', payload);
  }

  update(id: number | string, payload: Partial<SocialLinkPayload>): Observable<SocialLink> {
    return this.api.put<SocialLink>(`/social-links/${id}`, payload);
  }

  patch(id: number | string, payload: Partial<SocialLinkPayload>): Observable<SocialLink> {
    return this.api.patch<SocialLink>(`/social-links/${id}`, payload);
  }

  delete(id: number | string): Observable<{ message: string }> {
    return this.api.delete<{ message: string }>(`/social-links/${id}`);
  }
}