import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentAdminModule } from './component-admin/component-admin.module';



@NgModule({
  declarations: [   
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentAdminModule
  ]
})
export class AdminModule { }
