import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HttpClientModule } from '@angular/common/http';
import { Global } from 'src/app/Globals/global';
import { CustomersService } from 'src/app/Services/customers.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component'; 
import { ReactiveFormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [CustomerComponent, CreateCustomerComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[Global, CustomersService]
})
export class CustomerModule { }
