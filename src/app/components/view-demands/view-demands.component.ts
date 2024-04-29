import { Component } from '@angular/core';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { catchError, map, throwError } from 'rxjs';
import { Demand } from 'src/app/models/demand';
import { MessageService } from 'primeng/api';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AllDemands } from 'src/app/models/all-demands';
import { EventService } from 'src/app/services/event.service';

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
  
  constructor(private authService: AuthService, private demandIntakeService: DemandIntakeService, private messageService: MessageService, private router: Router, public eventService: EventService) { }

  ngOnInit() {

    console.log("ViewDemandsComponent isMyDemand", this.eventService.isMyDemand)
    this.isRequester = this.authService.isRequester();
    if (!this.isRequester) {
      this.eventService.selectedDemandTabIndex = 1;
    }

    this.demandIntakeService.getAllDemands().pipe(
      map((response: any) => {
        this.allDemands = response;
        this.setStatusLabel();

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

  setStatusLabel() {
    this.allDemands.myDemands.forEach(demand => {
      demand.introduction.statusLabel = this.getDemandStatus(demand.introduction.status);
    });

    this.allDemands.pendingDemands.forEach(demand => {
      demand.introduction.statusLabel = this.getDemandStatus(demand.introduction.status);
    });
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

  onDemandSelect(event: any, isMyDemand: boolean) {
    console.log("selectedDemand: ", this.selectedDemand, isMyDemand)
    this.eventService.isMyDemand = isMyDemand;
    this.eventService.isNewDemand = false;
    this.demandIntakeService.setDemand(this.selectedDemand, false);

    this.router.navigate(['/demand-intake/']);
  }


}
