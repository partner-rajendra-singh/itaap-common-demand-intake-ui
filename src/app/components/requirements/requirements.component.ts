import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    providers: [MessageService]
})
export class RequirementsComponent implements OnInit {

    constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService,
        private authService: AuthService, public eventService: EventService
    ) {
        if (authService.isRequester()) {
            if (this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != null) {
                this.visibleSaveButton = false;
            } else {
                this.visibleSaveButton = true;
            }
        } else {
            this.visibleSaveButton = false;
        }
    }

    requirementFunctionalInfo!: any;
    requirementNonFunctionalInfo!: any;
    requirementComplianceInfo!: any;
    visibleSaveButton!: boolean;
    goLiveApproach!: string;


    ngOnInit() {
        console.log("RequirementsComponent Init: ", this.demandIntakeService.demandInformation)
        this.requirementFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementFunctionalInfo;
        this.requirementNonFunctionalInfo = this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo;
        this.requirementComplianceInfo = this.demandIntakeService.getDemandInformation().requirementComplianceInfo;
    }

    nextPage() {

        if (this.requirementFunctionalInfo.statement != '' && this.requirementFunctionalInfo.scope != '' && this.requirementFunctionalInfo.businessValue != '' && this.requirementFunctionalInfo.goLiveApproach != '') {
            this.demandIntakeService.getDemandInformation().requirementFunctionalInfo = this.requirementFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementNonFunctionalInfo = this.requirementNonFunctionalInfo;
            this.demandIntakeService.getDemandInformation().requirementComplianceInfo = this.requirementComplianceInfo;

            if (this.authService.isRequester()) {
                if (this.eventService.isNewDemand) {
                    this.router.navigate(['demand-intake/attachment']);
                } else {
                    if (this.eventService.isMyDemand && (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')) {
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
        } else {
            this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        }
    }

    submitPage() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
    }

    prevPage() {
        if (this.eventService.isNewDemand) {
            this.router.navigate(['demand-intake/requester']);
        } else {
            this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
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
