import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, AlertComponent],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent implements OnInit {
  email = '';
  code = '';
  submitting = false;
  resending = false;
  error = '';
  info = '';

  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const paramEmail = this.route.snapshot.queryParamMap.get('email');
    if (paramEmail) {
      this.email = paramEmail;
    }
  }

  submit(): void {
    if (!this.email.trim() || this.code.trim().length !== 6) return;
    this.submitting = true;
    this.error = '';
    this.authService.verifyCode(this.email.trim(), this.code.trim()).subscribe({
      next: (user) => {
        this.submitting = false;
        this.router.navigate([this.authService.homePathFor(user)]);
      },
      error: () => {
        this.submitting = false;
        this.error = 'That code did not match. Please check and try again.';
      }
    });
  }

  resend(): void {
    if (!this.email.trim()) return;
    this.resending = true;
    this.info = '';
    this.error = '';
    this.authService.resendVerificationCode(this.email.trim()).subscribe({
      next: () => {
        this.resending = false;
        this.info = 'A new verification code has been sent to your email.';
      },
      error: () => {
        this.resending = false;
        this.error = 'Could not send the code. Please try again.';
      }
    });
  }
}
