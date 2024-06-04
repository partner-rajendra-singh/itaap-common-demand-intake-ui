import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDemandsComponent } from './intake-ui/components/view-demands/view-demands.component';
import { DemandIntakeComponent } from './intake-ui/components/demand-intake/demand-intake.component';
import { RequirementsComponent } from './intake-ui/components/requirements/requirements.component';
import { RequesterComponent } from './intake-ui/components/requester/requester.component';
import { SolutionDirectionComponent } from './intake-ui/components/solution-direction/solution-direction.component';
import { AttachmentComponent } from './intake-ui/components/attachment/attachment.component';
import { ChecklistComponent } from './intake-ui/components/checklist/checklist.component';
import { IntroductionComponent } from './intake-ui/components/introduction/introduction.component';
import { WipComponent } from './intake-ui/components/wip/wip.component';
import { LoginComponent } from './intake-ui/components/login/login.component';
import { LogoutComponent } from './intake-ui/components/logout/logout.component';
import { DemandManagerComponent } from './intake-ui/components/demandmanager/demandmanager.component';
import { CCBComponent } from './intake-ui/components/ccb/ccb.component';
import { ChartComponent } from './intake-ui/components/chart/chart.component';
import { DMCRUDComponent } from './intake-ui/components/dmcrud/dmcrud.component';
import { CCBCRUDComponent } from './intake-ui/components/ccbcrud/ccbcrud.component';
import { AuthGuard } from './intake-ui/services/auth-guard.service';
import { MainAppLayoutComponent } from './layout/main.app.layout.component';
import { MsalGuard } from '@azure/msal-angular';
import { ConfirmComponent } from './intake-ui/components/confirm/confirm.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MainAppLayoutComponent, 
    // canActivate: [MsalGuard],
    children: [
      { path: 'view', component: ViewDemandsComponent },
      { path: 'report', component: WipComponent, canActivate: [AuthGuard] },
      { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
      { path: 'dmcrud', component: DMCRUDComponent, canActivate: [AuthGuard] },
      { path: 'ccbcrud', component: CCBCRUDComponent, canActivate: [AuthGuard] },
      { path: 'logout', component: LogoutComponent },
      {
        path: 'demand-intake', component: DemandIntakeComponent, canActivate: [AuthGuard], children: [
          {
            path: '',
            component: IntroductionComponent
          }, {
            path: 'confirm',
            component: ConfirmComponent
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
          },
          {
            path: 'introduction/:demandIntakeId',
            component: IntroductionComponent
          },
          {
            path: 'requester/:demandIntakeId',
            component: RequesterComponent
          },
          {
            path: 'requirement/:demandIntakeId',
            component: RequirementsComponent
          },
          {
            path: 'solution-direction/:demandIntakeId',
            component: SolutionDirectionComponent
          },
          {
            path: 'checklist/:demandIntakeId',
            component: ChecklistComponent
          },
          {
            path: 'attachment/:demandIntakeId',
            component: AttachmentComponent
          },
          {
            path: 'demandmanager/:demandIntakeId',
            component: DemandManagerComponent
          },
          {
            path: 'ccb/:demandIntakeId',
            component: CCBComponent
          }
        ]
      },
      {
        path: 'demand-intake/:demandIntakeId', component: DemandIntakeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: IntroductionComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }