import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OrderOverviewComponent} from './components/order-overview/order-overview.component';
import {OrderDetailComponent} from './components/order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ OrderOverviewComponent, OrderDetailComponent ]
})
export class OrderModule { }
