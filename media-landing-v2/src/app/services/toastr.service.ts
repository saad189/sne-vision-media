import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastrNotificationService {
  constructor(private toastr: ToastrService) {}
  private defaultOptions = {
    timeOut: 3000,
    progressBar: true,
    closeButton: false,
    positionClass: 'toast-bottom-right',
  };
  private defaultErrorOptions = {
    ...this.defaultOptions,
    timeOut: 5000,
  };

  private defaultSuccessOptions = {
    ...this.defaultOptions,
    timeOut: 2000,
  };

  private defaultInfoOptions = {
    ...this.defaultOptions,
    timeOut: 4000,
  };

  private defaultWarningOptions = {
    ...this.defaultOptions,
    timeOut: 6000,
  };

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title, this.defaultSuccessOptions);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title, this.defaultErrorOptions);
  }

  showInfo(title: string, message: string) {
    this.toastr.info(message, title, this.defaultInfoOptions);
  }

  showWarning(title: string, message: string) {
    this.toastr.warning(message, title, this.defaultWarningOptions);
  }
}
