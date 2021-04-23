import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customersService.getAll().subscribe((res)=>{
      console.log(res);
    });
  }
}
