import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsUiComponent } from './baskets-ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BasketsUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "", component: BasketsUiComponent
    }])
  ]
})
export class BasketsUiModule { }
