import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandIntakeComponent } from './demand-intake.component';
import { AuthGuard } from '../../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'demand-intake',
    component: DemandIntakeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandIntakeRoutingModule { }