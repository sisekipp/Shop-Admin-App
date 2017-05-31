import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NormalProductOverviewComponent} from './components/normal/normal-product-overview/normal-product-overview.component';
import {NormalProductDetailComponent} from './components/normal/normal-product-detail/normal-product-detail.component';
import {SpecialProductOverviewComponent} from './components/special/special-product-overview/special-product-overview.component';
import {SpecialProductDetailComponent} from './components/special/special-product-detail/special-product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NormalProductOverviewComponent, NormalProductDetailComponent, SpecialProductOverviewComponent, SpecialProductDetailComponent ]
})
export class ProductModule { }
