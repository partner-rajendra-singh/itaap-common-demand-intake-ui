import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { first } from 'rxjs';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from 'src/app/services/auth.service';
import { SolutionDirection1 } from 'src/app/models/solution-direction1';
import { SolutionDirection } from 'src/app/models/solution-direction';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent {

  solutionDirectionInfo!: SolutionDirection1[];
  sdInfo: SolutionDirection = new SolutionDirection;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, private eventService: EventService) { }

  ngOnInit() {
    console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)
    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
    this.solutionDirectionInfo.forEach(item => {
      this.setLocalSD(item);
    })
  }

  setLocalSD(sd: SolutionDirection1) {
    switch (sd.solution) {
      case 'integration': this.sdInfo.integration = sd.value; break;
      case 'dataModelling': this.sdInfo.dataModelling = sd.value; break;
      case 'adlL1': this.sdInfo.adlL1 = sd.value; break;
      case 'adlL2': this.sdInfo.adlL2 = sd.value; break;
      case 'gold': this.sdInfo.gold = sd.value; break;
      case 'mdm': this.sdInfo.mdm = sd.value; break;
      case 'ia': this.sdInfo.ia = sd.value; break;
      case 'dataQuality': this.sdInfo.dataQuality = sd.value; break;
      case 'informatica': this.sdInfo.informatica = sd.value; break;
      case 'azureSynapse': this.sdInfo.azureSynapse = sd.value; break;
    }
  }

  setDBSD() {
    this.solutionDirectionInfo.forEach(item => {
      if (item.solution === 'integration') {
        item.value = this.sdInfo.integration;
      } else if (item.solution === 'dataModelling') {
        item.value = this.sdInfo.dataModelling;
      } else if (item.solution === 'adlL1') {
        item.value = this.sdInfo.adlL1;
      } else if (item.solution === 'adlL2') {
        item.value = this.sdInfo.adlL2;
      } else if (item.solution === 'gold') {
        item.value = this.sdInfo.gold;
      } else if (item.solution === 'mdm') {
        item.value = this.sdInfo.mdm;
      } else if (item.solution === 'ia') {
        item.value = this.sdInfo.ia;
      } else if (item.solution === 'dataQuality') {
        item.value = this.sdInfo.dataQuality;
      } else if (item.solution === 'informatica') {
        item.value = this.sdInfo.informatica;
      } else if (item.solution === 'azureSynapse') {
        item.value = this.sdInfo.azureSynapse;
      }
    });
  }

  nextPage() {
    this.setDBSD();
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
    this.setDBSD();
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
  }

  isAnySD(): boolean {

    return this.solutionDirectionInfo.filter(item => item.value===true).length > 0;

    // return (this.solutionDirectionInfo.integration || this.solutionDirectionInfo.dataModelling || this.solutionDirectionInfo.adlL1 ||
    //   this.solutionDirectionInfo.adlL2 || this.solutionDirectionInfo.gold || this.solutionDirectionInfo.mdm ||
    //   this.solutionDirectionInfo.ia || this.solutionDirectionInfo.dataQuality || this.solutionDirectionInfo.informatica
    //   || this.solutionDirectionInfo.azureSynapse
    // );

  }

}
