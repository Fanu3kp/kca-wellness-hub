import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { WellnessService } from '../../core/services/wellness.service';
import { ResourceStateService } from '../../core/services/resource-state.service';
import { WellnessResource } from '../../core/models/domain.model';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, EmptyStateComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  resources: WellnessResource[] = [];
  readonly favoriteIds$ = this.resourceState.favoriteIds$;
  readonly readIds$ = this.resourceState.readIds$;
  loading = false;
  error = '';

  constructor(
    readonly wellnessService: WellnessService,
    readonly resourceState: ResourceStateService
  ) {}

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadResources().subscribe({
      next: (resources) => { this.resources = resources; this.loading = false; },
      error: () => { this.loading = false; this.error = 'Your reading list is temporarily unavailable.'; }
    });
  }

  get favorites(): WellnessResource[] {
    const favoriteIds = new Set(this.resourceState.state.favoriteIds);
    return this.resources.filter((resource) => favoriteIds.has(resource.id));
  }

  get readCount(): number {
    return this.favorites.filter((resource) => this.resourceState.isRead(resource.id)).length;
  }

  toggleFavorite(resource: WellnessResource): void {
    this.resourceState.toggleFavorite(resource.id);
  }

  markRead(resource: WellnessResource): void {
    this.resourceState.markRead(resource.id);
  }

  formatIcon(resource: WellnessResource): string {
    return resource.format === 'video' ? 'video' : resource.format === 'audio' ? 'audio' : 'book';
  }
}
