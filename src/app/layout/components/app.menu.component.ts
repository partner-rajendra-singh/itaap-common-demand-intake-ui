import { Injector, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { AuthService } from 'src/app/intake-ui/services/auth.service';
import { DemandIntakeService } from 'src/app/intake-ui/services/demand-intake.service';
import { EventService } from 'src/app/intake-ui/services/event.service';
import { Demand } from 'src/app/intake-ui/models/demand';
import { Router } from '@angular/router';
import { DemandIntakeComponent } from 'src/app/intake-ui/components/demand-intake/demand-intake.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  providers: [DemandIntakeComponent]
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(private router: Router,
    public layoutService: LayoutService,
    private authService: AuthService,
    private demandIntakeService: DemandIntakeService,
    private eventService: EventService,
    private injector: Injector
  ) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Dashboard', icon: 'pi pi-chart-pie', routerLink: ["/dashboard"] },
        ],
        expanded: true
      },
      {
        label: 'Demand',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus', command: () => this.newDemand() },
          { label: 'View', icon: 'pi pi-fw pi-search', routerLink: ["/view"] },
          { label: 'Report', icon: 'pi pi-fw pi-file-excel', routerLink: ["/report"], visible: true },
          { label: 'Chart', icon: 'pi pi-chart-pie', routerLink: ["/chart"], visible: true }
        ],
        expanded: true
      },
      {
        label: 'Configuration',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'DM List', icon: 'pi pi-fw pi-align-left', routerLink: ["/dmcrud"] },
          { label: 'CCB List', icon: 'pi pi-fw pi-align-right', routerLink: ["/ccbcrud"] },
          { label: 'Field Mgmt', icon: 'pi pi-fw pi-align-right', routerLink: ["/fieldmgmt"] }
        ],
        expanded: true,
        visible: this.authService.isAdmin()
      }
    ];
  }

  newDemand() {
    const componentRef = this.injector.get(DemandIntakeComponent);
    componentRef.ngOnDestroy();

    this.eventService.isNewDemand = true;
    this.eventService.isMyDemand = true;
    this.eventService.isStakeholderDemand = false;
    console.log("MenuComponent1 isNewDemand, isMyDemand ", this.eventService.isNewDemand, this.eventService.isMyDemand);

    this.eventService.solutionDirectionValue = new Array();
    this.eventService.selectedDemandTabIndex = 0;
    this.eventService.selectedEADITabIndex = 0;
    this.eventService.selectedRequirementsTabIndex = 0;

    this.demandIntakeService.setDemand(new Demand(), true);
    this.router.navigate(['/demand-intake/']);
  }
}
