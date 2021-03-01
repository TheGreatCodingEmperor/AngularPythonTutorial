import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengExampleRoutingModule } from './primeng-example-routing.module';
import { PrimeNgModule } from '../../shared/modules/prime-ng.module';
import { PrimengDashboardComponent } from './views/primeng-dashboard/primeng-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PrimengDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    PrimengExampleRoutingModule
  ]
})
export class PrimengExampleModule { }
