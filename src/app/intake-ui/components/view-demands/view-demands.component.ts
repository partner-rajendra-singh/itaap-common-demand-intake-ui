import { Component } from '@angular/core';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { catchError, map, throwError } from 'rxjs';
import { Demand } from '../../models/demand';
import { MessageService } from 'primeng/api';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AllDemands } from '../../models/all-demands';
import { EventService } from '../../services/event.service';
import { DemandCategory } from '../../enums/demandCategory';

@Component({
  selector: 'app-view-demands',
  templateUrl: './view-demands.component.html'
})
export class ViewDemandsComponent {
  allDemands: AllDemands = new AllDemands;
  errorData: any;
  columns!: any;
  selectedDemand!: Demand;
  isRequester: boolean = false;
  demandCategories!: string[];
  selectedDemandCategory!: string;
  allCurrentMyDemands!: Demand[];
  allCurrentMyDemandsAsSH!: Demand[];
  allCurrentPendingDemands!: Demand[];
  currentMyDemandCount: number = 0;
  currentMyDemandAsSHCount: number = 0;
  currentPendingDemandCount: number = 0;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private messageService: MessageService, private router: Router, public eventService: EventService) { }

  ngOnInit() {

    this.demandCategories = Object.values(DemandCategory);
    this.selectedDemandCategory = DemandCategory.ALL;

    console.log("ViewDemandsComponent isMyDemand", this.eventService.isMyDemand)
    this.isRequester = this.authService.isRequester();
    if (!this.isRequester) {
      this.eventService.selectedDemandTabIndex = 1;
    }

    this.fetchAllDemands();

  }

  fetchAllDemands() {
    this.demandIntakeService.getAllDemands().pipe(
      map((response: any) => {
        this.allDemands = response;
        this.setStatusLabel();
        this.onCategoryChange();

        this.errorData = "";
        console.log('getAllDemands() Response :', this.allDemands);
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('Error', error);
        this.errorData = JSON.stringify(error.error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  onCategoryChange() {
    console.log("Tab index -> category", this.eventService.selectedDemandTabIndex, this.selectedDemandCategory)

    let statusList: string[];
    if (this.authService.isRequester()) {
      statusList = ["DRAFT"];
    } else if (this.authService.isDM()) {
      statusList = ["PENDING_WITH_DM", "DM_HOLD", "PENDING_WITH_CCB"];
    } else if (this.authService.isCCB()) {
      statusList = ["PENDING_WITH_CCB", "CCB_HOLD"];
    }

    //filtering demands
    this.allCurrentMyDemands = this.allDemands.myDemands;
    this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
    this.allCurrentPendingDemands = this.allDemands.pendingDemands;

    if (this.selectedDemandCategory == DemandCategory.IN_PROGRESS) {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => statusList.find(s => s == item.introduction.status));
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => statusList.find(s => s == item.introduction.status));
      this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => statusList.find(s => s == item.introduction.status));

    } else if (this.selectedDemandCategory == DemandCategory.COMPLETED) {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => !statusList.find(s => s == item.introduction.status));
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => !statusList.find(s => s == item.introduction.status));
      this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => !statusList.find(s => s == item.introduction.status));
    }

  }

  onTabChange(event: any) {
    this.eventService.selectedDemandTabIndex = event.index;
  }

  setStatusLabel() {
    this.allDemands.myDemands.forEach(demand => {
      demand.introduction.statusLabel = this.getDemandStatus(demand.introduction.status);
    });

    this.allDemands.pendingDemands.forEach(demand => {
      demand.introduction.statusLabel = this.getDemandStatus(demand.introduction.status);
    });

    if (this.allDemands.stakeholderDemands != undefined) {
      this.allDemands.stakeholderDemands.forEach(demand => {
        demand.introduction.statusLabel = this.getDemandStatus(demand.introduction.status);
      });
    }
  }

  getDemandStatus(status: string): string {
    switch (status) {
      case "DRAFT": return "Draft";
      case "PENDING_WITH_DM": return "Pending with Demand Manager";
      case "DM_HOLD": return "Demand Manager kept on Hold";
      case "PENDING_WITH_CCB": return "Pending with CCB";
      case "CCB_HOLD": return "CCB Member kept on Hold";
      case "ACCEPTED": return "Accepted";
      case "REJECTED": return "Rejected";
    }
    return status;
  }

  onDemandSelect(event: any, isMyDemand: boolean, isStakeholderDemand: boolean) {
    console.log("selectedDemand, isMyDemand, isStakeholderDemand", this.selectedDemand, isMyDemand, isStakeholderDemand)
    this.eventService.isMyDemand = isMyDemand;
    this.eventService.isStakeholderDemand = isStakeholderDemand;
    this.eventService.isNewDemand = false;
    this.demandIntakeService.setDemand(this.selectedDemand, false);

    this.router.navigate(['/demand-intake/' + this.selectedDemand.introduction.demandIntakeId]);
  }


}
