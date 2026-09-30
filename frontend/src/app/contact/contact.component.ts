import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { CampusService } from '../core/services/campus.service';
import { Campus } from '../core/models/domain.model';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';

interface MapMarker {
  campus: Campus;
  x: number;
  y: number;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly campuses = this.campusService.getCampuses();
  readonly markers: MapMarker[] = [
    { campus: this.getCampus('ruaraka-main'), x: 65, y: 28 },
    { campus: this.getCampus('town'), x: 48, y: 49 },
    { campus: this.getCampus('kitengela'), x: 39, y: 78 }
  ];
  fullName = '';
  contactEmail = '';
  subject = '';
  message = '';
  submitting = false;
  success = '';
  error = '';

  constructor(
    readonly api: ApiService,
    readonly campusService: CampusService
  ) {}

  get selectedCampus(): Campus {
    return this.campusService.selectedCampus;
  }

  selectCampus(campus: Campus): void {
    this.campusService.selectCampus(campus);
  }

  submitContact(): void {
    this.success = '';
    this.error = '';
    if (!this.fullName.trim() || !this.contactEmail.trim() || !this.subject.trim()) {
      this.error = 'Enter your name, contact email and subject before submitting.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contactEmail.trim())) {
      this.error = 'Enter a valid contact email.';
      return;
    }

    this.submitting = true;
    this.api.post<{ message: string }>('/contact', {
      name: this.fullName.trim(),
      email: this.contactEmail.trim(),
      subject: this.subject.trim(),
      message: this.message.trim() || null,
      campus_id: this.campusService.getPersistableCampusId(this.selectedCampus)
    }).subscribe({
      next: (response) => {
        this.submitting = false;
        this.success = response.message;
        this.fullName = '';
        this.contactEmail = '';
        this.subject = '';
        this.message = '';
      },
      error: (error) => {
        this.submitting = false;
        this.error = error?.error?.message ?? 'We could not send your message. Please try again.';
      }
    });
  }

  private getCampus(slug: Campus['slug']): Campus {
    return this.campusService.getCampusBySlug(slug) ?? this.campuses[0];
  }
}
