import { Component, OnInit } from '@angular/core';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { catchError, map, throwError } from 'rxjs';
import { Demand } from '../../models/demand';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { AllDemands } from '../../models/all-demands';
import { EventService } from '../../services/event.service';
import { DemandCategory } from '../../enums/demand-category';
import { DemandStatusFilter } from '../../enums/demand-status-filter';
import { DemandStatus } from '../../enums/demand-status';

@Component({
  selector: 'app-view-demands',
  templateUrl: './view-demands.component.html'
})
export class ViewDemandsComponent implements OnInit {
  allDemands: AllDemands = new AllDemands;
  errorData: any;
  columns!: any;
  selectedDemand!: Demand;
  isRequester: boolean = false;
  demandCategories!: string[];
  selectedDemandCategory!: string;
  allCurrentMyDemands: Demand[] = [];
  allCurrentMyDemandsAsSH: Demand[] = [];
  allCurrentPendingDemands: Demand[] = [];
  demandStatusList!: string[];
  selectedDemandStatus!: string;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private messageService: MessageService, private router: Router, public eventService: EventService) { }

  ngOnInit() {
    this.fetchAllDemands();
    this.demandCategories = Object.values(DemandCategory);
    this.selectedDemandCategory = DemandCategory.ACTION_IN_PROGRESS;
    this.demandStatusList = Object.keys(DemandStatusFilter);
    this.selectedDemandStatus = DemandStatusFilter.ALL;

    // console.log("ViewDemandsComponent isMyDemand", this.eventService.isMyDemand)
    this.isRequester = this.authService.isRequester();
    if (!this.isRequester) {
      this.eventService.selectedDemandTabIndex = 1;
    }
  }

  fetchAllDemands() {
    this.demandIntakeService.getAllDemands().pipe(
      map((response: any) => {
        console.log('View getAllDemands() : Response -> ', response);
        this.allDemands = response;
        this.onCategoryChange();
        this.errorData = "";
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('View getAllDemands() : ERROR -> ', error);
        this.errorData = JSON.stringify(error.error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  onStatusChange() {
    this.selectedDemandCategory = 'ALL';
    this.allCurrentMyDemands = this.allDemands.myDemands;
    this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
    this.allCurrentPendingDemands = this.allDemands.pendingDemands;

    if (this.selectedDemandStatus != 'ALL') {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => this.selectedDemandStatus === item.introduction.status);
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => this.selectedDemandStatus === item.introduction.status);
      this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => this.selectedDemandStatus === item.introduction.status);
    }
  }

  onCategoryChange() {
    this.selectedDemandStatus = 'ALL';
    // console.log("Tab index -> category", this.eventService.selectedDemandTabIndex, this.selectedDemandCategory)
    let statusList: string[];
    let myStatusList: string[];
    if (this.authService.isRequester()) {
      statusList = [DemandStatus.DRAFT];
      myStatusList = [DemandStatus.DRAFT, DemandStatus.DM_MODIFICATION, DemandStatus.CCB_MODIFICATION];
    } else if (this.authService.isDM()) {
      statusList = [DemandStatus.PENDING_WITH_DM, DemandStatus.DM_HOLD, DemandStatus.PENDING_WITH_CCB];
      myStatusList = [DemandStatus.DRAFT, DemandStatus.DM_MODIFICATION, DemandStatus.CCB_MODIFICATION];
    } else if (this.authService.isCCB()) {
      statusList = [DemandStatus.PENDING_WITH_CCB, DemandStatus.CCB_HOLD];
      myStatusList = [DemandStatus.DRAFT, DemandStatus.DM_MODIFICATION, DemandStatus.CCB_MODIFICATION];
    }

    //filtering demands
    this.allCurrentMyDemands = this.allDemands.myDemands;
    this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
    this.allCurrentPendingDemands = this.allDemands.pendingDemands;

    if (this.selectedDemandCategory == DemandCategory.ACTION_IN_PROGRESS) {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => myStatusList.find(s => s == item.introduction.status));
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => myStatusList.find(s => s == item.introduction.status));
      this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => statusList.find(s => s == item.introduction.status));

      let actionInProgressList: Demand[] = [];
      if (this.authService.isDM()) {

        this.allCurrentPendingDemands.filter(item => item.introduction.status === DemandStatus.PENDING_WITH_CCB);

        this.allCurrentPendingDemands.forEach(demand => {

          if (demand.introduction.status !== DemandStatus.PENDING_WITH_CCB) {
            actionInProgressList.push(demand);
          } else {
            let dmList = demand.solutionDirectionInfo.filter(item => {
              if (item.decision != null && item.dmEmail === this.authService.currentUserValue.email && item.decision !== 'APPROVED' && item.decision !== 'REJECTED') {
                actionInProgressList.push(demand);
              }
            });

          }
        });
        // console.log("actionInProgressList", actionInProgressList)
        this.allCurrentPendingDemands = actionInProgressList;
        // console.log("this.allCurrentPendingDemands 1", this.allCurrentPendingDemands)
      }

    } else if (this.selectedDemandCategory == DemandCategory.ACTION_COMPLETED) {
      this.allCurrentMyDemands = this.allCurrentMyDemands.filter(item => !myStatusList.find(s => s == item.introduction.status));
      this.allCurrentMyDemandsAsSH = this.allCurrentMyDemandsAsSH.filter(item => !myStatusList.find(s => s == item.introduction.status));

      let actionDoneList: Demand[] = [];
      if (this.authService.isDM()) {
        this.allCurrentPendingDemands.forEach(demand => {
          let dmList = demand.solutionDirectionInfo.filter(item => item.dmEmail === this.authService.currentUserValue.email && (item.decision === 'APPROVED' || item.decision === 'REJECTED'));
          if (dmList.length > 0) {
            actionDoneList.push(demand);
          }
        });
        // console.log("actionDoneList", actionDoneList)
        this.allCurrentPendingDemands = actionDoneList;
        // console.log("this.allCurrentPendingDemands 1", this.allCurrentPendingDemands)
      } else {
        this.allCurrentPendingDemands = this.allCurrentPendingDemands.filter(item => !statusList.find(s => s == item.introduction.status));
      }

    }

  }

  onTabChange(event: any) {
    this.eventService.selectedDemandTabIndex = event.index;
  }

  onDemandSelect(event: any, isMyDemand: boolean, isStakeholderDemand: boolean) {
    // console.log("selectedDemand, isMyDemand, isStakeholderDemand", this.selectedDemand, isMyDemand, isStakeholderDemand)
    this.eventService.isMyDemand = isMyDemand;
    this.eventService.isStakeholderDemand = isStakeholderDemand;
    this.eventService.isNewDemand = false;
    this.eventService.solutionDirectionValue = new Array();
    this.eventService.selectedDemandTabIndex = 0;
    this.eventService.selectedEADITabIndex = 0;
    this.eventService.selectedRequirementsTabIndex = 0;

    this.demandIntakeService.setDemand(this.selectedDemand, false);
    this.router.navigate(['/demand-intake/' + this.selectedDemand.introduction.demandIntakeId]);
  }
}
