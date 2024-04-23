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

@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.demandInformation = new Demand();
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
    }else{
      if(demand.demandManagerInfo == null){
        demand.demandManagerInfo = new DM; 
      }
      if(demand.solutionDirectionInfo == null){
        demand.solutionDirectionInfo = new SolutionDirection; 
      }
      if(demand.ccbInfo == null){
        demand.demandManagerInfo = new CCB; 
      }
      if(demand.eADIInfo == null){
        demand.eADIInfo = new EADI; 
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

  saveDemand(){
    let url = this.baseUrl+'/common/demand-intake/';
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
  }

  submitDemand(){
    let url = this.baseUrl+'/common/demand-intake/submit';
    let headerOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Correlation-ID': 'abc'
      })
    };

    this.demandInformation.introduction.requestedBy = this.authService.currentUserValue.email;
    return this.http.post<any>(url, this.demandInformation, headerOptions)
      .pipe(map(response => {
          console.log("SubmitDemand() Response :", response)
          return response;
      }));

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
    return this.http.get(url,headerOptions);
  }
}
