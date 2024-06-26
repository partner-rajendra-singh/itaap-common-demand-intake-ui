import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {MessageService} from 'primeng/api';
import {EventService} from '../../services/event.service';
import {SolutionDirection1} from '../../models/solution-direction1';
import {SolutionDirection} from '../../models/solution-direction';
import {FieldsService} from "../../services/fields.service";
import {AuthService} from "../../auth/auth.service";
import {first} from 'rxjs';
import {DemandStatus} from '../../enums/demand-status';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent implements OnInit {

  solutionDirectionInfo!: SolutionDirection1[];
  sdInfo: SolutionDirection = new SolutionDirection;
  dmDomainList: string[] = [];
  visibleSaveButton!: boolean;

  constructor(private authService: AuthService,
              public fieldsService: FieldsService,
              public demandIntakeService: DemandIntakeService,
              private router: Router, private messageService: MessageService, private eventService: EventService) {
  }

  ngOnInit() {
    // console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)

    if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }

    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
    this.eventService.solutionDirectionValue = this.solutionDirectionInfo;
    this.solutionDirectionInfo.forEach(item => {
      this.setLocalSD(item);
    });
    this.dmDomainList = this.authService.currentUserValue.domain;
  }

  setLocalSD(sd: SolutionDirection1) {
    switch (sd.solution) {
      case 'integration':
        this.sdInfo.integration = sd.value;
        break;
      case 'dataModelling':
        this.sdInfo.dataModelling = sd.value;
        break;
      case 'adlL1':
        this.sdInfo.adlL1 = sd.value;
        break;
      case 'adlL2':
        this.sdInfo.adlL2 = sd.value;
        break;
      case 'gold':
        this.sdInfo.gold = sd.value;
        break;
      case 'mdm':
        this.sdInfo.mdm = sd.value;
        break;
      case 'ia':
        this.sdInfo.ia = sd.value;
        break;
      case 'dataQuality':
        this.sdInfo.dataQuality = sd.value;
        break;
      case 'informatica':
        this.sdInfo.informatica = sd.value;
        break;
      case 'azureSynapse':
        this.sdInfo.azureSynapse = sd.value;
        break;
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
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please select at least one Solution Direction!'
      });
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
    return this.dmDomainList.length == 0 || this.solutionDirectionInfo.filter(item => item.value).length > 0;
  }

  savePage() {
    this.demandIntakeService.saveDemand()
      .pipe(first())
      .subscribe(
        response => {
          console.log("saveDemand() : Response -> ", response)
          this.messageService.add({
            key: 'success',
            severity: 'success',
            summary: 'Success',
            detail: 'Demand Saved Successfully!'
          });
          this.router.navigate(['view']);
        },
        error => {
          console.log("saveDemand() : ERROR -> ", error)
          this.messageService.add({
            key: 'error',
            severity: 'error',
            summary: 'Error',
            detail: 'Demand Failed to Save!'
          });
        });
  }

}
