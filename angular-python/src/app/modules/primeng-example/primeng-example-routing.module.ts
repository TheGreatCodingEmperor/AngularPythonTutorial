import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengDashboardComponent } from './views/primeng-dashboard/primeng-dashboard.component';

const routes: Routes = [
  { path:"dashboard", component: PrimengDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengExampleRoutingModule { }
