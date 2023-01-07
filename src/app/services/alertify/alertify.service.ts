import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  showAlertify(message: string, secenek: Required<AlertifyOptions>) {
    alertify.set('notifier', 'delay', secenek.delay);
    alertify.set('notifier', 'position', secenek.position);
    const msj = alertify[secenek.messageType](message);
    if(secenek.dismissOthers)
      msj.dismissOthers();

    setTimeout(()=>alertify.hide(),secenek.delay);
  };



}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Success;
  delay: number = 3;
  position: AlertifyPosition = AlertifyPosition.TopCenter;
  dismissOthers: boolean = false;

}
export enum MessageType {
  Success = 'success',
  Error = 'error',
  Notifier = 'notifier',
  Message = 'message',
  Warning = 'warning'
}

export enum AlertifyPosition {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left'
}