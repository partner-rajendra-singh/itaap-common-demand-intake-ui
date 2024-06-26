import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Demand } from '../models/demand';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DM } from '../models/dm';
import { CCB } from '../models/ccb';
import { EADI } from '../models/eadi';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { AllDemands } from '../models/all-demands';
import { EventService } from './event.service';
import { Attachment } from '../models/attachment';
import { Introduction } from '../models/introduction';
import { DemandStatusFilter } from '../enums/demand-status-filter';
import { ArchitectAlignment } from '../models/architect-alignment';
import { ReportResult } from '../models/report-result';
import { DemandStatus } from '../enums/demand-status';
import { Constants } from "../constants";
import { ViewDemands } from "../models/view-demands";
import { Spoc } from '../models/spoc';


@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();
  attachments = Array(5);
  isNew!: boolean
  dmActionDone: boolean = false;

  constructor(public http: HttpClient,
    private router: Router,
    private constants: Constants,
    private authService: AuthService, private messageService: MessageService,
    private eventService: EventService) {
  }

  isCurrentLoggedUserStakeholder(): boolean {
    let isSH: boolean = false;
    this.demandInformation.requesterInfo.spoc.forEach(spoc => {
      if (spoc.email === this.authService.currentUserValue.email) {
        isSH = true;
      }
    });

    return isSH;
  }

  getDemandInformation() {
    return this.demandInformation;
  }

  setDemandInformation(demandInformation: any) {
    this.demandInformation = demandInformation;
  }

  setDemand(demand: Demand, isNew: boolean) {
    this.isNew = isNew;
    if (isNew) {
      this.attachments = [];
      this.demandInformation = new Demand();
    } else {

      if (this.authService.isDM() || this.authService.isCCB()) {
        if (demand.demandManagerInfo == null) {
          demand.demandManagerInfo = new DM;
        }
        if (demand.demandManagerInfo.decisionDate != null) {
          demand.demandManagerInfo.decisionDate = new Date(demand.demandManagerInfo.decisionDate);
        }

        if (demand.solutionDirectionInfo.length == 0) {
          demand.solutionDirectionInfo = [
            {
              solution: 'integration',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            },
            {
              solution: 'dataModelling',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            },
            {
              solution: 'adlL1',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            },
            {
              solution: 'adlL2',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            },
            {
              solution: 'gold',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            },
            {
              solution: 'mdm',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            }
            , {
              solution: 'ia',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            }
            , {
              solution: 'dataQuality',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            }, {
              solution: 'informatica',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            }, {
              solution: 'azureSynapse',
              value: false,
              dmEmail: '',
              decisionDate: new Date,
              decision: '',
              remarks: ''
            }];
        }

        if (demand.eADIInfo == null) {
          demand.eADIInfo = new EADI;
        }

        if (this.authService.isCCB()) {
          if (demand.ccbInfo == null) {
            demand.ccbInfo = new CCB;
          }
          if (demand.ccbInfo.decisionDate != null) {
            demand.ccbInfo.decisionDate = new Date(demand.ccbInfo.decisionDate);
          }
        }
      }

      if (demand.attachmentInfo == null) {
        demand.attachmentInfo = Array();
      }
      
      if (demand.architectAlignmentInfo == null) {
        demand.architectAlignmentInfo = Array(new ArchitectAlignment);
      }

      if(demand.requesterInfo.spoc.length == 0){
        demand.requesterInfo.spoc = Array(new Spoc);
      }

      demand.requesterInfo.requestedDate = new Date(demand.requesterInfo.requestedDate)
      demand.requirementFunctionalInfo.bglDate = new Date(demand.requirementFunctionalInfo.bglDate)
      this.demandInformation = demand;
    }

    // console.log("setDemand: ", this.demandInformation)
  }

  validateSpoc(): boolean {
    var result = true;
    this.demandInformation.requesterInfo.spoc.forEach(s => {
      if ((s.role != '' && s.email == '') || (s.role == '' && s.email != '')) {
        result = false;
      } else if (!this.eventService.checkEmailValue(s.email)) {
        result = false;
      }
    });

    return result;
  }

  validateAlignement(): boolean {
    var result = true;
    this.demandInformation.architectAlignmentInfo.forEach(s => {
      if (!this.eventService.checkEmailValue(s.email)) {
        result = false;
      }
    });

    return result;
  }

  public validateRequest(isSave: boolean): boolean {
    // console.log("validateRequest ", isSave)

    if (isSave) {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '') {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/introduction']);
        return false;
      }

    } else {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '' || !this.validateAlignement()) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/introduction']);
        return false;

      } else if (this.demandInformation.requesterInfo.requestedBy == '' && (this.demandInformation.requesterInfo.isDemandPOC && this.demandInformation.requesterInfo.project == '') && this.demandInformation.requesterInfo.requesterRole == '' || this.demandInformation.requesterInfo.market.length == 0 && this.demandInformation.requesterInfo.businessUnit.length == 0 && this.demandInformation.requesterInfo.domain == '' || !this.validateSpoc() || (this.demandInformation.requesterInfo.approvedBudget && this.demandInformation.requesterInfo.clarityProjectId == '')) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/requester']);
        return false;

      } else if (this.demandInformation.requirementFunctionalInfo.statement == '' || this.demandInformation.requirementFunctionalInfo.scope == '' || this.demandInformation.requirementFunctionalInfo.businessValue == '' || this.demandInformation.requirementFunctionalInfo.goLiveApproach == '') {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/requirement']);
        return false;
      }

      // if (this.authService.isDM() || this.authService.isCCB()) {
      //   let atleastOneSDSelected = this.demandInformation.solutionDirectionInfo.filter(item => item.value === true);
      //   let adlL1 = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'adlL1');
      //   let dataQuality = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'dataQuality');
      //
      //   if (this.authService.currentUserValue.domain.length > 0 && (atleastOneSDSelected.length == 0 || (adlL1 && adlL1.value && !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.adlL1.sourceEmail)))) {
      //     this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
      //     this.router.navigate(['demand-intake/checklist']);
      //     return false;
      //   } else if (this.authService.currentUserValue.domain.length > 0 && (atleastOneSDSelected.length == 0 || (dataQuality && dataQuality.value && (!this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.bpoEmail) || !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.dataCleaningSpocEmail))))) {
      //     this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
      //     this.router.navigate(['demand-intake/checklist']);
      //     return false;
      //   }
      // }

      if (this.authService.isDM() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.demandManagerInfo.decision == null || this.demandInformation.demandManagerInfo.remarks == '') {
          this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
          this.router.navigate(['demand-intake/demandmanager']);
          return false;
        }
      } else if (this.authService.isCCB() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.ccbInfo.decision == '' || this.demandInformation.ccbInfo.remarks == '') {
          this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
          this.router.navigate(['demand-intake/ccb']);
          return false;
        }
      }

    }
    return true;

  }

  saveDemand() {
    this.eventService.progressBarEvent.emit(true);
    console.log("saveDemand() : Request -> ", this.demandInformation);

    if (this.validateRequest(true)) {
      let url = this.baseUrl + '/common/demand-intake/save';
      return this
        .http
        .post<Introduction>(url, this.demandInformation, this.constants.headerOptions)
        .pipe(map(response => {
          this.eventService.progressBarEvent.emit(false);
          return response;
        }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return throwError(false);
    }

  }

  submitDemand() {
    this.eventService.progressBarEvent.emit(true);
    console.log("submitDemand() : Request -> ", this.demandInformation)

    if (this.validateRequest(false)) {

      if (this.authService.isDM() && this.demandInformation.demandManagerInfo.decisionBy == '') {

        this.demandInformation.demandManagerInfo.decisionBy = this.authService.currentUserValue.email;
      }
      if (this.authService.isCCB() && this.demandInformation.ccbInfo.decisionBy == '') {

        this.demandInformation.ccbInfo.decisionBy = this.authService.currentUserValue.email;
      }

      let url = this.baseUrl + '/common/demand-intake/submit';
      return this.http
        .post<any>(url, this.demandInformation, this.constants.headerOptions)
        .pipe(map(response => {
          this.eventService.progressBarEvent.emit(false);
          return response;
        }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return throwError(false);
    }

  }

  getAllDemands() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/all';
    return this.http.get<AllDemands>(url, this.constants.headerOptions);
  }

  getViewAllDemands(): Observable<ViewDemands> {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/view';
    return this.http.get<ViewDemands>(url, this.constants.headerOptions);
  }

  getDemandByDemandId(demandId: number): Observable<Demand> {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/' + demandId;
    return this.http.get<Demand>(url, this.constants.headerOptions);
  }


  getAllAttachmentsByDemandId(demandId: number) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/fetch/all/' + demandId;
    return this.http.get<Attachment[]>(url, this.constants.headerOptions);
  }

  getAttachmentsById(fileId: number) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/download/' + fileId;
    return this.http
      .get(url, {
        responseType: 'blob',
        observe: 'response',
        headers: new HttpHeaders({
          'X-Correlation-ID': this.constants.x_correlation_id,
        })
      });
  }

  deleteAttachmentsById(fileId: number) {
    let url = this.baseUrl + '/common/demand-intake/attachment/delete/' + fileId;
    return this.http.get<any>(url, this.constants.headerOptions);
  }

  updateDescAttachmentsById(fileId: number, desc: string) {
    let url = this.baseUrl + '/common/demand-intake/attachment/update/' + fileId + '?'
      + 'description=' + desc;
    return this.http.get<any>(url, this.constants.headerOptions);
  }

  insertHyperLink(desc: string, hyperlink: string) {
    return this.http.get<any>(this.getInsertHyperlinkURL(desc, hyperlink), this.constants.headerOptions);
  }

  getRequesterDomain() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/domain';
    return this.http.get(url, this.constants.headerOptions);
  }

  getInsertHyperlinkURL(desc: string, hyperlink: string) {
    return this.baseUrl
      + `/common/demand-intake/attachment/link/add/${this.demandInformation.introduction.demandIntakeId}` + '?'
      + `description=${desc}` + '&'
      + `hyperlink=${hyperlink}` + '&'
      + `uploaderRole=${this.authService.currentUserValue.role}`;
  }

  getAttachmentUploadURL() {
    return this.baseUrl
      + `/common/demand-intake/attachment/upload/${this.demandInformation.introduction.demandIntakeId}` + '?'
      + `uploadedBy=${this.authService.currentUserValue.email}` + '&'
      + `uploaderRole=${this.authService.currentUserValue.role}`
  }

  generateReport(request: any) {
    let url = this.baseUrl + '/common/demand-intake/report';
    return this.http
      .post<ReportResult>(url, request, this.constants.headerOptions)
      .pipe(map(response => {
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
  }

  getDemandStatusValueInLower(demandStatus: string) {
    if (demandStatus != null) {
      return demandStatus.toLowerCase();
    }
    return "";
  }

  getApproverStatusValue(userStatus: string) {
    return userStatus.toLowerCase();
  }

  getDemandStatusValue(key: string): string {
    const status = Object.keys(DemandStatusFilter).indexOf(key as unknown as DemandStatusFilter);
    let s = Object.values(DemandStatusFilter)[status];
    return s;
  }

  getDemandStatusKey(value: string): string {
    const index = Object.values(DemandStatusFilter).indexOf(value as unknown as DemandStatusFilter);
    return Object.keys(DemandStatusFilter)[index];
  }

  getSDVisibility(solution: string): boolean {
    if (this.demandInformation.introduction.status === DemandStatus.ACCEPTED || this.demandInformation.introduction.status === DemandStatus.DM_REJECTED || this.demandInformation.introduction.status === DemandStatus.CCB_REJECTED) {
      return false;
    }
    if (this.authService.currentUserValue.domain && this.authService.currentUserValue.domain.includes(solution)) {
      return true;
    }
    return false;
  }
}

