import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs';
import { EventService } from '../../services/event.service';
import { DemandStatus } from '../../enums/demand-status';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    providers: [MessageService]
})
export class RequirementsComponent implements OnInit {
    requirementFunctionalInfo!: any;
    requirementNonFunctionalInfo!: any;
    requirementComplianceInfo!: any;
    visibleSaveButton!: boolean;
    goLiveApproach!: string;

    constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService,
        private authService: AuthService, public eventService: EventService) {
        if (authService.isRequester()) {
            if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
                this.visibleSaveButton = false;
            } else {
                this.visibleSaveButton = true;
            }
        } else {
            this.visibleSaveButton = false;
        }
    }

    ngOnInit() {
        this.eventService.goLiveMinDate = this.demandIntakeService.getDemandInformation().requirementFunctionalInfo.bglDate;
        if(this.eventService.isNewDemand && this.eventService.isMyDemand){
            let today = new Date();
            this.demandIntakeService.getDemandInformation().requirementFunctionalInfo.bglDate = new Date(today.setDate(today.getDate() + 1));
        }

        console.log("RequirementsComponent Init: ", this.demandIntakeService.demandInformation)
        this.requirementFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementFunctionalInfo;
        this.requirementNonFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo;
        this.requirementComplianceInfo = this.demandIntakeService.getDemandInformation().requirementComplianceInfo;

    }

    onTabChange(event: any) {
        this.eventService.selectedRequirementsTabIndex = event.index;
    }

    nextPage() {

        if (this.requirementFunctionalInfo.statement != '' && this.requirementFunctionalInfo.scope != '' && this.requirementFunctionalInfo.businessValue != '' && this.requirementFunctionalInfo.goLiveApproach != '') {
            this.demandIntakeService.getDemandInformation().requirementFunctionalInfo = this.requirementFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo = this.requirementNonFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementComplianceInfo = this.requirementComplianceInfo;

            if (this.eventService.selectedRequirementsTabIndex < 2) {
                this.eventService.selectedRequirementsTabIndex += 1;
            } else {
                if (this.authService.isRequester()) {
                    if (this.eventService.isNewDemand) {
                        this.router.navigate(['demand-intake/attachment']);
                    } else {
                        if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)) {
                            this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
                        } else {
                            this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
                        }
                    }
                } else {
                    if (this.eventService.isNewDemand) {
                        this.router.navigate(['demand-intake/solution-direction']);
                    } else {
                        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
                    }
                }

            }


        } else {
            this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        }
    }

    submitPage() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
    }

    prevPage() {
        if (this.eventService.selectedRequirementsTabIndex > 0) {
            this.eventService.selectedRequirementsTabIndex -= 1;
        } else {
            if (this.eventService.isNewDemand) {
                this.router.navigate(['demand-intake/requester']);
            } else {
                this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
            }
        }
    }

    setGoLiveApproach() {
        console.log(this.goLiveApproach)
    }

    savePage() {
        this.demandIntakeService.saveDemandWithAttachment()
            .pipe(first())
            .subscribe(
                response => {
                    this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Demand Saved Successfully!' });
                    this.router.navigate(['view']);
                },
                error => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Demand Failed to Save!' });
                });
    }

}
