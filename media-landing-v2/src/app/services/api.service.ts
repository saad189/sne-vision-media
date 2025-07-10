import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, finalize } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';
import { ToastrNotificationService } from './toastr.service';
import { AUTH_TOKEN } from '../constants';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private toastr: ToastrNotificationService,
    private utilityService: UtilityService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    headers = headers.set('Content-Type', 'application/json');

    return headers;
  }

  private getAuthToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN);
  }

  get<T>(path: string): Observable<T> {
    this.loadingService.setLoading(true);
    return this.http
      .get<T>(`${this.apiUrl}/${path}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingService.setLoading(false))
      );
  }

  post<T>(path: string, body: any): Observable<T> {
    this.loadingService.setLoading(true);
    return this.http
      .post<T>(`${this.apiUrl}/${path}`, body, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingService.setLoading(false))
      );
  }

  put<T>(path: string, body: any): Observable<T> {
    this.loadingService.setLoading(true);
    return this.http
      .put<T>(`${this.apiUrl}/${path}`, body, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingService.setLoading(false))
      );
  }

  delete<T>(path: string): Observable<T> {
    this.loadingService.setLoading(true);
    return this.http
      .delete<T>(`${this.apiUrl}/${path}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingService.setLoading(false))
      );
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = 'Something bad happened; please try again later.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      console.error('An error occurred:', errorMessage);
    } else {
      if (error.error?.message) {
        errorMessage = error.error.message;
      }
      console.error(
        `Backend returned code ${error.status}, body was: ${JSON.stringify(
          error.error
        )}`
      );
    }

    this.toastr.showError('Error', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
