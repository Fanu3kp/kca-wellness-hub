import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { WellnessService } from '../core/services/wellness.service';
import { CampusService } from '../core/services/campus.service';
import { Campus, EventItem } from '../core/models/domain.model';

type EventFilter = 'all' | 'ruaraka' | 'town' | 'kitengela' | 'virtual';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: EventItem[] = [];
  activeFilter: EventFilter = 'all';
  loading = false;
  error = '';

  constructor(
    readonly wellnessService: WellnessService,
    readonly campusService: CampusService
  ) {}

  get campuses(): Campus[] {
    return this.campusService.getCampuses();
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Events are temporarily unavailable.';
      }
    });
  }

  get filteredEvents(): EventItem[] {
    if (this.activeFilter === 'virtual') {
      return this.events.filter((event) => event.mode === 'virtual');
    }
    if (this.activeFilter === 'all') {
      return this.events;
    }
    const campus = this.campuses.find((item) => item.slug === this.activeFilter);
    return campus ? this.events.filter((event) => event.campusId === campus.id) : this.events;
  }

  setFilter(filter: EventFilter): void {
    this.activeFilter = filter;
  }

  campusRoute(event: EventItem): string[] {
    return event.campusId ? ['/campuses', event.campusId] : ['/events'];
  }

  supportLabel(campus: Campus): string {
    return this.campusService.getCampusSupportLabel(campus);
  }
}
