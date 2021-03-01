import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExampleRoutingModule } from './material-example-routing.module';
import { NgMaterialModule } from '../../shared/modules/ng-material.module';
import { MaterialDashboardComponent } from './views/material-dashboard/material-dashboard.component';


@NgModule({
  declarations: [MaterialDashboardComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    MaterialExampleRoutingModule
  ]
})
export class MaterialExampleModule { }
