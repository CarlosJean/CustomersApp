import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  message:string = "";
  statusCode:number = 0;

  customers:any[] = [];
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customersService.getAll().subscribe((res)=>{
      this.customers = res;
    },(error)=>console.error(error));
  }

  deleteCustomer(event:any){    
    let id = event.target.id;    
    var confirm:any = window.confirm("¿Está segur@ que desea eliminar a este usuario?");
    if (confirm) {
      this.customersService.deleteCustomer(id).subscribe((res)=>{
        this.statusCode = res.status;
        this.message = res.message;
        this.getCustomers();
      },(error)=>{
        this.statusCode = 400;
        this.message = "Hubo un error al intentar eliminar al cliente."
        console.error(error);      
      });      
    }
  }

}
