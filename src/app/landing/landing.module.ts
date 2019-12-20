import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';
import { AddDialogComponent } from './unit-page/add-dialog/add-dialog.component';
import {ModalModule} from "ngx-bootstrap";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LandingComponent, ProductPageComponent, ServicePageComponent, CategoryPageComponent, OrderPageComponent, UnitPageComponent, AddDialogComponent],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ],
  entryComponents: [AddDialogComponent]
})
export class LandingModule { }
