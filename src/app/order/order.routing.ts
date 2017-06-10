import { Routes, RouterModule } from '@angular/router';

import { OrderOverviewComponent } from 'app/order/components/order-overview/order-overview.component';

const ORDER_ROUTES: Routes = [
    {path: '', component: OrderOverviewComponent}
]

export const orderRouting = RouterModule.forChild(ORDER_ROUTES);
