import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {AuthService} from '../../auth/auth.service';
import {EventService} from '../../services/event.service';
import {catchError, map, throwError} from 'rxjs';
import {AllDemands} from '../../models/all-demands';
import {DemandStatus} from '../../enums/demand-status';
import {FieldsService} from "../../services/fields.service";
import {ViewDemands} from "../../models/view-demands";
import {Introduction} from "../../models/introduction";
import {MessageService} from "primeng/api";
import {ChartsService} from "../../services/charts.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  allDemands: AllDemands = new AllDemands;
  viewDemands: ViewDemands = new ViewDemands;
  errorData: any;
  viewCurrentMyDemands!: Introduction[];
  viewCurrentMyDemandsAsSH!: Introduction[];
  viewCurrentPendingDemands!: Introduction[];

  viewDraftDemands: Introduction[] = [];
  viewPendingDemands: Introduction[] = [];
  viewStakeholderDemands: Introduction[] = [];
  viewCompletedDemands: Introduction[] = [];

  documentStyle: any;
  yearlyData: any;
  quarterlyData: any;
  yearOptions: any;
  quarterOptions: any;
  todayDate: Date = new Date();

  fromDate: Date = new Date(new Date().getFullYear(), 0, 1);
  toDate: Date = new Date();

  constructor(public eventService: EventService,
              public demandIntakeService: DemandIntakeService,
              public fieldsService: FieldsService,
              public chartsService: ChartsService,
              public router: Router,
              private messageService: MessageService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.documentStyle = getComputedStyle(document.documentElement);
    const textColor = this.documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
    this.quarterOptions = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
    this.yearOptions = {
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
    this.fetchAllFields();
    this.fetchAllDemands();

    this.updateChart();
    this.getQuarterlyChartData();
  }

  populateDemands() {
    this.viewDraftDemands = this.viewCurrentMyDemands.filter(item => DemandStatus.DRAFT === item.status)
      .concat(
        this.viewCurrentPendingDemands.filter(item => DemandStatus.DRAFT === item.status)
      );
    this.viewPendingDemands = this.viewCurrentMyDemands.filter(item => DemandStatus.PENDING_WITH_DM === item.status)
      .concat(
        this.viewCurrentPendingDemands.filter(item => DemandStatus.PENDING_WITH_DM === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.PENDING_WITH_DM === item.status),

        this.viewCurrentMyDemands.filter(item => DemandStatus.DM_HOLD === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.DM_HOLD === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.DM_HOLD === item.status),

        this.viewCurrentMyDemands.filter(item => DemandStatus.DM_MODIFICATION === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.DM_MODIFICATION === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.DM_MODIFICATION === item.status),

        this.viewCurrentMyDemands.filter(item => DemandStatus.PENDING_WITH_CCB === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.PENDING_WITH_CCB === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.PENDING_WITH_CCB === item.status),

        this.viewCurrentMyDemands.filter(item => DemandStatus.CCB_HOLD === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.CCB_HOLD === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.CCB_HOLD === item.status),

        this.viewCurrentMyDemands.filter(item => DemandStatus.CCB_MODIFICATION === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.CCB_MODIFICATION === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.CCB_MODIFICATION === item.status)
      );

    this.viewStakeholderDemands = this.viewCurrentMyDemandsAsSH;

    this.viewCompletedDemands = this.viewCurrentMyDemands.filter(item => DemandStatus.DM_REJECTED === item.status || DemandStatus.CCB_REJECTED === item.status)
      .concat(
        this.viewCurrentMyDemands.filter(item => DemandStatus.ACCEPTED === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.ACCEPTED === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.ACCEPTED === item.status),
        this.viewCurrentMyDemands.filter(item => DemandStatus.DM_REJECTED === item.status || DemandStatus.CCB_REJECTED === item.status),
        this.viewCurrentPendingDemands.filter(item => DemandStatus.DM_REJECTED === item.status || DemandStatus.CCB_REJECTED === item.status),
        this.viewCurrentMyDemandsAsSH.filter(item => DemandStatus.DM_REJECTED === item.status || DemandStatus.CCB_REJECTED === item.status)
      );
  }

  fetchAllFields() {
    this.fieldsService.getAllFields();
  }

  fetchAllDemands() {
    this.demandIntakeService
      .getViewAllDemands()
      .pipe(
        map((response: ViewDemands) => {
          this.eventService.progressBarEvent.emit(false);
          this.viewDemands = response;
          this.errorData = "";
          console.log('Dashboard getAllDemands(): Response -> ', this.allDemands);
          this.viewCurrentMyDemands = this.viewDemands.myDemands;
          this.viewCurrentMyDemandsAsSH = this.viewDemands.stakeholderDemands;
          this.viewCurrentPendingDemands = this.viewDemands.pendingDemands;
          this.populateDemands();
        }),
        catchError((error: any) => {
          console.log('Dashboard getAllDemands() : ERROR -> ', error);
          this.errorData = JSON.stringify(error.error);
          this.eventService.progressBarEvent.emit(false);
          return throwError(error);
        })
      )
      .subscribe();
  }

  populateDemand(demand: Introduction) {
    this.demandIntakeService
      .getDemandByDemandId(demand.demandIntakeId)
      .subscribe(response => {
        console.info("onDemandSelect() : SUCCESS : " + demand.demandIntakeId, response);
        this.demandIntakeService.setDemand(response, false);
        this.eventService.progressBarEvent.emit(false);
        this.router.navigate(['/demand-intake/introduction/' + demand.demandIntakeId]);
      }, error => {
        console.info("onDemandSelect() : ERROR : " + demand.demandIntakeId, error)
        this.eventService.progressBarEvent.emit(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Demand [' + demand.demandIntakeId + '] Failed to load : with error ' + error.statusText,
          life: 3000
        });
      })
  }

  updateChart() {
    this.chartsService
      .getYearlyChart(this.fromDate, this.toDate)
      .subscribe(response => {
          this.eventService.progressBarEvent.emit(false);
          console.log(response);
          this.populateYearChartData(response);
        },
        error => {
          this.eventService.progressBarEvent.emit(false);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to load data : ' + error.statusText,
            life: 3000
          });
        });
  }

  getQuarterlyChartData() {
    this.chartsService
      .getQuarterlyChart()
      .subscribe(response => {
          this.eventService.progressBarEvent.emit(false);
          console.log(response);
          this.populateQuarterChartData(response);
        },
        error => {
          this.eventService.progressBarEvent.emit(false);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to load data : ' + error.statusText,
            life: 3000
          });
        });
  }

  populateQuarterChartData(response: any) {
    this.quarterlyData = {
      labels: response.labels,
      datasets: [
        {
          borderWidth: 1,
          data: [response.data['Q1'], response.data['Q2'], response.data['Q3'], response.data['Q4']],
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(46,217,191,0.2)', 'rgba(153, 102, 255, 0.2)'],
          hoverBackgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(46,217,191, 0.5)', 'rgba(153, 102, 255, 0.5)'],
          borderColor: ['rgba(54, 162, 235)', 'rgba(255, 159, 64)', 'rgba(46,217,191)', 'rgba(153, 102, 255)']
        }
      ]
    };
  }

  populateYearChartData(response: any) {
    this.yearlyData = {
      labels: response.labels,
      datasets: [
        {
          type: 'bar',
          label: 'Demands',
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(46,217,191,0.2)',
            'rgba(153, 102, 255, 0.2)', 'rgba(94,165,19,0.2)', 'rgba(205,32,32,0.2)'],
          borderColor: [
            'rgba(54, 162, 235)', 'rgba(255, 159, 64)', 'rgba(46,217,191)',
            'rgba(153, 102, 255)', 'rgba(94,165,19)', 'rgba(205,32,32)'],
          borderWidth: 1,
          data: [response.data['Draft'], response.data['Pending'], response.data['On Hold'], response.data['Modification'], response.data['Accepted'], response.data['Rejected']]
        }
      ]
    };
  }
}
