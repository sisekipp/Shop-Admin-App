import { Routes, RouterModule } from '@angular/router';

import { NormalProductOverviewComponent } from 'app/product/normal/components/normal-product-overview/normal-product-overview.component';


const NORMALPRODUCT_ROUTES: Routes = [
    {path: '', component: NormalProductOverviewComponent}
]

export const normalProductRouting = RouterModule.forChild(NORMALPRODUCT_ROUTES);
