import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsUiComponent } from './products-ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsUiComponent}
    ])
  ]
})
export class ProductsUiModule { }
