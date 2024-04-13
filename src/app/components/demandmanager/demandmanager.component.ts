import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

interface Decision {
  name: string;
  code: string;
}

@Component({
  selector: 'app-demandmanager',
  templateUrl: './demandmanager.component.html'
})
export class DemandManagerComponent {

  decisions: Decision[] | undefined;
  selectedDecision: Decision | undefined;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService) {
    
  }

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
    this.router.navigate(['demand-intake/attachment']);
  }

  nextPage() {
    this.router.navigate(['demand-intake/ccb']);
  }

  submitPage() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'DM Decision Saved!' });
  }

}
