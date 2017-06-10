import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SpecialProductOverviewComponent } from 'app/product/special/components/special-product-overview/special-product-overview.component';
import { SpecialProductDetailComponent } from 'app/product/special/components/special-product-detail/special-product-detail.component';
import { specialProductRouting } from 'app/product/special/special-product.routing';

@NgModule({
  imports: [
    CommonModule,
    specialProductRouting
  ],
  declarations: [ SpecialProductOverviewComponent, SpecialProductDetailComponent ]
})
export class ProductModule { }
