import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Demand} from '../models/demand';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {DM} from '../models/dm';
import {CCB} from '../models/ccb';
import {EADI} from '../models/eadi';
import {throwError} from 'rxjs';
import {MessageService} from 'primeng/api';
import {AllDemands} from '../models/all-demands';
import {EventService} from './event.service';
import {Attachment} from '../models/attachment';
import {Introduction} from '../models/introduction';
import {DemandStatus} from '../enums/demand-status';
import {ArchitectAlignment} from '../models/architect-alignment';


@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();
  attachments = Array(5);
  isNew!: boolean

  constructor(public http: HttpClient, private router: Router, private authService: AuthService, private messageService: MessageService,
              private eventService: EventService) {
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

      demand.requesterInfo.requestedDate = new Date(demand.requesterInfo.requestedDate)
      demand.requirementFunctionalInfo.bglDate = new Date(demand.requirementFunctionalInfo.bglDate)
      this.demandInformation = demand;
    }

    console.log("setDemand: ", this.demandInformation)
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
      if ((s.email != '' && s.comment == '') || (s.email == '' && s.comment != '')) {
        result = false;
      } else if (!this.eventService.checkEmailValue(s.email)) {
        result = false;
      }
    });

    return result;
  }


  validateRequest(isSave: boolean): boolean {

    if (isSave) {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '') {
        this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
        this.router.navigate(['demand-intake/introduction']);
        return false;
      }

    } else {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '' || !this.validateAlignement()) {
        this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
        this.router.navigate(['demand-intake/introduction']);
        return false;

      } else if (this.demandInformation.requesterInfo.requestedBy == '' && (this.demandInformation.requesterInfo.isDemandPOC && this.demandInformation.requesterInfo.project == '') && this.demandInformation.requesterInfo.requesterRole == '' || this.demandInformation.requesterInfo.market.length == 0 && this.demandInformation.requesterInfo.businessUnit.length == 0 && this.demandInformation.requesterInfo.domain == '' || !this.validateSpoc() || (this.demandInformation.requesterInfo.approvedBudget && this.demandInformation.requesterInfo.clarityProjectId == '')) {
        this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
        this.router.navigate(['demand-intake/requester']);
        return false;

      } else if (this.demandInformation.requirementFunctionalInfo.statement == '' || this.demandInformation.requirementFunctionalInfo.scope == '' || this.demandInformation.requirementFunctionalInfo.businessValue == '' || this.demandInformation.requirementFunctionalInfo.goLiveApproach == '') {
        this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
        this.router.navigate(['demand-intake/requirement']);
        return false;
      }

      if (this.authService.isDM() || this.authService.isCCB()) {
        let atleastOneSDSelected = this.demandInformation.solutionDirectionInfo.filter(item => item.value === true);
        let adlL1 = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'adlL1');
        let dataQuality = this.demandInformation.solutionDirectionInfo.find(item => item.solution === 'dataQuality');

        if (atleastOneSDSelected.length == 0 || (adlL1 && adlL1.value && !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.adlL1.sourceEmail))) {
          this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
          this.router.navigate(['demand-intake/checklist']);
          return false;
        } else if (atleastOneSDSelected.length == 0 || (dataQuality && dataQuality.value && (!this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.bpoEmail) || !this.eventService.checkEmailValue(this.demandInformation.eADIInfo.dataQuality.dataCleaningSpocEmail)))) {
          this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
          this.router.navigate(['demand-intake/checklist']);
          return false;
        }
      }

      if (this.authService.isDM() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.demandManagerInfo.decision == null || this.demandInformation.demandManagerInfo.remarks == '') {
          this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
          this.router.navigate(['demand-intake/demandmanager']);
          return false;
        }
      } else if (this.authService.isCCB() && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
        if (this.demandInformation.ccbInfo.decision == '' || this.demandInformation.ccbInfo.remarks == '') {
          this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Please fill required fields!'});
          this.router.navigate(['demand-intake/ccb']);
          return false;
        }
      }

    }
    return true;

  }

  saveDemandWithAttachment() {
    this.eventService.progressBarEvent.emit(true);
    console.log("saveDemandWithAttachment: REQUEST -> ", this.demandInformation)

    if (this.validateRequest(true)) {

      let url = this.baseUrl + '/common/demand-intake/';
      let headerOptions = {
        headers: new HttpHeaders({
          'X-Correlation-ID': 'abc'
        })
      };
      return this
        .http
        .post<Introduction>(url, this.demandInformation, headerOptions)
        .pipe(map(response => {
          console.log("saveDemandWithAttachment() Response :", response)
          this.eventService.progressBarEvent.emit(false);
          return response;
        }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return throwError(false);
    }

  }

  submitDemandWithAttachment() {
    this.eventService.progressBarEvent.emit(true);
    console.log("submitDemandWithAttachment: ", this.demandInformation)

    if (this.validateRequest(false)) {

      let url = this.baseUrl + '/common/demand-intake/submit';
      let headerOptions = {
        headers: new HttpHeaders({
          'X-Correlation-ID': 'abc'
        })
      };

      // if (this.demandInformation.introduction.requestedBy == '') {
      //   this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
      // }

      if (this.authService.isDM() && this.demandInformation.demandManagerInfo.decisionBy == '') {
        this.demandInformation.demandManagerInfo.decisionBy = this.authService.currentUserValue.email;
      }

      if (this.authService.isCCB() && this.demandInformation.ccbInfo.decisionBy == '') {
        this.demandInformation.ccbInfo.decisionBy = this.authService.currentUserValue.email;
      }

      return this.http
        .post<any>(url, this.demandInformation, headerOptions)
        .pipe(map(response => {
          console.log("submitDemandWithAttachment() Response :", response)
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
    let url = this.baseUrl + '/common/demand-intake/';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc',
        'Requester': this.authService.currentUserValue.email
      })
    };

    return this.http.get<AllDemands>(url, headerOptions);
  }

  getAllAttachmentsByDemandId(demandId: number) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/fetch/all/' + demandId;
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc',
        'Requester': this.authService.currentUserValue.email
      })
    };
    return this.http.get<Attachment[]>(url, headerOptions);
  }

  getAttachmentsById(fileId: number) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/attachment/download/' + fileId;
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc',
        'Requester': this.authService.currentUserValue.email
      })
    });
  }

  deleteAttachmentsById(fileId: number) {
    let url = this.baseUrl + '/common/demand-intake/attachment/delete/' + fileId;
    let headerOptions = {
      headers: new HttpHeaders({
        'X-Correlation-ID': 'abc',
      })
    };
    return this.http.get<any>(url, headerOptions);
  }

  getRequesterDomain() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/domain';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc',
      })
    };

    return this.http.get(url, headerOptions);
  }

  getAttachmentUploadURL() {
    return this.baseUrl
      + `/common/demand-intake/attachment/upload/${this.demandInformation.introduction.demandIntakeId}` + '?'
      + `uploadedBy=${this.authService.currentUserValue.email}` + '&'
      + `uploaderRole=${this.authService.currentUserValue.role}`
  }

  uploadAttachments(files: any) {
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }

    this.eventService.progressBarEvent.emit(true);
    return this
      .http
      .request(
        'post',
        this.getAttachmentUploadURL(),
        {
          body: formData,
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Correlation-ID': 'abc',
          })
        });
  }

  getDemandStatusValueInLower(demandStatus: string) {
    return demandStatus.toLowerCase();
  }

  getApproverStatusValue(userStatus: string) {
    return userStatus.toLowerCase();
  }

  getDemandStatusValue(key: string): string {
    const status = Object.keys(DemandStatus).indexOf(key as unknown as DemandStatus);
    let s = Object.values(DemandStatus)[status];
    return s;
  }

  getDemandStatusKey(value: string): string {
    const index = Object.values(DemandStatus).indexOf(value as unknown as DemandStatus);
    return Object.keys(DemandStatus)[index];
  }
}

