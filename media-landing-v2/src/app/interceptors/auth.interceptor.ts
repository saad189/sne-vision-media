import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants';
import { UtilityService } from '../services/utility.service';
import { AuthTokens } from '../models';
import { environment } from '../environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);

  constructor(private utilityService: UtilityService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(AUTH_TOKEN);

    if (accessToken) {
      const decodedToken = this.utilityService.decodeJwtToken(accessToken);

      if (this.utilityService.isTimeNearExpiry(decodedToken.exp)) {
        return this.handleTokenRefresh(request, next);
      }

      request = this.addToken(request, accessToken);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handleTokenRefresh(request, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleTokenRefresh(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (!refreshToken) {
        return throwError(() => new Error('No refresh token available'));
      }

      const currentToken = localStorage.getItem(AUTH_TOKEN);
      const decodedToken = this.utilityService.decodeJwtToken(currentToken!);
      const email = decodedToken.email;

      return from(
        fetch(`${environment.apiUrl}/auth/refresh-token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, refreshToken }),
        })
          .then((response) => response.json())
          .then((tokens: AuthTokens) => {
            this.isRefreshing = false;
            localStorage.setItem(AUTH_TOKEN, tokens.accessToken);
            this.refreshTokenSubject.next(tokens.accessToken);
            return tokens.accessToken;
          })
      ).pipe(
        switchMap((token) => {
          return next.handle(this.addToken(request, token));
        }),
        catchError((err) => {
          console.log('Error happened');
          this.isRefreshing = false;
          localStorage.clear();
          return throwError(() => err);
        })
      );
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addToken(request, token!)))
    );
  }
}
