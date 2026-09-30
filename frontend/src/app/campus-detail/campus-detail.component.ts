import { Component, OnInit } from '@angular/core';
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
  selector: 'app-campus-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent],
  templateUrl: './campus-detail.component.html',
  styleUrl: './campus-detail.component.scss'
})
export class CampusDetailComponent implements OnInit {
  campus: Campus | null = null;
  campusId: string | null = null;
  events: EventItem[] = [];
  loading = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService
  ) {}

  ngOnInit(): void {
    this.campusId = this.route.snapshot.params['campusId'] ?? this.campusService.selectedCampus.id;
    this.loadCampus();
    this.loadCampusData();
  }

  loadCampus(): void {
    this.campus = this.campusService.getCampus(this.campusId ?? '') ?? this.campusService.selectedCampus;
  }

  loadCampusData(): void {
    this.loading = true;
    this.wellnessService.loadEvents(this.campusId ?? undefined).subscribe({
      next: (events) => {
        this.events = events;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get supportLabel(): string {
    if (!this.campus) return '';
    return this.campusService.getCampusSupportLabel(this.campus);
  }
}
