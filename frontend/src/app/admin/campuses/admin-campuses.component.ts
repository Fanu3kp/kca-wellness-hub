import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { Campus } from '../../core/models/domain.model';

@Component({
  selector: 'app-admin-campuses',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, ButtonComponent, LoadingComponent],
  templateUrl: './admin-campuses.component.html',
  styleUrl: './admin-campuses.component.scss'
})
export class AdminCampusesComponent implements OnInit {
  campuses: Campus[] = [];
  loading = false;
  error = '';
  showAddForm = false;
  newCampusName = '';
  newCampusCode = '';

  constructor(
    readonly campusService: CampusService,
  ) {}

  ngOnInit(): void { this.loadCampuses(); }

  loadCampuses(): void {
    this.loading = true;
    this.error = '';
    this.campuses = this.campusService.getCampuses();
    this.loading = false;
  }

  addCampus(): void {
    if (!this.newCampusName.trim() || !this.newCampusCode.trim()) return;
    this.campuses.push({
      id: String(Date.now()),
      slug: this.newCampusCode.toLowerCase().replace(/\s+/g, '-') as 'ruaraka-main' | 'town' | 'kitengela',
      name: this.newCampusName.trim(),
      shortName: this.newCampusName.trim().replace(/ Campus$/i, ''),
      location: 'TBD',
      description: `${this.newCampusName.trim()} student wellbeing and support hub.`,
      phone: '+254 711 814 000',
      email: 'wellness@kca.ac.ke',
      timezone: 'Africa/Nairobi',
      physicalSupport: true,
      virtualSupport: true,
      accent: 'teal'
    });
    this.newCampusName = '';
    this.newCampusCode = '';
    this.showAddForm = false;
  }
}
