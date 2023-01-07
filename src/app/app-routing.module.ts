import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component-admin/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomePageComponent } from './ui/components-ui/home-page/home-page.component';
import { ProductsUiComponent } from './ui/components-ui/products-ui/products-ui.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "products", loadChildren: () => import("./admin/component-admin/products/products.module").then(module => module.ProductsModule) },
      { path: "customers", loadChildren: () => import("./admin/component-admin/customers/customers.module").then(module => module.CustomersModule) },
      { path: "orders", loadChildren: () => import("./admin/component-admin/orders/orders.module").then(module => module.OrdersModule) }
    ]
  },
  { path: "", component: HomePageComponent },
  { path: "products", loadChildren: () => import("./ui/components-ui/products-ui/products-ui.module").then(module => module.ProductsUiModule) },
  { path: "baskets", loadChildren: () => import("./ui/components-ui/baskets-ui/baskets-ui.module").then(module => module.BasketsUiModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
