import { Routes, RouterModule } from '@angular/router';
import { CustomerOverviewComponent } from 'app/customer/components/customer-overview/customer-overview.component';

const CUSTOMER_ROUTES: Routes = [
    {path: '', component: CustomerOverviewComponent}
]

export const customerRouting = RouterModule.forChild(CUSTOMER_ROUTES);
