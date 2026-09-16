import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface ResourceState {
  favoriteIds: string[];
  readIds: string[];
}

@Injectable({ providedIn: 'root' })
export class ResourceStateService {
  private readonly storageKey = 'kca_resource_state_v1';
  private readonly stateSource = new BehaviorSubject<ResourceState>(this.loadState());
  readonly favoriteIds$ = this.stateSource.pipe(map((state) => state.favoriteIds));
  readonly readIds$ = this.stateSource.pipe(map((state) => state.readIds));

  get state(): ResourceState {
    return this.stateSource.value;
  }

  isFavorite(id: string): boolean {
    return this.state.favoriteIds.includes(id);
  }

  isRead(id: string): boolean {
    return this.state.readIds.includes(id);
  }

  toggleFavorite(id: string): void {
    const favoriteIds = this.isFavorite(id) ? this.state.favoriteIds.filter((favoriteId) => favoriteId !== id) : [id, ...this.state.favoriteIds];
    this.stateSource.next({ ...this.state, favoriteIds });
    this.persist();
  }

  markRead(id: string): void {
    if (this.isRead(id)) return;
    this.stateSource.next({ ...this.state, readIds: [id, ...this.state.readIds] });
    this.persist();
  }

  private loadState(): ResourceState {
    if (typeof window === 'undefined') return { favoriteIds: [], readIds: [] };
    try {
      const stored = window.localStorage.getItem(this.storageKey);
      const parsed = stored ? JSON.parse(stored) as { favoriteIds: unknown[]; readIds: unknown[] } : null;
      return parsed && Array.isArray(parsed.favoriteIds) && Array.isArray(parsed.readIds)
        ? { favoriteIds: parsed.favoriteIds.filter((id): id is string => typeof id === 'string'), readIds: parsed.readIds.filter((id): id is string => typeof id === 'string') }
        : { favoriteIds: [], readIds: [] };
    } catch {
      return { favoriteIds: [], readIds: [] };
    }
  }

  private persist(): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }
}
