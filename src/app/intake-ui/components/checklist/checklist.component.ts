import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { EventService } from '../../services/event.service';
import { RefreshFrequency } from '../../enums/refreshFrequency';
import { LoadStrategy } from '../../enums/loadStrategy';
import {FieldsService} from "../../services/fields.service";


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent implements OnInit {

  eADIInfo!: any;
  refreshFrequencies!: string[];
  selectedFrequency!: string;
  loadStrategies!: string[];
  selectedLoadStrategy!: string;
  visibleTabs: any = [];

  constructor(public demandIntakeService: DemandIntakeService,public fieldsService: FieldsService, private router: Router, private messageService: MessageService, public eventService: EventService) { }

  ngOnInit() {
    // console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    if (this.eventService.solutionDirectionValue.length == 0) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/solution-direction/']);
      } else {
        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
    this.visibleTabs = this.eventService.solutionDirectionValue.filter(item => item.value === true);

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
