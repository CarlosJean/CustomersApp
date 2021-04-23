import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { CustomerComponent } from './customer.component';

const routes: Routes = [{ path: '', component: CustomerComponent },{path:'crear',component:CreateCustomerComponent}, {path:'detalle/:id', component:CustomerDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
