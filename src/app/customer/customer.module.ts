import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerService} from './services/customer.service';
import {CustomerOverviewComponent} from './components/customer-overview/customer-overview.component';
import {CustomerDetailsComponent} from './components/customer-details/customer-details.component';
import { customerRouting } from 'app/customer/customer-routing';

@NgModule({
  imports: [
    CommonModule,
    customerRouting
  ],
  providers: [ CustomerService ],
  declarations: [ CustomerOverviewComponent, CustomerDetailsComponent ]
})
export class CustomerModule { }
