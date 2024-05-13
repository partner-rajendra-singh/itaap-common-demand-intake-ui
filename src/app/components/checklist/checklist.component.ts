import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';
import { RefreshFrequency } from 'src/app/enums/refreshFrequency';
import { LoadStrategy } from 'src/app/enums/loadStrategy';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  eADIInfo!: any;
  refreshFrequencies!: string[];
  selectedFrequency!: string;
  loadStrategies!: string[];
  selectedLoadStrategy!: string;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public eventService: EventService) { }

  ngOnInit() {
    console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
    this.refreshFrequencies = Object.values(RefreshFrequency);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency != '') {
      this.selectedFrequency = this.getFrequencyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency);
    }


    this.loadStrategies = Object.values(LoadStrategy);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy != '') {
      this.selectedLoadStrategy = this.getStrategyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy);
    }
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);
    this.router.navigate(['demand-intake/attachment']);
  }

  prevPage() {
    this.router.navigate(['demand-intake/solution-direction']);
  }

  showTab(name: string): boolean {
    switch (name) {
      case 'integration': return this.eventService.solutionDirectionValue.integration;
      case 'dataModelling': return this.eventService.solutionDirectionValue.dataModelling;
      case 'adlL1': return this.eventService.solutionDirectionValue.adlL1;
      case 'adlL2': return this.eventService.solutionDirectionValue.adlL2;
      case 'gold': return this.eventService.solutionDirectionValue.gold;
      case 'mdm': return this.eventService.solutionDirectionValue.mdm;
      case 'ia': return this.eventService.solutionDirectionValue.ia;
      case 'dataQuality': return this.eventService.solutionDirectionValue.dataQuality;
      case 'informatica': return this.eventService.solutionDirectionValue.informatica;
      case 'azureSynapse': return this.eventService.solutionDirectionValue.azureSynapse;
    }

    return false;
  }

  getFrequencyKey(value: string): string {
    const index = Object.values(RefreshFrequency).indexOf(value as unknown as RefreshFrequency);
    return Object.keys(RefreshFrequency)[index];
  }

  getFrequencyValue(key: string): string {
    const status = Object.keys(RefreshFrequency).indexOf(key as unknown as RefreshFrequency);
    let s = Object.values(RefreshFrequency)[status];
    return s;
  }

  getStrategyKey(value: string): string {
    const index = Object.values(LoadStrategy).indexOf(value as unknown as LoadStrategy);
    return Object.keys(LoadStrategy)[index];
  }

  getStrategyValue(key: string): string {
    const status = Object.keys(LoadStrategy).indexOf(key as unknown as LoadStrategy);
    let s = Object.values(LoadStrategy)[status];
    return s;
  }


}
