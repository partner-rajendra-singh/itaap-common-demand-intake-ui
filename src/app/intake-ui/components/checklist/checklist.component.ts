import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { EventService } from '../../services/event.service';
import { RefreshFrequency } from '../../enums/refreshFrequency';
import { LoadStrategy } from '../../enums/loadStrategy';
import { FieldsService } from "../../services/fields.service";
import { first } from 'rxjs';
import { DemandStatus } from '../../enums/demand-status';
import { DemandReferenceTool } from '../../enums/demand-reference-tool';


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
  visibleSaveButton!: boolean;
  referenceTools!: string[];
  selectedTool!: string;
  otherTool!: string;

  constructor(public demandIntakeService: DemandIntakeService, public fieldsService: FieldsService, private router: Router, private messageService: MessageService, public eventService: EventService) {
    if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }

  ngOnInit() {
    // console.log("ChecklistComponent ", this.eventService.solutionDirectionValue);
    if (this.eventService.solutionDirectionValue.length == 0) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/solution-direction/']);
      } else {
        this.router.navigate(['demand-intake/solution-direction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
    this.visibleTabs = this.eventService.solutionDirectionValue.filter(item => item.value);

    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
    this.refreshFrequencies = Object.values(RefreshFrequency);
    this.referenceTools = Object.values(DemandReferenceTool);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency != '') {
      this.selectedFrequency = this.getFrequencyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.frequency);
    }

    if (this.demandIntakeService.getDemandInformation().eADIInfo.ia != null && this.demandIntakeService.getDemandInformation().eADIInfo.ia.reportTool != '') {
      this.selectedTool = this.getToolValue(this.demandIntakeService.getDemandInformation().eADIInfo.ia.reportTool);
    }

    this.loadStrategies = Object.values(LoadStrategy);
    if (this.demandIntakeService.getDemandInformation().eADIInfo.adlL1 != null && this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy != '') {
      this.selectedLoadStrategy = this.getStrategyValue(this.demandIntakeService.getDemandInformation().eADIInfo.adlL1.loadStrategy);
    }
  }

  onToolSelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.ia.reportTool = this.getToolKey(this.selectedTool);

    if (this.selectedTool == 'Other') {
      this.eADIInfo.ia.reportTool = this.otherTool;
    }
  }

  onLoadStrategySelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);
  }

  onFrequencySelect() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.eADIInfo.adlL1.frequency = this.getFrequencyKey(this.selectedFrequency);
    this.eADIInfo.adlL1.loadStrategy = this.getStrategyKey(this.selectedLoadStrategy);

    this.eADIInfo.adlL1.reportTool = this.getToolKey(this.selectedTool);
    if (this.selectedTool == 'Other') {
      this.eADIInfo.adlL1.reportTool = this.otherTool;
    }

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

  onDatasetChange() {
    if (!this.eADIInfo.ia.datasetConsumed) {
      this.eADIInfo.ia.datasetConsumedText = "";
    }
  }

  onCDMChange() {
    if (!this.eADIInfo.ia.cdmConsumed) {
      this.eADIInfo.ia.cdmConsumedText = "";
    }
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

  getToolKey(value: string): string {
    const index = Object.values(DemandReferenceTool).indexOf(value as unknown as DemandReferenceTool);
    return Object.keys(DemandReferenceTool)[index];
  }

  getToolValue(key: string): string {
    const status = Object.keys(DemandReferenceTool).indexOf(key as unknown as DemandReferenceTool);
    let tool = Object.values(DemandReferenceTool)[status];
    if (!tool && !this.eventService.isNewDemand) {
      return DemandReferenceTool.Other;
    }
    return tool;
  }

  savePage() {
    this.demandIntakeService.saveDemand()
      .pipe(first())
      .subscribe(
        response => {
          console.log("saveDemand() : Response -> ", response)
          this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Demand Saved Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
          console.log("saveDemand() : ERROR -> ", error)
          this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Demand Failed to Save!' });
        });
  }


}
