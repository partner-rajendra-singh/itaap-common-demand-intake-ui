import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Demand',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus', routerLink: ["/demand-intake"] },
                    { label: 'View', icon: 'pi pi-fw pi-search', routerLink: ["/view"] },
                    { label: 'Report', icon: 'pi pi-fw pi-file-excel', routerLink: ["/report"] },
                    { label: 'Chart', icon: 'pi pi-chart-pie', routerLink: ["/chart"] }
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
                expanded:true
            },
            {
                label: 'Logout',
                icon: 'pi pi-power-off',
                routerLink: ["/logout"] 
            }
        ];


    }

}
