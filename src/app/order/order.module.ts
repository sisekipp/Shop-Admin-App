import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OrderOverviewComponent} from './components/order-overview/order-overview.component';
import {OrderDetailComponent} from './components/order-detail/order-detail.component';
import { orderRouting } from 'app/order/order.routing';

@NgModule({
  imports: [
    CommonModule,
    orderRouting
  ],
  declarations: [ OrderOverviewComponent, OrderDetailComponent ]
})
export class OrderModule { }
