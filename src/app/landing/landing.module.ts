import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';
import { AddDialogComponent } from './unit-page/add-dialog/add-dialog.component';
import {ModalModule} from "ngx-bootstrap";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';
import { SellFormComponent } from './sell-form/sell-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { SellReportComponent } from './sell-report/sell-report.component';
import { ServiceReportComponent } from './service-report/service-report.component';
import { BuyReportComponent } from './buy-report/buy-report.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { AddSupplierDialogComponent } from './supplier-page/add-supplier-dialog/add-supplier-dialog.component';
import { AddCategoryDialogComponent } from './category-page/add-category-dialog/add-category-dialog.component';
import { UpdateCategoryDialogComponent } from './category-page/update-category-dialog/update-category-dialog.component';



@NgModule({
  declarations: [LandingComponent,
     ProductPageComponent,
      ServicePageComponent,
       CategoryPageComponent,
         UnitPageComponent,
         AddDialogComponent,
         SellFormComponent,
         ServiceFormComponent,
         BuyFormComponent,
         SellReportComponent,
         ServiceReportComponent,
         BuyReportComponent,
         InventoryReportComponent,
         SupplierPageComponent,
         AddSupplierDialogComponent,
         AddCategoryDialogComponent,
         UpdateCategoryDialogComponent
          ],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  entryComponents: [AddDialogComponent, AddCategoryDialogComponent, UpdateCategoryDialogComponent]
})
export class LandingModule { }
