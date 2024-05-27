import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { AuthService } from 'src/app/intake-ui/services/auth.service';
import { DemandIntakeService } from 'src/app/intake-ui/services/demand-intake.service';
import { EventService } from 'src/app/intake-ui/services/event.service';
import { Demand } from 'src/app/intake-ui/models/demand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(private router: Router,
    public layoutService: LayoutService,
    private authService: AuthService,
    private demandIntakeService: DemandIntakeService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Demand',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus', command: () => this.newDemand() },
          { label: 'View', icon: 'pi pi-fw pi-search', routerLink: ["/view"] },
          { label: 'Report', icon: 'pi pi-fw pi-file-excel', routerLink: ["/report"], visible: false },
          { label: 'Chart', icon: 'pi pi-chart-pie', routerLink: ["/chart"], visible: true }
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
      // {
      //   label: 'Logout',
      //   icon: 'pi pi-power-off',
      //   routerLink: ["/logout"]
      // }
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
