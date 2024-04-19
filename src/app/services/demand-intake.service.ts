import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Demand } from '../models/demand';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;
  demandInformation = new Demand();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  getDemandInformation() {
      return this.demandInformation;
  }

  setDemandInformation(demandInformation: any) {
      this.demandInformation = demandInformation;
  }

  setDemand(demand: Demand){
    demand.requesterInfo.requestedDate  = new Date(demand.requesterInfo.requestedDate)
    demand.requirementFunctionalInfo.tglDate = new Date(demand.requirementFunctionalInfo.tglDate)
    demand.requirementFunctionalInfo.bglDate = new Date(demand.requirementFunctionalInfo.bglDate)
    this.demandInformation = demand;
    this.router.navigate(['/demand-intake/']);
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
          'Requestor': 'partner.sachin.kapkoti@philips.com'
      })
    };
    return this.http.get(url,headerOptions);
  }
}
