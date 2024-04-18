import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { Demand } from 'src/app/models/demand';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    items!: MenuItem[];

    constructor(private authService: AuthService, private demandIntakeService: DemandIntakeService){}

    ngOnInit() {

        this.items = [
            {
                label: 'Demand',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus', routerLink: ["/demand-intake"], command: () => this.newDemand() },
                    { label: 'View', icon: 'pi pi-fw pi-search', routerLink: ["/view"] },
                    { label: 'Report', icon: 'pi pi-fw pi-file-excel', routerLink: ["/report"], visible: !this.authService.isRequester() },
                    { label: 'Chart', icon: 'pi pi-chart-pie', routerLink: ["/chart"], visible: !this.authService.isRequester() }
                ],
                expanded:true
            },
            {
                label: 'Configuration',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'DM List', icon: 'pi pi-fw pi-align-left', routerLink: ["/dmcrud"] },
                    { label: 'CCB List', icon: 'pi pi-fw pi-align-right' , routerLink: ["/ccbcrud"]}
                ],
                expanded:true,
                visible: this.authService.isAdmin()
            },
            {
                label: 'Logout',
                icon: 'pi pi-power-off',
                routerLink: ["/logout"] 
            }
        ];

    }

    newDemand(){
        this.demandIntakeService.setDemand(new Demand());
    }

}
