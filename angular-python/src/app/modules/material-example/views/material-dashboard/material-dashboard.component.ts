import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/services/customer.service';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.scss']
})
export class MaterialDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      customers=>{
        this.dataSource = customers;
      },error=>{
        alert(error.message);
      }
    )
  }

}
