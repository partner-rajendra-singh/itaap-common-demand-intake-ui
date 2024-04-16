import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  constructor(private authService: AuthService){}

    ngOnInit() {

        this.items = [
            {
                label: 'Demand',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'New', icon: 'pi pi-fw pi-plus', routerLink: ["/demand-intake"], visible: this.authService.isRequester() },
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

}
