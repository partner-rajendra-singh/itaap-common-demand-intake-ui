import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { DemandIntakeDecision } from '../../enums/demand-intake-decision';
import { EventService } from '../../services/event.service';
import { CCB } from '../../models/ccb';
import { DemandStatus } from '../../enums/demand-status';
import {FieldsService} from "../../services/fields.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-ccb',
  templateUrl: './ccb.component.html'
})
export class CCBComponent implements OnInit {

  decisions!: string[];
  selectedDecision!: string;
  ccbInfo!: CCB;
  visibleSubmitButton: boolean = true;
  submitDemandLabel!: string;

  constructor(public eventService: EventService,public fieldsService: FieldsService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public authService: AuthService) { }

  ngOnInit() {
    this.submitDemandLabel = 'Submit Demand';
    if(this.demandIntakeService.getDemandInformation().introduction.status === DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status === DemandStatus.CCB_MODIFICATION){
      this.submitDemandLabel = 'Update Demand';
    }

    if(this.demandIntakeService.getDemandInformation().ccbInfo != null){
      this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate = new Date(this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate);
      this.ccbInfo = this.demandIntakeService.getDemandInformation().ccbInfo;
      this.decisions = Object.values(DemandIntakeDecision);
      this.selectedDecision = this.getStatusValue(this.demandIntakeService.getDemandInformation().ccbInfo.decision);
    }

    if (this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.ACCEPTED || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_REJECTED) {
      this.visibleSubmitButton = false;
    }
  }

  onDecisionSelect(){
    this.ccbInfo.decision = this.getStatusKey(this.selectedDecision);
    this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/demandmanager']);
    } else {
      this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }

  submitPage() {
    if (this.selectedDecision != '' && this.ccbInfo.remarks != '') {
      this.ccbInfo.decision = this.getStatusKey(this.selectedDecision);
      this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;
      this.router.navigate(['demand-intake/confirm']);

    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  getStatusKey(value: string): string {
    const index = Object.values(DemandIntakeDecision).indexOf(value as unknown as DemandIntakeDecision);
    return Object.keys(DemandIntakeDecision)[index];
  }

  getStatusValue(key: string): string {
    const status = Object.keys(DemandIntakeDecision).indexOf(key as unknown as DemandIntakeDecision);
    let s = Object.values(DemandIntakeDecision)[status];
    return s;
  }

}
