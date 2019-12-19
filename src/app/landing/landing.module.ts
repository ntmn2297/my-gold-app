import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { OrderPageComponent } from './order-page/order-page.component';


@NgModule({
  declarations: [LandingComponent, ProductPageComponent, ServicePageComponent, CategoryPageComponent, OrderPageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
