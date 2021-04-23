import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
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
  /* customerForm = new FormGroup({
    names: new FormControl(''),
    surnames: new FormControl(''),
    phoneNumber: new FormControl(''),
    telephoneNumber: new FormControl(''),
  });
 */

constructor(private fb: FormBuilder, private customersService:CustomersService) { }
customerForm = this.fb.group({
  names: ['']/* new FormControl('') */,
    surnames: ['']/* new FormControl('') */,
    phoneNumber: ['']/* new FormControl('') */,
    telephoneNumber: ['']/* new FormControl('') */,
    addresses : this.fb.array([
      this.fb.control('')
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
    this.addresses.removeAt(this.addAdress.length - 1);
  }

  limpiarAlerta(){
    setInterval(()=>{
      this.message = "",
      this.statusCode = 0;
    },10000)
  }
}
