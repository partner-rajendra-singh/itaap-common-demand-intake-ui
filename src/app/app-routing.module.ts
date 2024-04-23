import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandIntakeComponent } from './components/demand-intake/demand-intake.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { RequesterComponent } from './components/requester/requester.component';
import { SolutionDirectionComponent } from './components/solution-direction/solution-direction.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { WipComponent } from './components/wip/wip.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { DemandManagerComponent } from './components/demandmanager/demandmanager.component';
import { CCBComponent } from './components/ccb/ccb.component';
import { ChartComponent } from './components/chart/chart.component';
import { DMCRUDComponent } from './components/dmcrud/dmcrud.component';
import { CCBCRUDComponent } from './components/ccbcrud/ccbcrud.component';
import { ViewDemandsComponent } from './components/view-demands/view-demands.component';

const routes: Routes = [
  { path: 'view', component: ViewDemandsComponent, canActivate: [AuthGuard]},
  { path: 'report', component: WipComponent, canActivate: [AuthGuard]},
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard]},
  { path: 'dmcrud', component: DMCRUDComponent, canActivate: [AuthGuard]},
  { path: 'ccbcrud', component: CCBCRUDComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'demand-intake', component: DemandIntakeComponent, canActivate: [AuthGuard], children: [
    {
      path: '',
      component: IntroductionComponent
    },
    {
      path: 'introduction',
      component: IntroductionComponent
    },
    {
      path: 'requester',
      component: RequesterComponent
    },
    {
      path: 'requirement',
      component: RequirementsComponent
    },
    {
      path: 'solution-direction',
      component: SolutionDirectionComponent
    },
    {
      path: 'checklist',
      component: ChecklistComponent
    },
    {
      path: 'attachment',
      component: AttachmentComponent
    },
    {
      path: 'demandmanager',
      component: DemandManagerComponent
    },
    {
      path: 'ccb',
      component: CCBComponent
    }
  ]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }