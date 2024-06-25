import { Component, OnInit } from '@angular/core';
import { ReportRequest } from '../../models/report-request';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../auth/auth.service';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { DemandStatusFilter } from '../../enums/demand-status-filter';
import { ApproverDomain } from '../../enums/approver-domain';
import * as FileSaver from 'file-saver';
import { catchError, map, throwError } from 'rxjs';
import { ReportResult } from '../../models/report-result';
import { SolutionDirection } from '../../models/solution-direction';
import { SolutionDirection1 } from '../../models/solution-direction1';
import { DemandIntakeDecision } from '../../enums/demand-intake-decision';
import { RequesterDomain } from '../../enums/requesterDomain';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {

  reportInfo !: ReportRequest;
  demandStatusList!: string[];
  selectedDemandStatus!: string;
  solutionDirectionList!: string[];
  selectedSolutionDirectionList: any = '';
  // stakeholderList: string = '';
  selectedDemand!: any;
  reportResult: ReportResult[] = [];
  errorData!: string;
  uiReportResult: ReportResult[] = [];

  constructor(public authService: AuthService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public eventService: EventService) { }

  ngOnInit(): void {
    this.reportInfo = new ReportRequest;
    this.demandStatusList = Object.keys(DemandStatusFilter);
    this.selectedDemandStatus = DemandStatusFilter.ALL;
    this.solutionDirectionList = Object.values(ApproverDomain);
  }

  onStatusChange() {
    // console.log("selectedDemandStatus", this.selectedDemandStatus)
    this.reportInfo.status = this.selectedDemandStatus;
  }

  generateReport() {
    this.eventService.progressBarEvent.emit(true);
    // console.log("generateReport ", this.reportInfo)

    if (this.authService.isRequester()) {
      this.reportInfo.raisedBy = this.authService.currentUserValue.email;
    }

    let temp: string[] = [];
    if (this.selectedSolutionDirectionList != '') {
      this.reportInfo.solutionDirectionList = this.selectedSolutionDirectionList;
      this.reportInfo.solutionDirectionList.forEach(item => {
        temp.push(this.getSDKey(item));
      });
      this.reportInfo.solutionDirectionList = temp;
    }

    // if (this.stakeholderList != '') {
    //   console.log("this.selectedSolutionDirectionList", this.selectedSolutionDirectionList)
    //   this.reportInfo.stakeholderList = this.stakeholderList.split(',');
    // }

    this.demandIntakeService.generateReport(this.reportInfo).pipe(
      map((response: any) => {
        console.log("generateReport() : Response -> ", response)
        this.reportResult = response;
        this.uiReportResult = this.reportResult;

        //Remove duplicates
        this.uiReportResult = [...new Map(this.uiReportResult.map(item => [item['demandIntakeId'], item])).values()];

        this.errorData = "";
        this.eventService.progressBarEvent.emit(false);

      }),
      catchError((error: any) => {
        console.log('generateReport() : ERROR', error);
        this.errorData = JSON.stringify(error.error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  formatValues(reportResult : ReportResult[]){
    reportResult.forEach(item => {
      item.status = this.getStatusValue(item.status);
      item.solution = this.getSolutionValue(item.solution);
      item.dmDecision = this.getDecisionValue(item.dmDecision);
      item.ccbDecision = this.getDecisionValue(item.ccbDecision);
      item.requesterDomain = this.getRequesterDomainValue(item.requesterDomain);
    })

    return reportResult;
  }

  getStatusValue(key: string): string {
    const status = Object.keys(DemandStatusFilter).indexOf(key as unknown as DemandStatusFilter);
    let s = Object.values(DemandStatusFilter)[status];
    return s;
  }

  getSolutionValue(key: string): string {
    const status = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
    let s = Object.values(ApproverDomain)[status];
    return s;
  }

  getDecisionValue(key: string): string {
    const status = Object.keys(DemandIntakeDecision).indexOf(key as unknown as DemandIntakeDecision);
    let s = Object.values(DemandIntakeDecision)[status];
    return s;
  }

  getRequesterDomainValue(key: string): string {
    const status = Object.keys(RequesterDomain).indexOf(key as unknown as RequesterDomain);
    let s = Object.values(RequesterDomain)[status];
    return s;
  }

  refreshReport() {
    this.reportResult = [];
    this.uiReportResult = [];
    this.reportInfo = new ReportRequest;
    this.selectedDemandStatus = DemandStatusFilter.ALL;
    this.selectedSolutionDirectionList = "";
  }

  getSDKey(value: string): string {
    const index = Object.values(ApproverDomain).indexOf(value as unknown as ApproverDomain);
    return Object.keys(ApproverDomain)[index];
  }

  onSolutionChange(){

    let temp: string[] = [];
    if (this.selectedSolutionDirectionList != '') {
      this.reportInfo.solutionDirectionList = this.selectedSolutionDirectionList;
      this.reportInfo.solutionDirectionList.forEach(item => {
        temp.push(this.getSDKey(item));
      });
    }
    
    this.reportInfo.solutionDirectionList = temp;
  }

  exportExcel() {
    let downloadData = this.reportResult.map(object => ({ ...object }))
    // let downloadData = this.reportResult;
    downloadData = this.formatValues(downloadData);
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(downloadData);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer);
    });
  }

  saveAsExcelFile(buffer: any): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });

    FileSaver.saveAs(data, 'Demand_Report_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
