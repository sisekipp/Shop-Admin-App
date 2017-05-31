import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routing.module";
import {CustomerModule} from "./customer/customer.module";
import {OrderModule} from './order/order.module';
import {ProductModule} from './product/product.module';


const APP_SERVICES = [
]

const APP_MODULES = [
  CustomerModule,
  OrderModule,
  ProductModule
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    APP_MODULES,
  ],
  providers: [APP_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
