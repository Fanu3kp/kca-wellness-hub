import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, AlertComponent],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent implements OnInit {
  email = '';
  password = '';
  submitting = false;
  error = '';
  campusId = this.campusService.selectedCampus.id;
  campusSelectOpen = false;
  returnTo = '/student';

  constructor(
    private readonly authService: AuthService,
    readonly campusService: CampusService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const returnTo = this.route.snapshot.queryParamMap.get('returnTo');
    if (returnTo?.startsWith('/') && !returnTo.startsWith('//')) {
      this.returnTo = returnTo;
    }
    const campusSlug = this.route.snapshot.parent?.data?.['campusSlug'];
    if (campusSlug) {
      this.campusService.selectCampusBySlug(campusSlug as string);
    }
    this.campusService.selectedCampus$.subscribe((campus) => {
      this.campusId = campus.id;
    });
  }

  submit(): void {
    if (!this.email.trim() || !this.password) return;
    this.submitting = true;
    this.error = '';
    const persistableId = this.campusService.getPersistableCampusId(this.campusService.selectedCampus);
    this.authService.login(this.email.trim(), this.password, persistableId ? String(persistableId) : null).subscribe({
      next: (user) => {
        this.submitting = false;
        this.router.navigate([this.returnTo || this.authService.homePathFor(user)]);
      },
      error: (response: any) => {
        this.submitting = false;
        const status = response?.status;
        if (status === 403 && response?.error?.message?.includes('campus')) {
          this.error = response.error.message;
        } else if (status === 401) {
          this.error = 'Invalid email or password. Please check your details.';
        } else {
          this.error = 'We could not sign you in. Please try again.';
        }
      }
    });
  }

  selectCampus(id: string): void {
    const campus = this.campusService.getCampus(id);
    if (campus) {
      this.campusService.selectCampus(campus);
      this.campusId = campus.id;
      this.campusSelectOpen = false;
    }
  }
}
