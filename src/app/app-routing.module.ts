import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CustomerOverviewComponent} from "./components/customer/customer-overview/customer-overview.component";
import {OrderOverviewComponent} from "./components/order/order-overview/order-overview.component";
import {NormalProductOverviewComponent} from "./components/product/normal/normal-product-overview/normal-product-overview.component";
import {SpecialProductOverviewComponent} from "./components/product/special/special-product-overview/special-product-overview.component";


export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kunden', component: CustomerOverviewComponent },
  { path: 'bestellungen', component: OrderOverviewComponent },
  { path: 'produkte', component: NormalProductOverviewComponent },
  { path: 'aktionsprodukte', component: SpecialProductOverviewComponent }
];
