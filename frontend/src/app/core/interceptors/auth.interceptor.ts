import { HttpInterceptorFn } from '@angular/common/http';

const tokenKey = 'kca_access_token';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = sessionStorage.getItem(tokenKey);
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  return next(request.clone({
    setHeaders: headers,
    withCredentials: true
  }));
};

export function getStoredAccessToken(): string | null {
  return sessionStorage.getItem(tokenKey);
}

export function setStoredAccessToken(token: string | null): void {
  if (token) {
    sessionStorage.setItem(tokenKey, token);
  } else {
    sessionStorage.removeItem(tokenKey);
  }
}
