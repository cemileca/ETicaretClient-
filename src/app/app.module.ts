import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsUiModule } from './ui/components-ui/components-ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {provide:"baseUrl", useValue:"https://localhost:7186"}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UiModule,
        AdminModule,
        NgxSpinnerModule,
        ComponentsUiModule,
        ToastrModule.forRoot(),
        RouterModule
        
    ]
})
export class AppModule { }
