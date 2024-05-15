import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { first } from 'rxjs';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent {

  solutionDirectionInfo!: any;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, private eventService: EventService) { }

  ngOnInit() {
    console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)
    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
  }

  nextPage() {
    if (this.isAnySD()) {
      this.demandIntakeService.getDemandInformation().solutionDirectionInfo = this.solutionDirectionInfo;
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/checklist']);
      } else {
        this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }

    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select atleast one Solution Direction!' });
    }
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/requirement']);
    } else {
      this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
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
