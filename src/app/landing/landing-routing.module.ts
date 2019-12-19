import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ServicePageComponent } from 'src/app/landing/service-page/service-page.component';
import { ProductPageComponent } from 'src/app/landing/product-page/product-page.component';
import { OrderPageComponent } from 'src/app/landing/order-page/order-page.component';
import { CategoryPageComponent } from 'src/app/landing/category-page/category-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {path:'service-page', component: ServicePageComponent},
  {path:'product-page', component: ProductPageComponent},
  {path:'order-page', component: OrderPageComponent},
  {path:'category-page', component: CategoryPageComponent},
  {path:'unit-page', component: UnitPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
