import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ccb',
  templateUrl: './ccb.component.html'
})
export class CCBComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {}

  prevPage() {
    this.router.navigate(['demand-intake/demandmanager']);
  }

  submitPage() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CCB Decision Saved!' });
  }

}
