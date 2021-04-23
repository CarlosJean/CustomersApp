import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer:any = null;
  constructor(private customersService:CustomersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.route.params.subscribe(param=>{      
      let id = param.id;
      this.customersService.getCustomer(id).subscribe((res)=>{        
        this.customer = res;
      },(error)=>console.error(error));
    });
  }

}
