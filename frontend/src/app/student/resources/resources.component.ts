import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { WellnessService } from '../../core/services/wellness.service';
import { ResourceStateService } from '../../core/services/resource-state.service';
import { WellnessResource } from '../../core/models/domain.model';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent implements OnInit {
  resources: WellnessResource[] = [];
  filteredResources: WellnessResource[] = [];
  categories = ['All', 'Favorites', 'Mental wellness', 'Academic wellbeing', 'Stress management', 'Relationships', 'Career', 'Financial wellbeing', 'Sleep', 'Personal development', 'Peer counselling', 'Professional counselling'];
  category = 'All';
  search = '';
  loading = false;
  error = '';

  resourceId: string | null = null;
  selectedResource: WellnessResource | null = null;

  constructor(
    readonly wellnessService: WellnessService,
    readonly resourceState: ResourceStateService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.resourceId = this.route.snapshot.params['resourceId'] ?? null;
    if (this.resourceId) {
      this.selectedResource = this.wellnessService.resources.find((r) => r.id === this.resourceId) ?? null;
    }
    this.loadResources();
  }

  loadResources(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadResources().subscribe({
      next: (resources) => {
        this.resources = resources;
        this.categories = ['All', 'Favorites', ...Array.from(new Set(resources.map((resource) => resource.category)))];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'The resource library is temporarily unavailable.';
      }
    });
  }

  applyFilters(): void {
    const query = this.search.trim().toLowerCase();
    this.filteredResources = this.resources.filter((resource) => {
      const matchesCategory = this.category === 'All' || (this.category === 'Favorites' ? this.resourceState.isFavorite(resource.id) : resource.category === this.category);
      const matchesQuery = !query || `${resource.title} ${resource.summary}`.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }

  iconFor(resource: WellnessResource): string {
    return this.formatIcon(resource);
  }

  formatIcon(resource: WellnessResource): string {
    return resource.format === 'video' ? 'video' : resource.format === 'audio' ? 'audio' : 'book';
  }

  toggleFavorite(resource: WellnessResource): void {
    this.resourceState.toggleFavorite(resource.id);
  }

  isFavorite(resource: WellnessResource): boolean {
    return this.resourceState.isFavorite(resource.id);
  }

  isRead(resource: WellnessResource): boolean {
    return this.resourceState.isRead(resource.id);
  }
}
