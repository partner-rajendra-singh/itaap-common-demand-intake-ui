import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { DemandIntakeDecision } from '../../enums/demandIntakeDecision';
import { EventService } from '../../services/event.service';
import { DM } from '../../models/dm';
import { ApproverDomain } from '../../enums/approver-domain';
import { SolutionDirection1 } from '../../models/solution-direction1';

@Component({
  selector: 'app-demandmanager',
  templateUrl: './demandmanager.component.html'
})
export class DemandManagerComponent implements OnInit {

  decisions!: string[];
  selectedDecision!: string;
  visibleNextButton!: boolean;
  visibleSubmitButton!: boolean;
  demandManagerInfo!: DM;
  domain: string[] = [];
  solutionDirectionList!: SolutionDirection1[];

  constructor(private eventService: EventService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService,
    public authService: AuthService) {

    if (authService.isDM()) {
      this.visibleNextButton = false;
      this.domain = this.authService.currentUserValue.domain;
      this.demandIntakeService.demandInformation.demandManagerInfo.domain = this.domain;
      if (this.demandIntakeService.getDemandInformation().introduction.status == 'ACCEPTED' || this.demandIntakeService.getDemandInformation().introduction.status == 'REJECTED') {
        this.visibleSubmitButton = false;
      } else if ((!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB') {
        this.visibleSubmitButton = true;
      } else if ((!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status == 'REJECTED' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED'|| this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD')) {
        this.visibleNextButton = true;
        this.visibleSubmitButton = false;
      }else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB') {
        this.visibleSubmitButton = false;
      } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED') {
        this.visibleSubmitButton = false;
        this.visibleNextButton = true;
      } else {
        this.visibleSubmitButton = true;
      }
    } else {
      if ((this.authService.isRequester() && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand))
        && (this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED')) {
        this.visibleNextButton = true;
      } else if ((!this.eventService.isNewDemand && !this.eventService.isMyDemand && this.authService.isCCB())
        && (this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB' || this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED')) {
        this.visibleNextButton = true;
      } else if ((!this.eventService.isNewDemand && this.eventService.isMyDemand && this.authService.isCCB())
        && (this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED')) {
        this.visibleNextButton = true;
      } else {
        this.visibleNextButton = false;
      }
      this.visibleSubmitButton = false;
    }
  }

  ngOnInit() {
    this.demandIntakeService.getDemandInformation().demandManagerInfo.decisionDate = new Date(this.demandIntakeService.getDemandInformation().demandManagerInfo.decisionDate);
    this.demandManagerInfo = this.demandIntakeService.getDemandInformation().demandManagerInfo;
    this.decisions = Object.values(DemandIntakeDecision);
    this.selectedDecision = this.getDecisionValue(this.demandIntakeService.getDemandInformation().demandManagerInfo.decision);
    this.solutionDirectionList = this.demandIntakeService.getDemandInformation().solutionDirectionInfo.filter(item => item.value == true);

    this.solutionDirectionList.forEach(item => {
      item.decisionDate = new Date(item.decisionDate);
      item.decision = this.getDecisionValue(item.decision);
    })
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/attachment']);
    } else {
      this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }

  nextPage() {
    // if (this.demandManagerInfo.decisionDate && this.selectedDecision != '' && this.demandManagerInfo.remarks != '') {
    this.demandManagerInfo.decision = this.getDecisionKey(this.selectedDecision);
    this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/ccb']);
    } else {
      this.router.navigate(['demand-intake/ccb/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }

    // } else {
    //   this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    // }
  }

  submitPage() {
    if (this.demandManagerInfo.decisionDate && this.selectedDecision != '' && this.demandManagerInfo.remarks != '') {
      this.demandManagerInfo.decision = this.getDecisionKey(this.selectedDecision);
      this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;

      this.demandIntakeService.submitDemandWithAttachment()
        .pipe(first())
        .subscribe(
          data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Submitted Successfully!' });
            this.router.navigate(['view']);
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'error', detail: 'Demand Failed to Submit!' });
          });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  getDecisionValue(key: string): string {
    const status = Object.keys(DemandIntakeDecision).indexOf(key as unknown as DemandIntakeDecision);
    let s = Object.values(DemandIntakeDecision)[status];
    return s;
  }

  getDecisionKey(value: string): string {
    const index = Object.values(DemandIntakeDecision).indexOf(value as unknown as DemandIntakeDecision);
    return Object.keys(DemandIntakeDecision)[index];
  }

  getDomainValue(key: string): string {
    const status = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
    let s = Object.values(ApproverDomain)[status];
    return s;
  }

  getDomainValueList(keys: string[]): string {
    let outputList: string = '';
    keys.forEach(key => {
      const index = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
      outputList += Object.values(ApproverDomain)[index];
      outputList += ', ';
    });

    outputList = outputList.trim();
    outputList = outputList.slice(0, outputList.length - 1)

    return outputList;
  }

}