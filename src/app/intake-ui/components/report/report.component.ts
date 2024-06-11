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
  reportResult!: any;
  errorData!: string;

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

  refreshReport() {
    this.reportResult = "";
    this.reportInfo = new ReportRequest;
    this.selectedDemandStatus = DemandStatusFilter.ALL;
    this.selectedSolutionDirectionList = "";
  }

  getSDKey(value: string): string {
    const index = Object.values(ApproverDomain).indexOf(value as unknown as ApproverDomain);
    return Object.keys(ApproverDomain)[index];
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.reportResult);
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
