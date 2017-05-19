import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routing.module";
import { CustomerOverviewComponent } from './components/customer/customer-overview/customer-overview.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { OrderOverviewComponent } from './components/order/order-overview/order-overview.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { NormalProductOverviewComponent } from './components/product/normal/normal-product-overview/normal-product-overview.component';
import { NormalProductDetailComponent } from './components/product/normal/normal-product-detail/normal-product-detail.component';
import { SpecialProductOverviewComponent } from './components/product/special/special-product-overview/special-product-overview.component';
import { SpecialProductDetailComponent } from './components/product/special/special-product-detail/special-product-detail.component';
import {CustomerService} from "./services/customer/customer.service";


const APP_SERVICES = [
  CustomerService
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerOverviewComponent,
    CustomerDetailsComponent,
    OrderOverviewComponent,
    OrderDetailComponent,
    NormalProductOverviewComponent,
    NormalProductDetailComponent,
    SpecialProductOverviewComponent,
    SpecialProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [APP_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
