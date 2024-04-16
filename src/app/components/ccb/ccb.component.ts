import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { DemandDecision } from 'src/app/models/demand-decision';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ccb',
  templateUrl: './ccb.component.html'
})
export class CCBComponent {

  decisions: DemandDecision[] | undefined;
  selectedDecision: DemandDecision | undefined;
  ccbInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {}

  ngOnInit() { 
    console.log("CCBComponent Init: ", this.demandIntakeService.demandInformation)
    this.ccbInfo = this.demandIntakeService.getDemandInformation().ccbInfo;
    this.decisions = [
        {name: 'Approve', code: 'approve'},
        {name: 'Rejected', code: 'rejected'},
        {name: 'Cancelled', code: 'cancelled'},
        {name: 'OnHold', code: 'onhold'},
        {name: 'Need Mofidification', code: 'modification'}
    ];
  }

  prevPage() {
    this.router.navigate(['demand-intake/demandmanager']);
  }

  submitPage() {
    this.ccbInfo.decision = this.ccbInfo.decision.code;
    this.demandIntakeService.getDemandInformation().ccbInfo = this.ccbInfo;

    this.demandIntakeService.submitDemand()
    .pipe(first())
    .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
            this.router.navigate(['demand-intake']);
        },
        error => {
          alert("Demand Failed")
            this.messageService.add({ severity: 'error', summary: 'error', detail: 'Demand Failed!' });
        });
  }

}