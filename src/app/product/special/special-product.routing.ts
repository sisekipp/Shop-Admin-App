import { Routes, RouterModule } from '@angular/router';

import { SpecialProductOverviewComponent } from 'app/product/special/components/special-product-overview/special-product-overview.component';


const SPECIALPRODUCT_ROUTES: Routes = [
    {path: '', component: SpecialProductOverviewComponent}
]

export const specialProductRouting = RouterModule.forChild(SPECIALPRODUCT_ROUTES);
