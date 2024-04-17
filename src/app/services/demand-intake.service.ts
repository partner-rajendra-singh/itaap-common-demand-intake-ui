import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  demandInformation = {
    introduction:{
      title: '',
      description: ''
    },
    requesterInfo:{
      program:'',
      domain:'',
      requestedDate: new Date,
      spoc: [
        {
          role: '',
          email: ''
        },
        {
          role: '',
          email: ''
        },
        {
          role: '',
          email: ''
        },
        {
          role: '',
          email: ''
        },
        {
          role: '',
          email: ''
        }
      ]
    },
    requirementFunctionalInfo:{
      statement: '',
      scope: '',
      businessValue: '',
      goLiveApproach: '',
      tglDate: new Date(),
      bglDate: new Date()
    },
    requirementNonFunctionalInfo:{
      msgClassification: '',
      msgSize: '',
      volume: '',
      timing: '',
      maxLatency: '',
      businessCriticality: '',
      dataPrivacy: '',
      serviceQuality: '',
      transformation: false,
      routing: false,
      protocolConversion: false,
      msgSequencing: false,
      trackNTrace: false,
      persistence: false,
      senderTechnicalDetails: '',
      receiverTechnicalDetails: ''
    },
    requirementComplianceInfo:{
      sox: false,
      fda: false,
      security: false,
      privacy: false,
      compliance: [
        {
          key: '',
          value: ''
        },
        {
          key: '',
          value: ''
        },
        {
          key: '',
          value: ''
        }
      ]
    },
    solutionDirectionInfo:{
      integration: false,
      dataModelling: false,
      adlSL1: false,
      adlSL2: false,
      gold: false,
      mdm: false,
      ia: false
    },
    eADIInfo:{
      platformsCapabilityDef: '',
      producerAndConsumerSystems: '',
      capabilityAPI: '',
      dataModelDefinition: '',
      demandDocAttached: '',
      additionalInfo: ''
    },
    attachmentInfo:[
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      },
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      },
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      },
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      },
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      },
      {
        file: {},
        description: '',
        uploadedDate: new Date()
      }
    ],
    demandManagerInfo: {
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    },
    ccbInfo:{
      decisionDate: new Date(),
      decision: '',
      remarks: ''
    }
  }

  getDemandInformation() {
      return this.demandInformation;
  }

  setDemandInformation(demandInformation: any) {
      this.demandInformation = demandInformation;
  }

  submitDemand(){

    let url = this.baseUrl+'/common/demand-intake/';
    let headerOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Correlation-ID': 'abc'
      })
    };

    return this.http.post<any>(url, this.demandInformation, headerOptions)
      .pipe(map(response => {
          console.log("SubmitDemand() Response :", response)
          return response;
      }));

    }
}
