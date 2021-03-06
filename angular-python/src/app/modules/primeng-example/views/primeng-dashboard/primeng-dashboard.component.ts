import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../../../../shared/services/customer.service';

@Component({
  selector: 'app-primeng-dashboard',
  templateUrl: './primeng-dashboard.component.html',
  styleUrls: ['./primeng-dashboard.component.scss']
})
export class PrimengDashboardComponent implements OnInit {
  customers=[];
  form = new FormGroup({
    name: new FormControl(''),

  });

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    //去跟 customer.service.ts 要資料
    this.customerService.getCustomers().subscribe(
      (customers)=>{
        this.customers = customers;
      },error=>{
        alert(error.message);
      }
    )
  }

  /** @summary 去跟 customer service 要資料(帶有查詢條件) */
  search(){
    alert(this.form.get('name').value);
    this.customerService.getSpecificCustomerFromDb(this.form.get('name').value).subscribe(
      searchResult =>{
        this.customers = searchResult;
      },error=>{
        alert(error.message);
      }
    );
  }

}
