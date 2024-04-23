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
import { Attachment } from '../models/attachment';
import { Observable, throwError } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { AllDemands } from '../models/all-demands';
import { DemandDecision } from '../models/demand-decision';

@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private messageService: MessageService) {
    // this.demandInformation = new Demand();
  }

  getDemandInformation() {
      return this.demandInformation;
  }

  setDemandInformation(demandInformation: any) {
      this.demandInformation = demandInformation;
  }

  setDemand(demand: Demand, isNew: boolean){
    if(isNew){
      this.demandInformation = new Demand();
    } else {

      if(this.authService.isDM()){
        if(demand.demandManagerInfo == null){
          demand.demandManagerInfo = new DM; 
        }
        if(demand.demandManagerInfo.decisionDate != null){
          demand.demandManagerInfo.decisionDate  = new Date(demand.demandManagerInfo.decisionDate);
        }

        // demand.demandManagerInfo.decision  = this.decisions.filter(p => p.code === demand.demandManagerInfo.decision.code);

        if(demand.solutionDirectionInfo == null){
          demand.solutionDirectionInfo = new SolutionDirection; 
        }
        
        if(demand.eADIInfo == null){
          demand.eADIInfo = new EADI; 
        }

      } else if(this.authService.isCCB()){
        if(demand.ccbInfo == null){
          demand.ccbInfo = new CCB; 
        }

        if(demand.ccbInfo.decisionDate != null){
          demand.ccbInfo.decisionDate  = new Date(demand.ccbInfo.decisionDate);
        }
      }
      
      if(demand.attachmentInfo == null){
        demand.attachmentInfo = [
          {
          file: new Object,
          description: '',
          uploadedDate: new Date()
            },{
          file: new Object,
          description: '',
          uploadedDate: new Date()
            },{
          file: new Object,
          description: '',
          uploadedDate: new Date()
            },{
          file: new Object,
          description: '',
          uploadedDate: new Date()
            },{
          file: new Object,
          description: '',
          uploadedDate: new Date()
            } ];
      }
  
      demand.requesterInfo.requestedDate  = new Date(demand.requesterInfo.requestedDate)
      // demand.requirementFunctionalInfo.tglDate = new Date(demand.requirementFunctionalInfo.tglDate)
      demand.requirementFunctionalInfo.bglDate = new Date(demand.requirementFunctionalInfo.bglDate)
      this.demandInformation = demand;

    }
    
    console.log("setDemand: ",this.demandInformation)
  }

  validateRequest() : boolean{
    
    if(this.demandInformation.introduction.title == '' || this.demandInformation.introduction.description == ''){
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
      this.router.navigate(['demand-intake/introduction']);
      return false;

    } else if(this.demandInformation.requesterInfo.program == '' || this.demandInformation.requesterInfo.domain == ''){
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
      this.router.navigate(['demand-intake/requester']);
      return false;

    } else if(this.demandInformation.requirementFunctionalInfo.statement == '' || this.demandInformation.requirementFunctionalInfo.scope == '' || this.demandInformation.requirementFunctionalInfo.businessValue == '' || this.demandInformation.requirementFunctionalInfo.goLiveApproach == ''){
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
      this.router.navigate(['demand-intake/requirement']);
      return false;
    } 

    if(this.authService.isDM()){  
      if(this.demandInformation.demandManagerInfo.decision == null || this.demandInformation.demandManagerInfo.remarks == ''){
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/demandmanager']);
        return false;
      }
    } else if(this.authService.isCCB()){
      if(this.demandInformation.ccbInfo.decision == '' || this.demandInformation.ccbInfo.remarks == ''){
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
        this.router.navigate(['demand-intake/ccb']);
        return false;
      }
    }

    return true;
  }

  saveDemand(){
    console.log("saveDemand: ", this.demandInformation)
    if(this.validateRequest()){

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
            return response;
        }));
    } else {
        return throwError(false); 
    }
  }

  submitDemand(){
    console.log("submit: ", this.demandInformation)
    if(this.validateRequest()){
      let url = this.baseUrl+'/common/demand-intake/submit';
      let headerOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Correlation-ID': 'abc'
        })
      };

      if(this.authService.isRequester()){
        this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
      }
      
      return this.http.post<any>(url, this.demandInformation, headerOptions)
        .pipe(map(response => {
            console.log("SubmitDemand() Response :", response)
            return response;
        }));

    } else {
      return throwError(false); 
    }

  }

  getAllDemands(){
    let url = this.baseUrl+'/common/demand-intake/';
    let headerOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Correlation-ID': 'abc',
          'Requester': this.authService.currentUserValue.email
      })
    };

    return this.http.get<AllDemands>(url,headerOptions);
  }
}
