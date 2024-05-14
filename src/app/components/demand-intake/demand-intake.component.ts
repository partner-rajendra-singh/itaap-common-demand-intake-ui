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
    demandIntakeId!: any;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, public messageService: MessageService, public demandIntakeService: DemandIntakeService, private eventService: EventService, private authService: AuthService) { }

    ngOnInit() {
        this.demandIntakeId = this.activatedRoute.snapshot.paramMap.get('demandIntakeId');
        console.log("DemandIntakeComponent id ", this.demandIntakeId);
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
                    routerLink: ['introduction/:demandIntakeId'],
                    visible: true
                },
                {
                    label: 'Requester',
                    routerLink: 'requester/:demandIntakeId',
                    visible: true
                },
                {
                    label: 'Requirement',
                    routerLink: 'requirement/:demandIntakeId',
                    visible: true
                },
                {
                    label: 'Solution Direction',
                    routerLink: 'solution-direction/:demandIntakeId',
                    visible: this.authService.isDM() || this.authService.isCCB()
                    // || (this.authService.isRequester() && this.eventService.isMyDemand && 
                    // (this.demandIntakeService.demandInformation.introduction.status!='DRAFT' && this.demandIntakeService.demandInformation.introduction.status!='PENDING_WITH_DM')),
                },
                {
                    label: 'EADI',
                    routerLink: 'checklist/:demandIntakeId',
                    visible: (this.authService.isDM() || this.authService.isCCB())
                    // || (this.authService.isRequester() && this.eventService.isMyDemand && 
                    // (this.demandIntakeService.demandInformation.introduction.status!='DRAFT' && this.demandIntakeService.demandInformation.introduction.status!='PENDING_WITH_DM')),
                },
                {
                    label: 'Attachment',
                    routerLink: 'attachment/:demandIntakeId',
                    visible: true
                },
                {
                    label: 'DM',
                    routerLink: 'demandmanager/:demandIntakeId',
                    visible: (!this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB()))
                    // || (this.authService.isRequester() && this.eventService.isMyDemand && 
                    // (this.demandIntakeService.demandInformation.introduction.status!='DRAFT' && this.demandIntakeService.demandInformation.introduction.status!='PENDING_WITH_DM')),
                },
                {
                    label: 'CCB',
                    routerLink: 'ccb/:demandIntakeId',
                    visible: (!this.eventService.isMyDemand && this.authService.isCCB())
                    // || (this.authService.isRequester() && this.eventService.isMyDemand && 
                    // (this.demandIntakeService.demandInformation.introduction.status=='CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status=='ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status=='REJECTED')),
                }
            ];
        }


        this.items = this.items.filter(item => item.visible);
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
