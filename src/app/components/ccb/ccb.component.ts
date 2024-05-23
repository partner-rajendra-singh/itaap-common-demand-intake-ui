import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { DemandIntakeDecision } from 'src/app/enums/demandIntakeDecision';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-ccb',
  templateUrl: './ccb.component.html'
})
export class CCBComponent {

  decisions!: string[];
  selectedDecision!: string;
  ccbInfo!: any;
  visibleSubmitButton: boolean = true;

  constructor(private eventService: EventService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public authService: AuthService) { }

  ngOnInit() {
    this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate = new Date(this.demandIntakeService.getDemandInformation().ccbInfo.decisionDate);
    this.ccbInfo = this.demandIntakeService.getDemandInformation().ccbInfo;
    this.decisions = Object.values(DemandIntakeDecision);
    this.selectedDecision = this.getStatusValue(this.demandIntakeService.getDemandInformation().ccbInfo.decision);

    if(this.demandIntakeService.getDemandInformation().introduction.status == 'ACCEPTED' || this.demandIntakeService.getDemandInformation().introduction.status == 'REJECTED'){
      this.visibleSubmitButton = false;
    }
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/demandmanager']);
    } else {
      this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }

  submitPage() {
    if (this.ccbInfo.decisionDate != '' && this.selectedDecision != '' && this.ccbInfo.remarks != '') {
      this.ccbInfo.decision = this.getStatusKey(this.selectedDecision);
      this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;

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
