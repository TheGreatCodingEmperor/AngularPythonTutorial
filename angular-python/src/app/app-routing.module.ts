import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'material', loadChildren: () => import('./modules/material-example/material-example.module').then(mod => mod.MaterialExampleModule) },
  { path: 'primeng', loadChildren: () => import('./modules/primeng-example/primeng-example.module').then(mod => mod.PrimengExampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
