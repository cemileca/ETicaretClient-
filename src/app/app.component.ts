import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AlertifyPosition, AlertifyService, MessageType } from './services/alertify/alertify.service';
import { SpinnerService, SpinnerType } from './services/spinner/spinner.service';
import { CustomerToastrService, CustomToastrPosition, CustomToastType } from './services/toastr/customer-toastr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ETicaretClient';
  benimSPinnerType: string = SpinnerType.SquareJellyBox;
  
  constructor(private alertfiy: AlertifyService, private spinnerxx: NgxSpinnerService, private toastr: CustomerToastrService) {

  }


  Gosteralerti(birMesaj: string, delay: number) {
    this.alertfiy.showAlertify(birMesaj, {
      messageType: MessageType.Success,
      delay: 2,
      position: AlertifyPosition.TopRight,
      dismissOthers: true
    });
  };
  CustomerSpinnerShow() {
    this.spinnerxx.show();
    setTimeout(() => this.spinnerxx.hide(), 1000);

  };

  ToastrGoster(message: string, title: string) {
    this.toastr.ToastrMessageShow(message, title, {
      messageType: CustomToastType.Success,
      Position: CustomToastrPosition.ToastTopCenter,
      delay: 1500
    })
  };


}
