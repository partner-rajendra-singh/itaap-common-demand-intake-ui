import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { first } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  eADIInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.router.navigate(['demand-intake/attachment']);
  }

  prevPage() {
    this.router.navigate(['demand-intake/solution-direction']);
  }


}
