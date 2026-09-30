import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-guidance-register',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, AlertComponent],
  templateUrl: './guidance-register.component.html',
  styleUrl: './guidance-register.component.scss'
})
export class GuidanceRegisterComponent {
  staffNumber = '';
  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';
  campusId = String(this.campusService.selectedCampus.id);
  isAdmin = false;
  submitting = false;
  error = '';
  campuses = this.campusService.getCampuses();
  private campusesSubscription?: Subscription;
  private selectedCampusSubscription?: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly campusService: CampusService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const campusSlug = this.route.snapshot.parent?.data?.['campusSlug'];
    if (campusSlug) {
      this.campusService.selectCampusBySlug(campusSlug as string);
    }
    this.campusesSubscription = this.campusService.campuses$.subscribe((campuses) => {
      this.campuses = campuses;
    });
    this.selectedCampusSubscription = this.campusService.selectedCampus$.subscribe((campus) => {
      this.campusId = campus.id;
    });
  }

  ngOnDestroy(): void {
    this.campusesSubscription?.unsubscribe();
    this.selectedCampusSubscription?.unsubscribe();
  }

  submit(): void {
    if (!this.staffNumber.trim() || !this.name.trim() || !this.email.trim() || !this.password || this.password !== this.passwordConfirmation) return;
    this.submitting = true;
    this.error = '';
    const campusId = this.campusService.getPersistableCampusId(this.campusService.selectedCampus);
    this.authService.registerStaff(
      this.name.trim(),
      this.email.trim(),
      this.password,
      this.passwordConfirmation,
      campusId ? String(campusId) : null,
      this.isAdmin,
      this.staffNumber.trim().toUpperCase()
    ).subscribe({
      next: (user) => {
        this.submitting = false;
        this.router.navigate(['/guidance/login']);
      },
      error: (response: HttpErrorResponse) => {
        this.submitting = false;
        this.error = this.getErrorMessage(response);
      }
    });
  }

  onCampusChange(id: string): void {
    const campus = this.campusService.getCampus(id);
    if (campus) this.campusService.selectCampus(campus);
  }

  private getErrorMessage(response: HttpErrorResponse): string {
    const errors = response.error?.errors;
    if (errors && typeof errors === 'object') {
      return Object.values(errors).flat().join(' ');
    }
    return response.error?.message ?? 'We could not create your account. Check the details and try again.';
  }
}
