import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Global} from '../Globals/global';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url = this.global.API_URL + '/api/Customers';
  constructor(private global:Global, private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  create(customer:any[]):Observable<any>{
    let headers:HttpHeaders = new HttpHeaders();
    headers.set('Content-Type','application/json; charset=utf-8');
    return this.httpClient.post(this.url,customer,{headers});
  }

  getCustomer(id:number):Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json; charset=utf-8');
    return this.httpClient.get(this.url+"/"+id, {headers});
  }

  deleteCustomer(id:number):Observable<any>{    
    return this.httpClient.delete(this.url+"/"+id);
  }

}
