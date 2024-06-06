import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {MessageService} from 'primeng/api';
import {AuthService} from '../../services/auth.service';
import {EventService} from '../../services/event.service';
import {map, catchError, throwError} from 'rxjs';
import {AllDemands} from '../../models/all-demands';
import {Demand} from '../../models/demand';
import {DemandStatus} from '../../enums/demand-status';
import {FieldsService} from "../../services/fields.service";


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

  data: any;
  options: any;

  dataStageITaaP: any;
  optionsStageITaaP: any;
  
  dataStatusITaaP: any;
  optionsStatusITaaP: any;

  dataQuarterITaaP: any;
  optionsQuarterITaaP: any;

  dataMonthITaaP: any;
  optionsMonthITaaP: any;

  constructor(public eventService: EventService,
              public demandIntakeService: DemandIntakeService,
              public fieldsService: FieldsService,
              public router: Router,
              private messageService: MessageService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.fetchAllDemands();
    this.fetchAllFields();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--teal-600'),
          borderColor: documentStyle.getPropertyValue('--teal-600'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--teal-200'),
          borderColor: documentStyle.getPropertyValue('--teal-200'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.dataStageITaaP = {
      labels: ['Draft', 'DM', 'CCB'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
    };
    this.optionsStageITaaP = {
      cutout: '50%',
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      }
    };
  
    this.dataStatusITaaP = {
      labels: ['Approved', 'Pending', 'Rejected'],
      datasets: [
          {
              data: [100, 200, 50],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
    };

    this.optionsStatusITaaP = {
      cutout: '50%',
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      }
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };


    this.dataMonthITaaP = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
          {
              type: 'bar',
              label: 'Draft',
              backgroundColor: documentStyle.getPropertyValue('--blue-500'),
              data: [50, 25, 12, 48, 90, 76, 42, 90, 76, 42, 90, 76]
          },
          {
              type: 'bar',
              label: 'Pending',
              backgroundColor: documentStyle.getPropertyValue('--green-500'),
              data: [21, 84, 24, 75, 37, 65, 34, 24, 75, 37, 65, 34]
          },
          {
              type: 'bar',
              label: 'Completed',
              backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
              data: [41, 52, 24, 74, 23, 21, 32, 24, 75, 37, 65, 34]
          }
      ]
  };

    
    this.dataQuarterITaaP = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                type: 'bar',
                label: 'Draft',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                data: [ 76, 42, 90, 76]
            },
            {
                type: 'bar',
                label: 'Pending',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [ 65, 34, 24, 75]
            },
            {
                type: 'bar',
                label: 'Completed',
                backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                data: [41, 52, 24, 74]
            }
        ]
    };

    this.optionsQuarterITaaP = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

  }

  populateDemands() {
    this.allDraftDemands = this.allCurrentMyDemands.filter(item => DemandStatus.DRAFT === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => DemandStatus.DRAFT === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.DRAFT === item.introduction.status)
      );
    this.allPendingDemands = this.allCurrentMyDemands.filter(item => DemandStatus.PENDING_WITH_DM === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => DemandStatus.PENDING_WITH_DM === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.PENDING_WITH_DM === item.introduction.status),

        this.allCurrentMyDemands.filter(item => DemandStatus.DM_HOLD === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => DemandStatus.DM_HOLD === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.DM_HOLD === item.introduction.status),

        this.allCurrentMyDemands.filter(item => DemandStatus.PENDING_WITH_CCB === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => DemandStatus.PENDING_WITH_CCB === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.PENDING_WITH_CCB === item.introduction.status),

        this.allCurrentMyDemands.filter(item => DemandStatus.CCB_HOLD === item.introduction.status),
        this.allCurrentPendingDemands.filter(item => DemandStatus.CCB_HOLD === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.CCB_HOLD === item.introduction.status),
      );
    this.allAcceptedDemands = this.allCurrentMyDemands.filter(item => DemandStatus.ACCEPTED === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => DemandStatus.ACCEPTED === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.ACCEPTED === item.introduction.status)
      );
    this.allRejectedDemands = this.allCurrentMyDemands.filter(item => DemandStatus.DM_REJECTED === item.introduction.status || DemandStatus.CCB_REJECTED === item.introduction.status)
      .concat(
        this.allCurrentPendingDemands.filter(item => DemandStatus.DM_REJECTED === item.introduction.status || DemandStatus.CCB_REJECTED === item.introduction.status),
        this.allCurrentMyDemandsAsSH.filter(item => DemandStatus.DM_REJECTED === item.introduction.status || DemandStatus.CCB_REJECTED === item.introduction.status)
      );
  }

  fetchAllFields() {
    this.fieldsService.getAllFields();
  }

  fetchAllDemands() {
    this.demandIntakeService
      .getAllDemands()
      .pipe(
        map((response: any) => {
          this.eventService.progressBarEvent.emit(false);
          this.allDemands = response;
          this.errorData = "";
          console.log('Dashboard getAllDemands() Response :', this.allDemands);
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
