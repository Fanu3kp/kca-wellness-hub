import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { Campus } from '../../core/models/domain.model';

@Component({
  selector: 'app-peer-counselors',
  standalone: true,
  imports: [FormsModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './peer-counselors.component.html',
  styleUrl: './peer-counselors.component.scss'
})
export class PeerCounselorsComponent implements OnInit {
  campusId: string | null = null;
  campus: Campus | null = null;
  search = '';
  supportArea = 'All';
  supportAreas = ['All', 'Academic pressure', 'Relationships', 'Adjustment', 'Friendship', 'General wellbeing'];
  counselors = [
    { id: 'p1', name: 'Amina Mohamed', campus: 'Ruaraka Main', areas: ['Academic pressure', 'Adjustment'], available: true, virtual: true, initials: 'AM', bio: 'Second-year psychology student with 2 years of peer support training. Focused on academic stress and adjustment issues.', languages: ['English', 'Swahili'] },
    { id: 'p2', name: 'Brian Otieno', campus: 'Town', areas: ['Friendship', 'General wellbeing'], available: true, virtual: true, initials: 'BO', bio: 'Third-year student trained in active listening and conflict resolution. Available evenings and weekends.', languages: ['English', 'Luo'] },
    { id: 'p3', name: 'Faith Wanjiku', campus: 'Kitengela', areas: ['Relationships', 'General wellbeing'], available: false, virtual: true, initials: 'FW', bio: 'Campus wellness ambassador with training in peer counselling and boundary setting.', languages: ['English', 'Kikuyu'] },
    { id: 'p4', name: 'Kevin Mwangi', campus: 'Ruaraka Main', areas: ['Academic pressure', 'Friendship'], available: true, virtual: false, initials: 'KM', bio: 'Engineering student with peer support certification. Specializes in study stress and friendship dynamics.', languages: ['English', 'Swahili'] }
  ];
  selectedCounselor: typeof this.counselors[number] | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    this.campusId = this.route.snapshot.params['campusId'] ?? this.campusService.selectedCampus.id;
    this.campus = this.campusService.getCampus(this.campusId ?? '') ?? this.campusService.selectedCampus;
  }

  get filteredCounselors() {
    const query = this.search.toLowerCase();
    return this.counselors.filter((counselor) => {
      const matchesSearch = !query || `${counselor.name} ${counselor.campus} ${counselor.areas.join(' ')}`.toLowerCase().includes(query);
      const matchesArea = this.supportArea === 'All' || counselor.areas.includes(this.supportArea);
      const matchesCampus = !this.campus || counselor.campus.toLowerCase() === this.campus.name.toLowerCase();
      return matchesSearch && matchesArea && matchesCampus;
    });
  }

  viewProfile(counselor: typeof this.counselors[number]): void {
    this.selectedCounselor = this.selectedCounselor?.id === counselor.id ? null : counselor;
  }
}
