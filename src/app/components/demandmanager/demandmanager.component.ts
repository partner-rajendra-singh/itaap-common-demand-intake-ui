import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-demandmanager',
  templateUrl: './demandmanager.component.html'
})
export class DemandManagerComponent {

  
 
  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService) {
    
  }

  ngOnInit() {
    
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
