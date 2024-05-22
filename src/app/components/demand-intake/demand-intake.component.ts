import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-demand-intake',
    templateUrl: './demand-intake.component.html'
})
export class DemandIntakeComponent implements OnInit {

    items!: MenuItem[];
    subscription!: Subscription;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, public messageService: MessageService, public demandIntakeService: DemandIntakeService, private eventService: EventService, private authService: AuthService) {
        const demandIntakeId = this.activatedRoute.snapshot.paramMap.get('demandIntakeId');
        this.eventService.currentDemandIntakeId = this.demandIntakeService.demandInformation.introduction.demandIntakeId;
    }

    ngOnInit() {
        console.log("DemandIntakeComponent id ", this.eventService.currentDemandIntakeId);
        console.log("DemandIntakeComponent isNewDemand ", this.eventService.isNewDemand);
        if (this.authService.isRequester()) {
            if (this.eventService.isMyDemand && this.demandIntakeService.demandInformation.introduction.status != 'DRAFT') {

            }
        }

        if (this.eventService.isNewDemand) {
            this.items = [
                {
                    label: 'Introduction',
                    routerLink: ['introduction'],
                    visible: true
                },
                {
                    label: 'Requester',
                    routerLink: 'requester',
                    visible: true
                },
                {
                    label: 'Requirement',
                    routerLink: 'requirement',
                    visible: true
                },
                {
                    label: 'Solution Direction',
                    routerLink: 'solution-direction',
                    visible: this.authService.isDM() || this.authService.isCCB()
                    // || (!this.eventService.isNewDemand && this.authService.isRequester() && this.eventService.isMyDemand && this.demandIntakeService.demandInformation.introduction.status!='DRAFT'),
                },
                {
                    label: 'EADI',
                    routerLink: 'checklist',
                    visible: (this.authService.isDM() || this.authService.isCCB()),
                },
                {
                    label: 'Attachment',
                    routerLink: 'attachment',
                    visible: true
                },
                {
                    label: 'DM',
                    routerLink: 'demandmanager',
                    visible: (!this.eventService.isNewDemand && !this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB())),
                },
                {
                    label: 'CCB',
                    routerLink: 'ccb',
                    visible: (!this.eventService.isNewDemand && !this.eventService.isMyDemand && this.authService.isCCB()),
                }
            ];
        } else {
            this.items = [
                {
                    label: 'Introduction',
                    command: () => this.routeToIntroduction(),
                    // routerLink: ['introduction/'+this.eventService.currentDemandIntakeId],
                    visible: true
                },
                {
                    label: 'Requester',
                    command: () => this.routeToRequester(),
                    visible: true
                },
                {
                    label: 'Requirement',
                    command: () => this.routeToRequirement(),
                    visible: true
                },
                {
                    label: 'Solution Direction',
                    command: () => this.routeToSD(),
                    visible: this.authService.isDM() || this.authService.isCCB()
                        || (this.authService.isRequester() && this.eventService.isMyDemand &&
                            (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')),
                },
                {
                    label: 'EADI',
                    command: () => this.routeToEADI(),
                    visible: (this.authService.isDM() || this.authService.isCCB())
                        || (this.authService.isRequester() && this.eventService.isMyDemand &&
                            (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')),
                },
                {
                    label: 'Attachment',
                    command: () => this.routeToAttachment(),
                    visible: true
                },
                {
                    label: 'DM',
                    command: () => this.routeToDM(),
                    visible: (!this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB()))
                        || (this.authService.isRequester() && this.eventService.isMyDemand &&
                            (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')),
                },
                {
                    label: 'CCB',
                    visible: (!this.eventService.isMyDemand && this.authService.isCCB())
                        || (this.authService.isRequester() && this.eventService.isMyDemand &&
                            (this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED'))
                            ||(!this.eventService.isMyDemand && this.authService.isDM() && this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB'),
                }
            ];
        }

        this.items = this.items.filter(item => item.visible);
    }

    routeToIntroduction() {
        console.log("this.demandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/introduction/' + this.eventService.currentDemandIntakeId]);
    }
    routeToRequester() {
        console.log("this.demandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/requester/' + this.eventService.currentDemandIntakeId]);
    }
    routeToRequirement() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/requirement/' + this.eventService.currentDemandIntakeId]);
    }
    routeToSD() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/solution-direction/' + this.eventService.currentDemandIntakeId]);
    }
    routeToEADI() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/checklist/' + this.eventService.currentDemandIntakeId]);
    }
    routeToAttachment() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/attachment/' + this.eventService.currentDemandIntakeId]);
    }
    routeToDM() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/demandmanager/' + this.eventService.currentDemandIntakeId]);
    }
    routeToCCB() {
        console.log("this.eventService.currentDemandIntakeId", this.eventService.currentDemandIntakeId)
        this.router.navigate(['/demand-intake/ccb/' + this.eventService.currentDemandIntakeId]);
    }

    setItems(items: any) {
        this.items = items;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
