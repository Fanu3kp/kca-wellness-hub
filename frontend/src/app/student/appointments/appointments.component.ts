import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WellnessService } from '../../core/services/wellness.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  options = this.wellnessService.appointmentOptions;
  mode = 'Physical';
  selectedOption: typeof this.options[number] | null = null;
  scheduledAt = '';
  notes = '';
  loading = false;
  booked = false;
  error = '';
  successMessage = '';

  constructor(readonly wellnessService: WellnessService) {}

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

  selectOption(option: typeof this.options[number]): void {
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
    this.wellnessService.bookAppointment({
      bookingProviderId: this.selectedOption.id,
      startsAt: this.startsAt,
      endsAt: this.endsAt,
      notes: this.notes.trim() || undefined
    }).subscribe({
      next: () => {
        this.loading = false;
        this.booked = true;
        this.successMessage = `Appointment request sent to ${this.selectedOption?.counsellor}. A confirmation email has been sent to your university email. Check your notifications for updates.`;
      },
      error: () => {
        this.loading = false;
        this.error = 'Your appointment could not be created. Please try again.';
      }
    });
  }

  openExternal(): void {
    if (this.selectedOption) {
      window.open(this.selectedOption.bookingUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
