import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //目前 python 服務在 http://localhost:5000 執行

  constructor(private http:HttpClient) { }

  //** @summary 從 python 那邊取得 customer 清單 資料 */
  getCustomers(): Observable<any> {
    return this.http.get(`http://localhost:5000/getCustomers`);
  }

  /** @summary 藉由 python 取得 sqlite 資料庫 取得 customer 資料表 資料 */
  getProductsFromDb():Observable<any>{
    return this.http.get(`http://localhost:5000/getProductFromDb`);
  }

  /** @summary 帶入查詢條件(customer name) 藉由 python 取得 sqlite 資料庫 取得 customer 資料表 資料 */
  getSpecificCustomerFromDb(name:string): Observable<any> {
    return this.http.get(`http://localhost:5000/getSpecificCustomerFromDb?name=${name}`);
  }

  //還沒用到不用理他
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
