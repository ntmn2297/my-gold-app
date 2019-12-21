import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ServicePageComponent } from 'src/app/landing/service-page/service-page.component';
import { ProductPageComponent } from 'src/app/landing/product-page/product-page.component';
import { CategoryPageComponent } from 'src/app/landing/category-page/category-page.component';
import { UnitPageComponent } from './unit-page/unit-page.component';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { SellReportComponent } from './sell-report/sell-report.component';
import { SellFormComponent } from './sell-form/sell-form.component';
import { BuyReportComponent } from './buy-report/buy-report.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {path:'service-page', component: ServicePageComponent},
  {path:'product-page', component: ProductPageComponent},
  {path:'category-page', component: CategoryPageComponent},
  {path:'service-report', component: ServiceReportComponent},
  {path:'service-form', component: ServiceFormComponent},
  {path:'sell-report', component: SellReportComponent},
  {path:'sell-form', component: SellFormComponent},
  {path:'buy-report', component: BuyReportComponent},
  {path:'buy-form', component: BuyFormComponent},
  {path:'inventory', component: InventoryReportComponent},
  {path:'supplier-page', component: SupplierPageComponent},
  {path:'unit-page', component: UnitPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
