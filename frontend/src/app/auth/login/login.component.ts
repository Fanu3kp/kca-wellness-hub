import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampusService } from '../../core/services/campus.service';
import { AuthService } from '../../core/services/auth.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, UiIconComponent, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  submitting = false;
  error = '';
  returnTo = '/student';
  campusId = this.campusService.selectedCampus.id;
  campusSelectOpen = false;

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
        } else {
          this.error = 'We could not sign you in. Check your details and try again.';
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
