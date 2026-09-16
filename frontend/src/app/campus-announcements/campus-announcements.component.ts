import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CampusService } from '../core/services/campus.service';
import { WellnessService } from '../core/services/wellness.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Campus } from '../core/models/domain.model';

@Component({
  selector: 'app-campus-announcements',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent],
  templateUrl: './campus-announcements.component.html',
  styleUrl: './campus-announcements.component.scss'
})
export class CampusAnnouncementsComponent implements OnInit {
  campusId: string | null = null;
  campus: Campus | null = null;
  loading = false;
  error = '';
  allAnnouncements = [
    { title: 'Wellness Week starts Monday', campus: 'Ruaraka Main', date: 'Sep 18', message: 'Join us for a week of wellness activities across all campuses.' },
    { title: 'New counseling hours', campus: 'Town', date: 'Sep 15', message: 'Extended hours for Term 2. Monday to Friday, 9:00–17:00 EAT.' },
    { title: 'Peer counselor training', campus: 'Kitengela', date: 'Sep 12', message: 'New cohort of peer counselors has completed training.' },
    { title: 'Mental health awareness day', campus: 'Ruaraka Main', date: 'Sep 20', message: 'Annual mental health awareness event. All students welcome.' },
    { title: 'Resource library updated', campus: 'Town', date: 'Sep 10', message: 'New resources on academic pressure and sleep hygiene added.' },
    { title: 'Campus wellness walk', campus: 'Kitengela', date: 'Sep 22', message: 'Guided wellness walk through Kitengela scenic trails.' }
  ];

  get announcements() {
    if (!this.campus) return this.allAnnouncements;
    return this.allAnnouncements.filter((a) => a.campus.toLowerCase() === this.campus!.name.toLowerCase());
  };

  constructor(
    private readonly route: ActivatedRoute,
    readonly campusService: CampusService,
    readonly wellnessService: WellnessService
  ) {}

  ngOnInit(): void {
    this.campusId = this.route.snapshot.params['campusId'] ?? this.campusService.selectedCampus.id;
    this.campus = this.campusService.getCampus(this.campusId ?? '') ?? this.campusService.selectedCampus;
  }
}
