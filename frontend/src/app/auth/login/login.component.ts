import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CampusService } from '../../core/services/campus.service';
import { AuthService } from '../../core/services/auth.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  submitting = false;
  error = '';
  returnTo = '/student';

  constructor(
    private readonly authService: AuthService,
    private readonly campusService: CampusService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const returnTo = this.route.snapshot.queryParamMap.get('returnTo');
    if (returnTo?.startsWith('/') && !returnTo.startsWith('//')) {
      this.returnTo = returnTo;
    }
  }

  submit(): void {
    if (!this.email.trim() || !this.password) return;
    this.submitting = true;
    this.error = '';
    this.authService.login(this.email.trim(), this.password).subscribe({
      next: (user) => {
        this.submitting = false;
        const destination = user.roles.includes('student') && user.roles.length === 1 ? '/student' : user.roles.includes('guidance_staff') ? '/guidance' : user.roles.includes('admin') ? '/admin' : '/peer-counselor';
        this.router.navigate([this.returnTo || destination]);
      },
      error: () => {
        this.submitting = false;
        this.error = 'We could not sign you in. Check your details and try again.';
      }
    });
  }
}
