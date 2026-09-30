import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../core/services/campus.service';
import { WellnessService } from '../core/services/wellness.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Campus, EventItem } from '../core/models/domain.model';

@Component({
  selector: 'app-campus-events',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent, LoadingComponent],
  templateUrl: './campus-events.component.html',
  styleUrl: './campus-events.component.scss'
})
export class CampusEventsComponent implements OnInit {
  campusId: string | null = null;
  campus: Campus | null = null;
  events: EventItem[] = [];
  activeFilter: 'all' | 'upcoming' | 'past' = 'all';
  loading = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService
  ) {}

  ngOnInit(): void {
    const campusSlug = this.route.snapshot.parent?.data?.['campusSlug'];
    if (campusSlug) {
      const campus = this.campusService.getCampusBySlug(campusSlug as string);
      if (campus) {
        this.campusId = campus.id;
        this.campus = campus;
      }
    } else {
      this.campusId = this.route.snapshot.params['campusId'] ?? this.campusService.selectedCampus.id;
      this.campus = this.campusService.getCampus(this.campusId ?? '') ?? this.campusService.selectedCampus;
    }
    if (!this.campus) {
      this.campus = this.campusService.selectedCampus;
    }
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadEvents(this.campusId ?? undefined).subscribe({
      next: (events) => {
        this.events = events;
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Events could not be loaded.'; }
    });
  }

  get filteredEvents(): EventItem[] {
    if (this.activeFilter === 'upcoming') return this.events.filter((event) => event.type === 'Upcoming');
    if (this.activeFilter === 'past') return this.events.filter((event) => event.type === 'Past');
    return this.events;
  }

  setFilter(filter: 'all' | 'upcoming' | 'past'): void {
    this.activeFilter = filter;
  }
}
