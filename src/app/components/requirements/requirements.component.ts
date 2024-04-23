import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  providers: [MessageService]
})
export class RequirementsComponent implements OnInit{

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService,
    private authService: AuthService
  ) {}

  requirementFunctionalInfo!: any;
  requirementNonFunctionalInfo!: any;
  requirementComplianceInfo!: any;

      goLiveApproach!: string;

    ngOnInit() {
        // console.log("RequirementsComponent Init: ", this.demandIntakeService.demandInformation)
        this.requirementFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementFunctionalInfo;
        this.requirementNonFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo;
        this.requirementComplianceInfo = this.demandIntakeService.getDemandInformation().requirementComplianceInfo;
    }

    nextPage() {

        if(this.requirementFunctionalInfo.statement != '' && this.requirementFunctionalInfo.scope != '' && this.requirementFunctionalInfo.businessValue != '' && this.requirementFunctionalInfo.goLiveApproach != ''){
            this.demandIntakeService.getDemandInformation().requirementFunctionalInfo = this.requirementFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo = this.requirementNonFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementComplianceInfo = this.requirementComplianceInfo;

            if(this.authService.isRequester()){
                this.router.navigate(['demand-intake/attachment']);
            } else {
                this.router.navigate(['demand-intake/solution-direction']);
            }
        }else{
            this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        }
    }

    submitPage() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
    }

    prevPage() {
        console.log(this.goLiveApproach)
        this.router.navigate(['demand-intake/requester']);
    }

    setGoLiveApproach(){
        console.log(this.goLiveApproach)
    }

}
