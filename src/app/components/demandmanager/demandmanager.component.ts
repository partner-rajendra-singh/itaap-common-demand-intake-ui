import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { DemandIntakeDecision } from 'src/app/enums/demandIntakeDecision';
import { EventService } from 'src/app/services/event.service';
import { DM } from 'src/app/models/dm';

@Component({
  selector: 'app-demandmanager',
  templateUrl: './demandmanager.component.html'
})
export class DemandManagerComponent {

  decisions!: string[];
  selectedDecision!: string;
  visibleNextButton!: boolean;
  visibleSubmitButton!: boolean;
  demandManagerInfo!: DM;

  constructor(private eventService: EventService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService,
    private authService: AuthService) {

    if (authService.isDM()) {
      this.visibleNextButton = false;
      if ((this.demandIntakeService.getDemandInformation().introduction.status == 'ACCEPTED' || this.demandIntakeService.getDemandInformation().introduction.status == 'REJECTED') || (!this.eventService.isMyDemand && this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB')) {
        this.visibleSubmitButton = false;
      } else {
        this.visibleSubmitButton = true;
      }
    } else {
      if ((this.authService.isRequester() && this.eventService.isMyDemand)
        && (this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED')) {
        this.visibleNextButton = true;
      } else if ((!this.eventService.isNewDemand && (this.authService.isCCB() || this.authService.isAdmin()))
        && (this.demandIntakeService.demandInformation.introduction.status == 'PENDING_WITH_CCB' || this.demandIntakeService.demandInformation.introduction.status == 'CCB_HOLD' || this.demandIntakeService.demandInformation.introduction.status == 'ACCEPTED' || this.demandIntakeService.demandInformation.introduction.status == 'REJECTED')) {
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
    this.selectedDecision = this.getStatusValue(this.demandIntakeService.getDemandInformation().demandManagerInfo.decision);
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/attachment']);
    } else {
      this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }

  nextPage() {
    if (this.demandManagerInfo.decisionDate && this.selectedDecision != '' && this.demandManagerInfo.remarks != '') {
      this.demandManagerInfo.decision = this.getStatusKey(this.selectedDecision);
      this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/ccb']);
      } else {
        this.router.navigate(['demand-intake/ccb/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }

    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  submitPage() {
    if (this.demandManagerInfo.decisionDate && this.selectedDecision != '' && this.demandManagerInfo.remarks != '') {
      this.demandManagerInfo.decision = this.getStatusKey(this.selectedDecision);
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

  getStatusValue(key: string): string {
    const status = Object.keys(DemandIntakeDecision).indexOf(key as unknown as DemandIntakeDecision);
    let s = Object.values(DemandIntakeDecision)[status];
    return s;
  }

  getStatusKey(value: string): string {
    const index = Object.values(DemandIntakeDecision).indexOf(value as unknown as DemandIntakeDecision);
    return Object.keys(DemandIntakeDecision)[index];
  }

}
