import { Component } from '@angular/core';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { catchError, map, throwError } from 'rxjs';
import { Demand } from 'src/app/models/demand';
import { MessageService } from 'primeng/api';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AllDemands } from 'src/app/models/all-demands';

@Component({
  selector: 'app-view-demands',
  templateUrl: './view-demands.component.html'
})
export class ViewDemandsComponent {
  allDemands: AllDemands = new AllDemands;
  errorData: any;
  columns!: any;
  selectedDemand!: Demand;
  isRequester: boolean = false;

  constructor(private authService: AuthService, private demandIntakeService: DemandIntakeService, private messageService: MessageService, private router: Router) {}

  ngOnInit(){

    this.isRequester = this.authService.isRequester();
  //  this.allDemands = {
  //     "myDemands": [
  //     {
  //       "introduction": {
  //         "demandIntakeId": 3,
  //            "title": "title",
  //            "description": "desc",
  //            "requestedBy": "Pradnya@philips.com",
  //            "status": "DRAFT"
  //      },
  //      "requesterInfo": {
  //        "program": "p1",
  //        "domain": "d1",
  //        "requestedDate": "2024-04-16T13:12:20.792Z",
  //        "spoc": [
  //          {
  //            "role": "r1",
  //            "email": "e1"
  //          },
  //          {
  //            "role": "r2",
  //            "email": "e2"
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          }
  //        ]
  //      },
  //      "requirementFunctionalInfo": {
  //        "statement": "Problem Statement",
  //        "scope": "Demand Scope",
  //        "businessValue": "Business Value",
  //        "goLiveApproach": "phased",
  //        "tglDate": "2024-04-23T18:30:00.000Z",
  //        "bglDate": "2024-04-17T18:30:00.000Z"
  //      },
  //      "requirementNonFunctionalInfo": {
  //        "msgClassification": "Message Classification",
  //        "msgSize": "10",
  //        "volume": "33",
  //        "timing": "Message Classification",
  //        "maxLatency": "9",
  //        "businessCriticality": "Business criticality",
  //        "dataPrivacy": "Data Privacy",
  //        "serviceQuality": "Quality of Service requirements",
  //        "transformation": true,
  //        "routing": true,
  //        "protocolConversion": true,
  //        "msgSequencing": true,
  //        "trackNTrace": true,
  //        "persistence": true,
  //        "senderTechnicalDetails": "Sender technical details",
  //        "receiverTechnicalDetails": "Receiver technical details"
  //      },
  //      "requirementComplianceInfo": {
  //        "sox": true,
  //        "fda": true,
  //        "security": true,
  //        "privacy": true,
  //        "compliance": [
  //          {
  //            "key": "c1",
  //            "value": "c2"
  //          },
  //          {
  //            "key": "c3",
  //            "value": "c4"
  //          },
  //          {
  //            "key": "",
  //            "value": ""
  //          }
  //        ]
  //      }
  //     },
  //     {
  //       "introduction": {
  //         "demandIntakeId": 2,
  //            "title": "title",
  //            "description": "desc",
  //            "requestedBy": "Pradnya@philips.com",
  //            "status": "DRAFT"
  //      },
  //      "requesterInfo": {
  //        "program": "p1",
  //        "domain": "d1",
  //        "requestedDate": "2024-04-16T13:12:20.792Z",
  //        "spoc": [
  //          {
  //            "role": "r1",
  //            "email": "e1"
  //          },
  //          {
  //            "role": "r2",
  //            "email": "e2"
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          },
  //          {
  //            "role": "",
  //            "email": ""
  //          }
  //        ]
  //      },
  //      "requirementFunctionalInfo": {
  //        "statement": "Problem Statement",
  //        "scope": "Demand Scope",
  //        "businessValue": "Business Value",
  //        "goLiveApproach": "phased",
  //        "tglDate": "2024-04-23T18:30:00.000Z",
  //        "bglDate": "2024-04-17T18:30:00.000Z"
  //      },
  //      "requirementNonFunctionalInfo": {
  //        "msgClassification": "Message Classification",
  //        "msgSize": "10",
  //        "volume": "33",
  //        "timing": "Message Classification",
  //        "maxLatency": "9",
  //        "businessCriticality": "Business criticality",
  //        "dataPrivacy": "Data Privacy",
  //        "serviceQuality": "Quality of Service requirements",
  //        "transformation": true,
  //        "routing": true,
  //        "protocolConversion": true,
  //        "msgSequencing": true,
  //        "trackNTrace": true,
  //        "persistence": true,
  //        "senderTechnicalDetails": "Sender technical details",
  //        "receiverTechnicalDetails": "Receiver technical details"
  //      },
  //      "requirementComplianceInfo": {
  //        "sox": true,
  //        "fda": true,
  //        "security": true,
  //        "privacy": true,
  //        "compliance": [
  //          {
  //            "key": "c1",
  //            "value": "c2"
  //          },
  //          {
  //            "key": "c3",
  //            "value": "c4"
  //          },
  //          {
  //            "key": "",
  //            "value": ""
  //          }
  //        ]
  //      }
  //     }
  //   ],
  //   "pendingDemands":[{
  //     "introduction": {
  //       "demandIntakeId": 1,
  //          "title": "title",
  //          "description": "desc",
  //          "requestedBy": "Pradnya@philips.com",
  //          "status": "DRAFT"
  //    },
  //    "requesterInfo": {
  //      "program": "p1",
  //      "domain": "d1",
  //      "requestedDate": "2024-04-16T13:12:20.792Z",
  //      "spoc": [
  //        {
  //          "role": "r1",
  //          "email": "e1"
  //        },
  //        {
  //          "role": "r2",
  //          "email": "e2"
  //        },
  //        {
  //          "role": "",
  //          "email": ""
  //        },
  //        {
  //          "role": "",
  //          "email": ""
  //        },
  //        {
  //          "role": "",
  //          "email": ""
  //        }
  //      ]
  //    },
  //    "requirementFunctionalInfo": {
  //      "statement": "Problem Statement",
  //      "scope": "Demand Scope",
  //      "businessValue": "Business Value",
  //      "goLiveApproach": "phased",
  //      "tglDate": "2024-04-23T18:30:00.000Z",
  //      "bglDate": "2024-04-17T18:30:00.000Z"
  //    },
  //    "requirementNonFunctionalInfo": {
  //      "msgClassification": "Message Classification",
  //      "msgSize": "10",
  //      "volume": "33",
  //      "timing": "Message Classification",
  //      "maxLatency": "9",
  //      "businessCriticality": "Business criticality",
  //      "dataPrivacy": "Data Privacy",
  //      "serviceQuality": "Quality of Service requirements",
  //      "transformation": true,
  //      "routing": true,
  //      "protocolConversion": true,
  //      "msgSequencing": true,
  //      "trackNTrace": true,
  //      "persistence": true,
  //      "senderTechnicalDetails": "Sender technical details",
  //      "receiverTechnicalDetails": "Receiver technical details"
  //    },
  //    "requirementComplianceInfo": {
  //      "sox": true,
  //      "fda": true,
  //      "security": true,
  //      "privacy": true,
  //      "compliance": [
  //        {
  //          "key": "c1",
  //          "value": "c2"
  //        },
  //        {
  //          "key": "c3",
  //          "value": "c4"
  //        },
  //        {
  //          "key": "",
  //          "value": ""
  //        }
  //      ]
  //    },
  //    "solutionDirectionInfo": {
  //      "integration": true,
  //      "dataModelling": false,
  //      "adlSL1": false,
  //      "adlSL2": true,
  //      "gold": false,
  //      "mdm": false,
  //      "ia": true
  //    },
  //    "eADIInfo": {
  //      "platformsCapabilityDef": "Platforms Capability-definition",
  //      "producerAndConsumerSystems": "Producer and Consumer systems",
  //      "capabilityAPI": "Philips Capability API",
  //      "dataModelDefinition": "Data Model Definition",
  //      "demandDocAttached": "Demand Additional Document Attached",
  //      "additionalInfo": "info"
  //    },
  //    "attachmentInfo": [
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      },
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      },
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      },
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      },
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      },
  //      {
  //        "file": {},
  //        "description": "",
  //        "uploadedDate": "2024-04-16T13:12:20.792Z"
  //      }
  //    ],
  //    "demandManagerInfo": {
  //      "decisionDate": "2024-04-16T13:12:20.792Z",
  //      "decision": "approve",
  //      "remarks": "Looks good"
  //    },
  //    "ccbInfo": {
  //      "decisionDate": "2024-04-16T13:12:20.792Z",
  //      "decision": "modification",
  //      "remarks": "Needs modification"
  //    }
        
  //   }]
  // };

    this.demandIntakeService.getAllDemands().pipe(
      map((response: any) => {
        this.allDemands = response;
        this.errorData = "";
        console.log('getAllDemands() Response :',this.allDemands);
      }),
      catchError((error: any) => {
        console.log('Error', error);
        this.errorData = JSON.stringify(error.error);
        return throwError(error);
      })
    ).subscribe();

  }

  onDemandSelect(event: any){
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Selected!' });
    console.log("selectedDemand: ", this.selectedDemand)
    this.demandIntakeService.setDemand(this.selectedDemand, false);

    const navigationExtras: NavigationExtras = {
      state: {
        'demandIntakeId': this.selectedDemand.introduction.demandIntakeId,
        'isNew': false
      }
    };
    
    this.router.navigate(['/demand-intake/', navigationExtras]);
  }


}
