import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomerToastrService {

  constructor(private toastr: ToastrService) { }
  ToastrMessageShow(message: string, titles: string, options: Required<CustomToastrOptions>) {
    this.toastr[options.messageType](message, titles, {
      positionClass: options.Position,
      timeOut: options.delay
    });
  }
}

export class CustomToastrOptions {
  messageType: CustomToastType = CustomToastType.Error;
  Position: CustomToastrPosition = CustomToastrPosition.ToastTopCenter;
  delay: number = 1000;
}
export enum CustomToastType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info'
}

export enum CustomToastrPosition {
  ToastTopRight = 'toast-top-right',
  ToastTopLeft = 'toast-top-left',
  ToastTopCenter = 'toast-top-center',
  ToastBottomRight = 'toast-bottom-right',
  ToastBottomLeft = 'toast-bottom-left',
  ToastBottomCenter = 'toast-bottom-center'
}
