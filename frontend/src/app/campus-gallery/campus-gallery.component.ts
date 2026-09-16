import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CampusService } from '../core/services/campus.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { Campus } from '../core/models/domain.model';

@Component({
  selector: 'app-campus-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './campus-gallery.component.html',
  styleUrl: './campus-gallery.component.scss'
})
export class CampusGalleryComponent implements OnInit {
  campusId: string | null = null;
  campus: Campus | null = null;

  galleryItems = [
    { icon: 'users', title: 'Community', description: 'Students connecting and supporting each other' },
    { icon: 'heart', title: 'Wellness', description: 'Mental health awareness activities' },
    { icon: 'sparkles', title: 'Mindfulness', description: 'Quiet spaces and breathing exercises' },
    { icon: 'book', title: 'Resources', description: 'Wellness library and study materials' },
    { icon: 'calendar', title: 'Events', description: 'Campus wellness activities and workshops' },
    { icon: 'shield', title: 'Safety', description: 'Safe spaces and emergency support' }
  ];

  constructor(private readonly route: ActivatedRoute, readonly campusService: CampusService) {}

  ngOnInit(): void {
    this.campusId = this.route.snapshot.params['campusId'] ?? this.campusService.selectedCampus.id;
    this.campus = this.campusService.getCampus(this.campusId ?? '') ?? this.campusService.selectedCampus;
  }
}
