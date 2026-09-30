import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { User } from '../models/domain.model';
import type { UserRole } from '../models/domain.model';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const roles = (route.data?.['roles'] ?? []) as UserRole[];
    if (this.authService.currentUser && this.authService.hasAnyRole(roles)) {
      return of(true);
    }
    return this.authService.loadCurrentUser().pipe(
      map((user) => {
        if (user && this.authService.hasAnyRole(roles)) return true;
        const destination = user ? this.authService.homePathFor(user) : '/landing';
        this.router.navigate([destination]);
        return false;
      })
    );
  }
}
