import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { first } from 'rxjs';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent {

  solutionDirectionInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, private eventService: EventService) { }

  ngOnInit() {
    console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)
    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
  }

  nextPage() {
    if (this.isAnySD()) {
      this.demandIntakeService.getDemandInformation().solutionDirectionInfo = this.solutionDirectionInfo;
      this.router.navigate(['demand-intake/checklist']);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select atleast one Solution Direction!' });
    }
  }

  prevPage() {
    this.router.navigate(['demand-intake/requirement']);
  }

  emitCheckList() {
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
  }

  isAnySD(): boolean {

    return (this.solutionDirectionInfo.integration || this.solutionDirectionInfo.dataModelling || this.solutionDirectionInfo.adlL1 ||
      this.solutionDirectionInfo.adlL2 || this.solutionDirectionInfo.gold || this.solutionDirectionInfo.mdm ||
      this.solutionDirectionInfo.ia || this.solutionDirectionInfo.dataQuality || this.solutionDirectionInfo.informatica
      || this.solutionDirectionInfo.azureSynapse
    );

  }

}
