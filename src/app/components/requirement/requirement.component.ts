import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html'
})
export class RequirementComponent  {

  activeTab: MenuItem | undefined;
  activeTabIndex!: number;
  solutionDirection!: String;

  requestorDetailsForm = new FormGroup({
    program: new FormControl(''),
    domain : new FormControl(''),
    programSPOC : new FormControl(''),
    requestDate : new FormControl(''),

    problemStatement : new FormControl(''),
    demandScope : new FormControl(''),
    businessValue : new FormControl(''),
    goLiveApproach : new FormControl(''),
    tentativeGoLive : new FormControl(''),
  });


  screen1Form = new FormGroup ({

        apiFunctionalReq : new FormControl(false),
        platformsCapabilityDef : new FormControl(false),
        pAndCSystems : new FormControl(false),
        philipsCapabilityApis : new FormControl(false),
        dataModelDefinition : new FormControl(false),
        nonFunctionalReq : new FormControl(false),
        peakVolume : new FormControl(false),
        avgVolume : new FormControl(false),
        throughputTime : new FormControl(false),
        msgClassification : new FormControl(false),
        peakMessageSize : new FormControl(false),
        avgMessageSize : new FormControl(false),
        businessCriticality : new FormControl(false),
        messageTimings : new FormControl(false),
        maxLatency : new FormControl(false),
        demandDocAttached : new FormControl(false),
        additionalInfo : new FormControl(false)
    });

  screen2Form = new FormGroup ({

      apiFunctionalReq : new FormControl(false),
      fr1 : new FormControl(false),
      fr2 : new FormControl(false),
      fr3 : new FormControl(false),
      dataModelDefinition : new FormControl(false),
      nonFunctionalReq : new FormControl(false),
      peakVolume : new FormControl(false),
      avgVolume : new FormControl(false),
      throughputTime : new FormControl(false),
      msgClassification : new FormControl(false),
      peakMessageSize : new FormControl(false),
      avgMessageSize : new FormControl(false),
      businessCriticality : new FormControl(false),
      messageTimings : new FormControl(false),
      maxLatency : new FormControl(false),
      demandDocAttached : new FormControl(false),
      additionalInfo : new FormControl(false)
  });


  onActiveItemChange(event: MenuItem) {
    console.log("event -> ",event)
    this.activeTab = event;
  }


  onSubmit(){
    console.log(this.requestorDetailsForm.value);
    console.log(this.solutionDirection);

  }

  setSolution(e: any){
    this.solutionDirection= e.target.value;

    switch(e.target.value){
      case "Integration/ITaaP": this.activeTabIndex = 0;break;
      case "ADL SL1": this.activeTabIndex = 1; break;
      case "ADL SL2": this.activeTabIndex = 2;  break;
      case "Gold": this.activeTabIndex = 3; break;
      case "MDM": this.activeTabIndex = 4; break;
      case "I&A": this.activeTabIndex = 0; break;
      case "Data Modelling": this.activeTabIndex = 0; break;
    }
    
  }

}
