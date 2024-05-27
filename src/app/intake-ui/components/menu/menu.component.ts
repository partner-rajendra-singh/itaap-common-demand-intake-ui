import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { Demand } from '../../models/demand';
import { Route, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { DemandIntakeComponent } from '../demand-intake/demand-intake.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    items!: MenuItem[];

    constructor(private router: Router, private authService: AuthService, private demandIntakeService: DemandIntakeService, 
        private eventService: EventService
    ) { }

    ngOnInit() {

        this.items = [
            {
                label: 'Demand',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus', command: () => this.newDemand() },
                    { label: 'View', icon: 'pi pi-fw pi-search', routerLink: ["/view"] },
                    { label: 'Report', icon: 'pi pi-fw pi-file-excel', routerLink: ["/report"], visible: false },
                    { label: 'Chart', icon: 'pi pi-chart-pie', routerLink: ["/chart"], visible: false }
                ],
                expanded: true
            },
            {
                label: 'Configuration',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'DM List', icon: 'pi pi-fw pi-align-left', routerLink: ["/dmcrud"] },
                    { label: 'CCB List', icon: 'pi pi-fw pi-align-right', routerLink: ["/ccbcrud"] }
                ],
                expanded: true,
                visible: this.authService.isAdmin()
            },
            {
                label: 'Logout',
                icon: 'pi pi-power-off',
                routerLink: ["/logout"]
            }
        ];

    }

    newDemand() {
        this.eventService.isNewDemand = true;
        this.eventService.isMyDemand = true;
        this.eventService.isStakeholderDemand = false;
        console.log("MenuComponent1 isNewDemand, isMyDemand ", this.eventService.isNewDemand, this.eventService.isMyDemand);
        
        this.demandIntakeService.setDemand(new Demand(), true);
        this.router.navigate(['/demand-intake/introduction']);
    }

}
