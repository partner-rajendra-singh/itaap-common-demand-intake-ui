import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event.service';
import { RefreshFrequency } from 'src/app/enums/refreshFrequency';
import { LoadStrategy } from 'src/app/enums/loadStrategy';

interface EADITab {
  index: number,
  name: string,
  visible: boolean
}

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
  tabs: EADITab[] = [];
  visibleTabs: any = [];

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public eventService: EventService) { }

  ngOnInit() {
    console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    this.visibleTabs = this.eventService.solutionDirectionValue.filter(item => item.value===true);
    // this.setTabsVisibility();

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

  setTabsVisibility() {
    // this.tabs.push({ index: 0, name: 'integration', visible: this.eventService.solutionDirectionValue.integration });
    // this.tabs.push({ index: 1, name: 'dataModelling', visible: this.eventService.solutionDirectionValue.dataModelling });
    // this.tabs.push({ index: 2, name: 'adlL1', visible: this.eventService.solutionDirectionValue.adlL1 });
    // this.tabs.push({ index: 3, name: 'adlL2', visible: this.eventService.solutionDirectionValue.adlL2 });
    // this.tabs.push({ index: 4, name: 'gold', visible: this.eventService.solutionDirectionValue.gold });
    // this.tabs.push({ index: 5, name: 'mdm', visible: this.eventService.solutionDirectionValue.mdm });
    // this.tabs.push({ index: 6, name: 'ia', visible: this.eventService.solutionDirectionValue.ia });
    // this.tabs.push({ index: 7, name: 'dataQuality', visible: this.eventService.solutionDirectionValue.dataQuality });
    // this.tabs.push({ index: 8, name: 'informatica', visible: this.eventService.solutionDirectionValue.informatica });
    // this.tabs.push({ index: 9, name: 'azureSynapse', visible: this.eventService.solutionDirectionValue.azureSynapse });

    this.visibleTabs = this.tabs.filter(item => item.visible);
    // this.tabs.filter(item => item.name =='integration').at(0).visible
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);

    console.log("**", this.demandIntakeService.getDemandInformation())

    if (this.eventService.selectedEADITabIndex < this.visibleTabs.length - 1) {
      this.eventService.selectedEADITabIndex += 1;
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/attachment']);
      } else {
        this.router.navigate(['demand-intake/attachment/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }

  onTabChange(event: any) {
    console.log("tab index : ", event.index);
    this.eventService.selectedEADITabIndex = event.index;
  }

  prevPage() {
    if (this.eventService.selectedEADITabIndex > 0) {
      this.eventService.selectedEADITabIndex -= 1;
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/solution-direction']);
      } else {
        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }

  showTab(name: string): boolean {
    let obj = this.eventService.solutionDirectionValue.find(item => item.solution === name);
    if (obj) {
      return obj.value;
    };
    return false;

    // switch (name) {
    //   case 'integration': return this.eventService.solutionDirectionValue.integration;
    //   case 'dataModelling': return this.eventService.solutionDirectionValue.dataModelling;
    //   case 'adlL1': return this.eventService.solutionDirectionValue.adlL1;
    //   case 'adlL2': return this.eventService.solutionDirectionValue.adlL2;
    //   case 'gold': return this.eventService.solutionDirectionValue.gold;
    //   case 'mdm': return this.eventService.solutionDirectionValue.mdm;
    //   case 'ia': return this.eventService.solutionDirectionValue.ia;
    //   case 'dataQuality': return this.eventService.solutionDirectionValue.dataQuality;
    //   case 'informatica': return this.eventService.solutionDirectionValue.informatica;
    //   case 'azureSynapse': return this.eventService.solutionDirectionValue.azureSynapse;
    // }

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
