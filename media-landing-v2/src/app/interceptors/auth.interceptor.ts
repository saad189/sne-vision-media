import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants';
import { UtilityService } from '../services/utility.service';
import { AuthTokens } from '../models';
import { environment } from '../environments/environment';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

function addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
  return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}

function handleTokenRefresh(
  request: HttpRequest<any>,
  next: HttpHandlerFn,
  utilityService: UtilityService
): Observable<HttpEvent<any>> {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    const currentToken = localStorage.getItem(AUTH_TOKEN);
    const decodedToken = utilityService.decodeJwtToken(currentToken!);
    const email = decodedToken.email;

    return from(
      fetch(`${environment.apiUrl}/auth/refresh-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, refreshToken }),
      })
        .then((response) => response.json())
        .then((tokens: AuthTokens) => {
          isRefreshing = false;
          localStorage.setItem(AUTH_TOKEN, tokens.accessToken);
          refreshTokenSubject.next(tokens.accessToken);
          return tokens.accessToken;
        })
    ).pipe(
      switchMap((token) => next(addToken(request, token))),
      catchError((err) => {
        isRefreshing = false;
        localStorage.clear();
        return throwError(() => err);
      })
    );
  }

  return refreshTokenSubject.pipe(
    filter((token) => token !== null),
    take(1),
    switchMap((token) => next(addToken(request, token!)))
  );
}

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const utilityService = inject(UtilityService);
  const accessToken = localStorage.getItem(AUTH_TOKEN);

  if (accessToken) {
    const decodedToken = utilityService.decodeJwtToken(accessToken);

    if (utilityService.isTimeNearExpiry(decodedToken.exp)) {
      return handleTokenRefresh(request, next, utilityService);
    }

    request = addToken(request, accessToken);
  }

  return next(request).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return handleTokenRefresh(request, next, utilityService);
      }
      return throwError(() => error);
    })
  );
};
