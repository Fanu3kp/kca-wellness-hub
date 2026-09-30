import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DatePipe, AsyncPipe } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';
import { WellnessService } from '../../core/services/wellness.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AppointmentOption } from '../../core/models/domain.model';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent, DatePipe, AsyncPipe],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit {
  options: AppointmentOption[] = [];
  mode = 'Physical';
  selectedOption: AppointmentOption | null = null;
  scheduledAt = '';
  notes = '';
  loading = false;
  loadingOptions = false;
  booked = false;
  error = '';
  successMessage = '';
  reportDate = new Date();

  constructor(
    readonly wellnessService: WellnessService,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    this.loadingOptions = true;
    const campusId = this.campusService.selectedCampus.id;
    this.wellnessService.loadAppointmentOptions().pipe(
      switchMap((providers) => {
        return this.wellnessService.loadPeerCounselors(campusId).pipe(
          map((peers) => [...providers, ...peers])
        );
      })
    ).subscribe({
      next: (allOptions) => { this.options = allOptions; this.loadingOptions = false; },
      error: () => { this.loadingOptions = false; }
    });
  }

  get startsAt(): string {
    return this.scheduledAt ? `${this.scheduledAt}:00` : '';
  }

  get endsAt(): string {
    if (!this.scheduledAt) return '';
    const [date, time] = this.scheduledAt.split('T');
    const [hours, minutes] = time.split(':');
    const end = new Date(date);
    end.setHours(parseInt(hours) + 1, parseInt(minutes), 0, 0);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}T${pad(end.getHours())}:${pad(end.getMinutes())}:00`;
  }

  get minDateTime(): string {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

  selectOption(option: AppointmentOption): void {
    this.selectedOption = option;
    this.booked = false;
    this.error = '';
    this.successMessage = '';
  }

  submitBooking(): void {
    if (!this.selectedOption || !this.scheduledAt) {
      this.error = 'Please select a counsellor, date and time.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.booked = false;

    const booking: { bookingProviderId?: string; peerCounselorId?: string; startsAt: string; endsAt: string; mode: 'physical' | 'virtual'; notes: string | undefined } = {
      startsAt: this.startsAt,
      endsAt: this.endsAt,
      mode: this.mode === 'Virtual' ? 'virtual' : 'physical',
      notes: this.notes.trim() || undefined,
    };

    if (this.selectedOption.isPeerCounselor && this.selectedOption.peerCounselorId) {
      booking.peerCounselorId = this.selectedOption.peerCounselorId;
    } else {
      booking.bookingProviderId = this.selectedOption.id;
    }

    this.wellnessService.bookAppointment(booking).subscribe({
      next: () => {
        this.loading = false;
        this.booked = true;
        if (this.selectedOption?.isPeerCounselor) {
          this.successMessage = `Your peer counselling session request has been sent to ${this.selectedOption.counsellor}. A confirmation email has been sent to your university email. Check your notifications for updates.`;
        } else {
          this.successMessage = `Appointment request sent to ${this.selectedOption?.counsellor}. A confirmation email has been sent to your university email. Check your notifications for updates.`;
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Your appointment could not be created. Please try again.';
      }
    });
  }

  openExternal(): void {
    if (this.selectedOption && !this.selectedOption.isPeerCounselor) {
      window.open(this.selectedOption.bookingUrl, '_blank', 'noopener,noreferrer');
    }
  }

  printReport(): void {
    this.reportDate = new Date();
    window.print();
  }
}
