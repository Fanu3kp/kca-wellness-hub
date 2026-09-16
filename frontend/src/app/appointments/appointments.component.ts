import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WellnessService } from '../core/services/wellness.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AppointmentOption } from '../core/models/domain.model';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit {
  options: AppointmentOption[] = [];
  mode = 'Physical';
  loading = false;
  error = '';

  constructor(readonly wellnessService: WellnessService) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadAppointmentOptions().subscribe({
      next: (options) => {
        this.options = options;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Booking options are temporarily unavailable.';
      }
    });
  }

  openBooking(option: AppointmentOption): void {
    window.open(option.bookingUrl, '_blank', 'noopener,noreferrer');
  }
}
