import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { User, UserRole } from '../models/domain.model';
import { ApiService } from './api.service';
import { CampusService } from './campus.service';
import { getStoredAccessToken, setStoredAccessToken } from '../interceptors/auth.interceptor';

interface AuthResponse {
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      roles: UserRole[];
      is_active: boolean;
      email_verified_at?: string | null;
    };
    profile?: {
      campus_id?: number | string | null;
      student_number?: string | null;
      phone?: string | null;
      gender?: string | null;
      bio?: string | null;
      preferences?: Record<string, unknown>;
    } | null;
    token: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentUserSource = new BehaviorSubject<User | null>(null);
  readonly currentUser$ = this.currentUserSource.asObservable();

  constructor(private readonly api: ApiService, private readonly campusService: CampusService) {
    if (getStoredAccessToken()) {
      this.loadCurrentUser().subscribe();
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.api.post<AuthResponse>('/login', { email, password }).pipe(
      tap((response) => this.applySession(response)),
      map((response) => this.toUser(response.data.user, response.data.profile))
    );
  }

  register(name: string, email: string, password: string, passwordConfirmation: string, campusId: string): Observable<User> {
    return this.api.post<AuthResponse>('/register', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      campus_id: campusId
    }).pipe(
      tap((response) => this.applySession(response)),
      map((response) => this.toUser(response.data.user, response.data.profile))
    );
  }

  logout(): Observable<void> {
    const request = getStoredAccessToken()
      ? this.api.post<void>('/logout', {}).pipe(catchError(() => of(undefined)))
      : of(undefined);

    return request.pipe(tap(() => this.clearSession()));
  }

  loadCurrentUser(): Observable<User | null> {
    return this.api.get<AuthResponse>('/user').pipe(
      map((response) => {
        const user = this.toUser(response.data.user, response.data.profile);
        this.currentUserSource.next(user);
        return user;
      }),
      catchError(() => {
        this.clearSession();
        return of(null);
      })
    );
  }

  get currentUser(): User | null {
    return this.currentUserSource.value;
  }

  isAuthenticated(): boolean {
    return Boolean(getStoredAccessToken() && this.currentUser);
  }

  hasRole(role: UserRole): boolean {
    return this.currentUser?.roles.includes(role) ?? false;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    return roles.some((role) => this.hasRole(role));
  }

  get primaryRole(): UserRole {
    const roles = this.currentUser?.roles ?? [];
    if (roles.includes('admin')) return 'admin';
    if (roles.includes('guidance_staff')) return 'guidance_staff';
    if (roles.includes('peer_counselor')) return 'peer_counselor';
    return 'student';
  }

  isStudentOnly(): boolean {
    return this.currentUser?.roles.length === 1 && this.currentUser?.roles[0] === 'student';
  }

  canAccessConfidential(): boolean {
    return this.hasAnyRole(['guidance_staff', 'admin']);
  }

  canEscalate(): boolean {
    return this.hasAnyRole(['peer_counselor', 'guidance_staff', 'admin']);
  }

  private applySession(response: AuthResponse): void {
    setStoredAccessToken(response.data.token);
    this.currentUserSource.next(this.toUser(response.data.user, response.data.profile));
  }

  private toUser(payload: AuthResponse['data']['user'], profile: AuthResponse['data']['profile']): User {
    const titles: Record<UserRole, string | undefined> = {
      student: undefined,
      peer_counselor: 'Student Peer Counselor',
      guidance_staff: 'Guidance & Counselling Staff',
      admin: 'System Administrator'
    };
    const campus = this.campusService.getCampus(String(profile?.campus_id ?? this.campusService.selectedCampus.id))
      ?? this.campusService.selectedCampus;

    return {
      id: String(payload.id),
      name: payload.name,
      email: payload.email,
      roles: payload.roles,
      campusId: campus.id,
      title: titles[this.primaryRole],
      trained: payload.roles.includes('peer_counselor'),
      availability: payload.roles.includes('peer_counselor') ? 'available' : undefined,
      isActive: payload.is_active
    };
  }

  private clearSession(): void {
    setStoredAccessToken(null);
    this.currentUserSource.next(null);
  }
}
