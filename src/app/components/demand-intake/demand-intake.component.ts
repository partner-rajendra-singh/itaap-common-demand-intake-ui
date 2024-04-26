import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Demand } from 'src/app/models/demand';
import { EventService } from 'src/app/services/event.service';

@Component({
    selector: 'app-demand-intake',
    templateUrl: './demand-intake.component.html'
})
export class DemandIntakeComponent implements OnInit {

    items!: MenuItem[];
    subscription!: Subscription;
    demandIntakeId!: string;

    constructor(private router: Router, public messageService: MessageService, public demandIntakeService: DemandIntakeService, private authService: AuthService,
        private eventService: EventService) {
    }

    ngOnInit() {
        console.log("DemandIntakeComponent isNewDemand ", this.eventService.isNewDemand);

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
                visible: (this.authService.isDM() || this.authService.isCCB()),
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
                visible: (!this.eventService.isNewDemand && (this.authService.isDM() || this.authService.isCCB())),
            },
            {
                label: 'CCB',
                routerLink: 'ccb',
                visible: (!this.eventService.isNewDemand && this.authService.isCCB()),
            }
        ];

        this.items = this.items.filter(item => item.visible);
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
