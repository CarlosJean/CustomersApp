import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  statusCode:number = 0;
  message:string = "";

constructor(private fb: FormBuilder, private customersService:CustomersService) { }
customerForm = this.fb.group({
  names: ['', Validators.required],
    surnames: ['', Validators.required],
    phoneNumber: ['', [Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    telephoneNumber: ['',[Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    addresses : this.fb.array([
      this.fb.control('',[Validators.required])
    ])
});

  ngOnInit(): void {
  }

  ngOnSubmit(){
    this.customersService.create(this.customerForm.value).subscribe(res=>{
      this.statusCode = res.status;
      this.message = res.message;
      this.customerForm.reset();
      this.limpiarAlerta();
    },err => console.log('HTTP Error', err),);

  }

  get addresses() {
    return this.customerForm.get('addresses') as FormArray;
  }

  addAdress(){
    this.addresses.push(this.fb.control(''));
  }

  RemoveAdress(){    
    let addressControls = this.addresses.controls; //Para contar la cantidad de controles de dirección.
    if (addressControls.length > 1) {
      this.addresses.removeAt(addressControls.length - 1);      
    }
  }

  limpiarAlerta(){
    setInterval(()=>{
      this.message = "",
      this.statusCode = 0;
    },10000)
  }
}
