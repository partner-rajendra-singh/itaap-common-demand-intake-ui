import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  eADIInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public eventService: EventService) { }

  ngOnInit() {
    console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.router.navigate(['demand-intake/attachment']);
  }

  prevPage() {
    this.router.navigate(['demand-intake/solution-direction']);
  }

  showTab(name: string): boolean{
    switch(name){
      case 'integration': return this.eventService.solutionDirectionValue.integration;
      case 'dataModelling': return this.eventService.solutionDirectionValue.dataModelling;
      case 'adlSL1': return this.eventService.solutionDirectionValue.adlSL1;
      case 'adlSL2': return this.eventService.solutionDirectionValue.adlSL2;
      case 'gold': return this.eventService.solutionDirectionValue.gold;
      case 'mdm': return this.eventService.solutionDirectionValue.mdm;
      case 'ia': return this.eventService.solutionDirectionValue.ia;
    }

    return false;
  }


}
