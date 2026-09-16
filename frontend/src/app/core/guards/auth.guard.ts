import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(): Observable<boolean> {
    if (this.authService.currentUser) {
      return of(true);
    }
    return this.authService.loadCurrentUser().pipe(
      map((user) => {
        if (user) return true;
        this.router.navigate(['/login'], { queryParams: { returnTo: this.router.url } });
        return false;
      })
    );
  }
}
