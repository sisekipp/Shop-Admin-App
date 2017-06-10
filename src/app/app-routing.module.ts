import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'kunden', loadChildren: 'app/customer/customer.module#CustomerModule'  },
  { path: 'bestellungen', loadChildren: 'app/order/order.module#OrderModule' },
  { path: 'produkte', children: [
    {path: 'normaleprodukte', loadChildren: 'app/product/normal/normal-product.module#NormalProductModule'},
    {path: 'aktionsprodukte', loadChildren: 'app/product/special/special-product.module#SpecialProductModule'}
  ] }
];
