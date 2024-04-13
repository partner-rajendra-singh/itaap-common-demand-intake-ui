import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementComponent } from './components/requirement/requirement.component';
import { DemandIntakeComponent } from './components/demand-intake/demand-intake.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { RequesterComponent } from './components/requester/requester.component';
import { SolutionDirectionComponent } from './components/solution-direction/solution-direction.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { NfrComponent } from './components/nfr/nfr.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DemandManagerComponent } from './components/demandmanager/demandmanager.component';

import { WipComponent } from './components/wip/wip.component';
import { CCBComponent } from './components/ccb/ccb.component';

const routes: Routes = [
  { path: '', component: RequirementComponent},
  { path: 'view', component: WipComponent},
  { path: 'report', component: WipComponent},
  { path: 'demand-intake', component: DemandIntakeComponent, children: [
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
      path: 'compliance',
      component: ComplianceComponent
    },
    {
      path: 'nfr',
      component: NfrComponent
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
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
