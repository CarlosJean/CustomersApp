import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './modules/customer/customer.component';

const routes: Routes = [
  { path: 'cliente', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) }, 
{path:'', pathMatch:'full', component:CustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
