import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Campus, EventItem, AppointmentOption } from '../core/models/domain.model';
import { CampusService } from '../core/services/campus.service';
import { WellnessService } from '../core/services/wellness.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-campus-home',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './campus-home.component.html',
  styleUrl: './campus-home.component.scss'
})
export class CampusHomeComponent implements OnInit {
  campus: Campus | null = null;
  events: EventItem[] = [];
  peerCounselors: AppointmentOption[] = [];
  loading = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.parent?.data?.['campusSlug'] ?? this.route.snapshot.data?.['campusSlug'];
    if (slug) {
      this.campus = this.campusService.getCampusBySlug(slug as string) ?? this.campusService.selectedCampus;
    }
    if (!this.campus) {
      this.campus = this.campusService.selectedCampus;
    }
    this.loadCampusData();
  }

  loadCampusData(): void {
    if (!this.campus) return;
    this.loading = true;
    this.wellnessService.loadEvents(this.campus.id).subscribe({
      next: (events) => { this.events = events; },
      error: () => {}
    });
    this.wellnessService.loadPeerCounselors(this.campus.id).subscribe({
      next: (counselors) => { this.peerCounselors = counselors; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get supportLabel(): string {
    if (!this.campus) return '';
    return this.campusService.getCampusSupportLabel(this.campus);
  }

  get stats(): Array<{ label: string; value: string }> {
    if (!this.campus) return [];
    return [
      { label: 'Peer Counselors', value: String(this.peerCounselors.length) },
      { label: 'Upcoming Events', value: String(this.events.filter((e) => e.type === 'Upcoming').length) },
      { label: 'Support Paths', value: String(this.wellnessService.pathways.length) }
    ];
  }
}
