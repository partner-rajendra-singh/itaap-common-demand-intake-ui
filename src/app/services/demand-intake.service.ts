import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Demand } from '../models/demand';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DM } from '../models/dm';
import { SolutionDirection } from '../models/solution-direction';
import { CCB } from '../models/ccb';
import { EADI } from '../models/eadi';
import { throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { AllDemands } from '../models/all-demands';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private messageService: MessageService,
    private eventService: EventService) { }

  getDemandInformation() {
    return this.demandInformation;
  }

  setDemandInformation(demandInformation: any) {
    this.demandInformation = demandInformation;
  }

  setDemand(demand: Demand, isNew: boolean) {
    if (isNew) {
      this.demandInformation = new Demand();
    } else {

      if (this.authService.isDM() || this.authService.isCCB()) {
        if (demand.demandManagerInfo == null) {
          demand.demandManagerInfo = new DM;
        }
        if (demand.demandManagerInfo.decisionDate != null) {
          demand.demandManagerInfo.decisionDate = new Date(demand.demandManagerInfo.decisionDate);
        }

        if (demand.solutionDirectionInfo == null) {
          demand.solutionDirectionInfo = new SolutionDirection;
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
        demand.attachmentInfo = [
          {
            file: File,
            description: '',
            uploadedDate: new Date()
          }, {
            file: File,
            description: '',
            uploadedDate: new Date()
          }, {
            file: File,
            description: '',
            uploadedDate: new Date()
          }, {
            file: File,
            description: '',
            uploadedDate: new Date()
          }, {
            file: File,
            description: '',
            uploadedDate: new Date()
          }];
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
      if(!this.eventService.checkEmailValue(s.email)){
        result = false;
      }
    });

    return result;
  }
  

  validateRequest(isSave: boolean): boolean {

    if (isSave) {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '') {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/introduction']);
        return false;
      }

    } else {
      if (this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == '') {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/introduction']);
        return false;

      } else if (this.demandInformation.requesterInfo.program == '' || this.demandInformation.requesterInfo.domain == '' || !this.validateSpoc() || (this.demandInformation.requesterInfo.approvedBudget && this.demandInformation.requesterInfo.clarityProjectId == '')) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/requester']);
        return false;

      } else if (this.demandInformation.requirementFunctionalInfo.statement == '' || this.demandInformation.requirementFunctionalInfo.scope == '' || this.demandInformation.requirementFunctionalInfo.businessValue == '' || this.demandInformation.requirementFunctionalInfo.goLiveApproach == '') {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/requirement']);
        return false;
      }

      if (this.authService.isDM() && !this.eventService.isNewDemand) {
        if (this.demandInformation.demandManagerInfo.decision == null || this.demandInformation.demandManagerInfo.remarks == '') {
          this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
          this.router.navigate(['demand-intake/demandmanager']);
          return false;
        }
      } else if (this.authService.isCCB() && !this.eventService.isNewDemand) {
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
    console.log("saveDemand: ", this.demandInformation)
    if (this.validateRequest(true)) {

      let url = this.baseUrl + '/common/demand-intake/';
      let headerOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Correlation-ID': 'abc'
        })
      };

      this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
      return this.http.post<any>(url, this.demandInformation, headerOptions)
        .pipe(map(response => {
          console.log("SaveDemand() Response :", response)
          this.eventService.progressBarEvent.emit(false);
          return response;
        }));
    } else {
      this.eventService.progressBarEvent.emit(false);
      return throwError(false);
    }
  }

  saveDemandWithAttachment(){
    this.eventService.progressBarEvent.emit(true);
    console.log("saveDemandWithAttachment: ", this.demandInformation)

    if (this.validateRequest(true)) {

      let url = this.baseUrl + '/common/demand-intake/attachment';
      let headerOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'multipart/form-data',
          'X-Correlation-ID': 'abc'
        })
      };

      this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
      // const files = [this.demandInformation.attachmentInfo[0].file, this.demandInformation.attachmentInfo[1].file];
      const formData : any = new FormData();
      formData.append('demand', JSON.stringify(this.demandInformation)); 
      for (let i = 0; i < this.demandInformation.attachmentInfo.length; i++) {
        if(!this.demandInformation.attachmentInfo[i].file.length){
          formData.append('files', this.demandInformation.attachmentInfo[i].file)
        }
        
      }
      
      return this.http.post<any>(url, formData, headerOptions)
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

  submitDemand() {
    this.eventService.progressBarEvent.emit(true);
    console.log("submit: ", this.demandInformation)
    if (this.validateRequest(false)) {
      let url = this.baseUrl + '/common/demand-intake/submit';
      let headerOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Correlation-ID': 'abc'
        })
      };

      if (this.demandInformation.introduction.requestedBy == '') {
        this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
      }

      return this.http.post<any>(url, this.demandInformation, headerOptions)
        .pipe(map(response => {
          console.log("SubmitDemand() Response :", response)
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

  getRequesterDomain(){
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

}

