import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CustomerOverviewComponent} from "./customer/components/customer-overview/customer-overview.component";
import {OrderOverviewComponent} from "./order/components/order-overview/order-overview.component";
import {NormalProductOverviewComponent} from "./product/components/normal/normal-product-overview/normal-product-overview.component";
import {SpecialProductOverviewComponent} from "./product/components/special/special-product-overview/special-product-overview.component";


export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kunden', component: CustomerOverviewComponent },
  { path: 'bestellungen', component: OrderOverviewComponent },
  { path: 'produkte', component: NormalProductOverviewComponent },
  { path: 'aktionsprodukte', component: SpecialProductOverviewComponent }
];
