import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

interface Decision {
  name: string;
  code: string;
}

@Component({
  selector: 'app-ccb',
  templateUrl: './ccb.component.html'
})
export class CCBComponent {

  decisions: Decision[] | undefined;
  selectedDecision: Decision | undefined;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {}

  ngOnInit() { 
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
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CCB Decision Saved!' });
  }

}
