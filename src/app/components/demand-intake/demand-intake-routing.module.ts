import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandIntakeComponent } from './demand-intake.component';

const routes: Routes = [
  {
    path: 'demand-intake',
    component: DemandIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemandIntakeRoutingModule { }
