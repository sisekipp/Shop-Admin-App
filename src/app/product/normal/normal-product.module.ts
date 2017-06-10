import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalProductOverviewComponent } from 'app/product/normal/components/normal-product-overview/normal-product-overview.component';
import { NormalProductDetailComponent } from 'app/product/normal/components/normal-product-detail/normal-product-detail.component';
import { normalProductRouting } from 'app/product/normal/normal-product.routing';

@NgModule({
  imports: [
    CommonModule,
    normalProductRouting
  ],
  declarations: [ NormalProductOverviewComponent, NormalProductDetailComponent]
})
export class NormalProductModule { }
