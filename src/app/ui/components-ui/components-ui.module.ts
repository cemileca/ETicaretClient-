import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsUiModule } from './products-ui/products-ui.module';
import { HomePageModule } from './home-page/home-page.module';
import { BasketsUiModule } from './baskets-ui/baskets-ui.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProductsUiModule,
    HomePageModule,
    BasketsUiModule,
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class ComponentsUiModule { }
