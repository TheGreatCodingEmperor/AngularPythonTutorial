import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(`http://localhost:5000/getCustomers`);
  }

  getProductsFromDb():Observable<any>{
    return this.http.get(`http://localhost:5000/getProductFromDb`);
  }

  getSpecificCustomerFromDb(name:string): Observable<any> {
    return this.http.get(`http://localhost:5000/getSpecificCustomerFromDb?name=${name}`);
  }

  baseUrl() {
    let base = '';

    if (window.location.origin) {
      base = window.location.origin;
    } else {
      base = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return base.replace(/\/$/, '');
  }
}
