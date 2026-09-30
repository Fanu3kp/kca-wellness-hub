import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { CampusService } from '../core/services/campus.service';
import { Campus } from '../core/models/domain.model';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';

@Component({
  selector: 'app-campus-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './campus-contact.component.html',
  styleUrl: './campus-contact.component.scss'
})
export class CampusContactComponent implements OnInit {
  campus: Campus | null = null;
  otherCampuses: Campus[] = [];
  fullName = '';
  contactEmail = '';
  subject = '';
  message = '';
  submitting = false;
  success = '';
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    readonly api: ApiService,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.parent?.data?.['campusSlug'] ?? this.route.snapshot.data?.['campusSlug'];
    if (slug) {
      this.campus = this.campusService.getCampusBySlug(slug as string) ?? this.campusService.selectedCampus;
    }
    if (!this.campus) {
      this.campus = this.campusService.selectedCampus;
    }
    this.otherCampuses = this.campusService.getCampuses().filter((c) => c.slug !== this.campus?.slug);
  }

  switchCampus(slug: string): void {
    this.router.navigate(['/' + slug + '/contact']);
  }

  get firstOtherCampus(): Campus | undefined {
    return this.otherCampuses[0];
  }

  submitContact(): void {
    if (!this.campus) return;
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
      subject: `[${this.campus.shortName}] ${this.subject.trim()}`,
      message: this.message.trim() || null,
      campus_id: this.campusService.getPersistableCampusId(this.campus)
    }).subscribe({
      next: (response) => {
        this.submitting = false;
        this.success = response.message;
        this.fullName = '';
        this.contactEmail = '';
        this.subject = '';
        this.message = '';
      },
      error: (errorResponse: any) => {
        this.submitting = false;
        this.error = errorResponse?.error?.message ?? 'We could not send your message. Please try again.';
      }
    });
  }
}
