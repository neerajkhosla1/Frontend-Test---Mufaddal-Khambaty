import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';

const routes: Routes = [
  { path: '', component: DemoDashboardComponent },
  { path: 'demo-dashboard', component: DemoDashboardComponent},
  { path: 'edit-detail/:id', component: EditDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
