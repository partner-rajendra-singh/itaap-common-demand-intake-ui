import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-demand-intake',
  templateUrl: './demand-intake.component.html'
})
export class DemandIntakeComponent implements OnInit{

  items!: MenuItem[];

  subscription!: Subscription;

  constructor(public messageService: MessageService, public demandIntakeService: DemandIntakeService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Introduction',
                routerLink: 'introduction'
            },
            {
                label: 'Requester',
                routerLink: 'requester'
            },
            {
                label: 'Requirement',
                routerLink: 'requirement'
            },
            {
                label: 'Solution Direction',
                routerLink: 'solution-direction'
            },
            {
                label: 'EADI',
                routerLink: 'checklist'
            },
            {
                label: 'Attachment',
                routerLink: 'attachment'
            }
        ];

        this.subscription = this.demandIntakeService.paymentComplete$.subscribe((personalInformation) => {
            this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
