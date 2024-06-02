import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';
import { map, catchError, throwError } from 'rxjs';
import { AllDemands } from '../../models/all-demands';
import { Demand } from '../../models/demand';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  decisions!: string[];
  selectedDecision!: string;
  ccbInfo!: any;
  visibleSubmitButton: boolean = true;
  allDemands: AllDemands = new AllDemands;
  errorData: any;
  selectedDemand!: Demand;
  allCurrentMyDemands!: Demand[];
  allCurrentMyDemandsAsSH!: Demand[];
  allCurrentPendingDemands!: Demand[];

  allDraftDemands: Demand[] = [];
  allPendingDemands: Demand[] = [];
  allAcceptedDemands: Demand[] = [];
  allRejectedDemands: Demand[] = [];

  constructor(public eventService: EventService,
    public demandIntakeService: DemandIntakeService,
    public router: Router,
    private messageService: MessageService,
    public authService: AuthService) { }

  ngOnInit() {
    this.fetchAllDemands();
  }
  populateDemands() {
    this.allDraftDemands = this.allCurrentMyDemands.filter(item => 'DRAFT' === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => 'DRAFT' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'DRAFT' === item.introduction.status)
      );
    this.allPendingDemands = this.allCurrentMyDemands.filter(item => 'PENDING_WITH_DM' === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => 'PENDING_WITH_DM' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'PENDING_WITH_DM' === item.introduction.status),

        this.allCurrentMyDemands.filter(item => 'DM_HOLD' === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => 'DM_HOLD' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'DM_HOLD' === item.introduction.status),

        this.allCurrentMyDemands.filter(item => 'PENDING_WITH_CCB' === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => 'PENDING_WITH_CCB' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'PENDING_WITH_CCB' === item.introduction.status),

        this.allCurrentMyDemands.filter(item => 'CCB_HOLD' === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => 'CCB_HOLD' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'CCB_HOLD' === item.introduction.status),

      );
    this.allAcceptedDemands = this.allCurrentMyDemands.filter(item => 'ACCEPTED' === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => 'ACCEPTED' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'ACCEPTED' === item.introduction.status)
      );
    this.allRejectedDemands = this.allCurrentMyDemands.filter(item => 'REJECTED' === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => 'REJECTED' === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => 'REJECTED' === item.introduction.status)
      );
  }

  fetchAllDemands() {
    this.demandIntakeService
      .getAllDemands()
      .pipe(
        map((response: any) => {
          this.eventService.progressBarEvent.emit(false);
          this.allDemands = response;
          this.errorData = "";
          console.log('getAllDemands() Response :', this.allDemands);
          this.allCurrentMyDemands = this.allDemands.myDemands;
          this.allCurrentMyDemandsAsSH = this.allDemands.stakeholderDemands;
          this.allCurrentPendingDemands = this.allDemands.pendingDemands;
          this.populateDemands();
        }),
        catchError((error: any) => {
          console.log('Error', error);
          this.errorData = JSON.stringify(error.error);
          this.eventService.progressBarEvent.emit(false);
          return throwError(error);
        })
      )
      .subscribe();
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
