import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerService} from "./services/customer.service";
import {CustomerOverviewComponent} from "./components/customer-overview/customer-overview.component";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ CustomerService ],
  declarations: [ CustomerOverviewComponent, CustomerDetailsComponent ]
})
export class CustomerModule { }
