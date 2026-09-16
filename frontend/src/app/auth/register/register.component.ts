import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CampusService } from '../../core/services/campus.service';
import { AuthService } from '../../core/services/auth.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';
  campusId = String(this.campusService.selectedCampus.id);
  submitting = false;
  error = '';
  campuses = this.campusService.getCampuses();

  constructor(private readonly authService: AuthService, private readonly campusService: CampusService, private readonly router: Router) {}

  submit(): void {
    if (!this.name.trim() || !this.email.trim() || !this.password || this.password !== this.passwordConfirmation) return;
    this.submitting = true;
    this.error = '';
    this.authService.register(this.name, this.email, this.password, this.passwordConfirmation, this.campusId).subscribe({
      next: (user) => {
        this.submitting = false;
        const destination = user.roles.includes('student') && user.roles.length === 1 ? '/student' : user.roles.includes('guidance_staff') ? '/guidance' : user.roles.includes('admin') ? '/admin' : '/peer-counselor';
        this.router.navigate([destination]);
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
