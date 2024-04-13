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
                    { label: 'Chart', icon: 'pi pi-fw pi-file-excel', routerLink: ["/chart"] },
                    { label: 'Logout', icon: 'pi pi-fw pi-file-excel', routerLink: ["/logout"] }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Report 1', icon: 'pi pi-fw pi-align-left' },
                    { label: 'Report 2', icon: 'pi pi-fw pi-align-right' }
                ]
            },
            {
                label: 'Configuration',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'DM List', icon: 'pi pi-fw pi-align-left' },
                    { label: 'CCB List', icon: 'pi pi-fw pi-align-right' }
                ]
            }
        ];


    }

}
