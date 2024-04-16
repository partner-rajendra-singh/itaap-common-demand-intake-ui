import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-demand-intake',
  templateUrl: './demand-intake.component.html'
})
export class DemandIntakeComponent implements OnInit{

  items!: MenuItem[];

  subscription!: Subscription;

  constructor(public messageService: MessageService, public demandIntakeService: DemandIntakeService, private authService: AuthService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Introduction',
                routerLink: 'introduction',
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
                visible: (this.authService.isDM() || this.authService.isCCB() || this.authService.isAdmin()),
            },
            {
                label: 'EADI',
                routerLink: 'checklist',
                visible: (this.authService.isDM() || this.authService.isCCB() || this.authService.isAdmin()),
            },
            {
                label: 'Attachment',
                routerLink: 'attachment',
                visible: true
            },
            {
                label: 'DM',
                routerLink: 'demandmanager',
                visible: (this.authService.isDM() || this.authService.isCCB() || this.authService.isAdmin()),
            },
            {
                label: 'CCB',
                routerLink: 'ccb',
                visible: (this.authService.isCCB() || this.authService.isAdmin())
            }
        ];

        // Filter and assign only visible steps:
        this.items = this.items.filter(item => item.visible);

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}