import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { Introduction } from '../../models/introduction';
import { first } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { EventService } from '../../services/event.service';
import { ArchitectAlignment } from '../../models/architect-alignment';
import { DemandStatus } from '../../enums/demand-status';
import { FieldsService } from "../../services/fields.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {

  demandInfo!: Introduction;
  visibleSaveButton!: boolean;
  architectAlignmentInfo!: ArchitectAlignment[];

  constructor(public eventService: EventService,
    private authService: AuthService,
    public fieldsService: FieldsService,
    public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {
    if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }

  }

  ngOnInit() {
    this.demandIntakeService.getDemandInformation().introduction.updatedBy = this.authService.currentUserValue.email;
    this.demandInfo = this.demandIntakeService.getDemandInformation().introduction;
    this.architectAlignmentInfo = this.demandIntakeService.getDemandInformation().architectAlignmentInfo;

    if(this.eventService.isNewDemand){
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    }
    
  }

  addAlignment() {
    this.architectAlignmentInfo.push(new ArchitectAlignment);
  }

  removeAlignment() {
    this.architectAlignmentInfo.pop();
  }

  nextPage() {

    let movenext = true;
    this.architectAlignmentInfo.forEach(item => {
      if ((this.demandInfo.architectAligned) && (!this.eventService.checkEmailValue(item.email))) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill alignment properly!' });
        movenext = false;
      }
    });

    let movenext1 = true;
    if (this.demandInfo.title != '' && this.demandInfo.description != '') {
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
    } else {
      movenext1 = false;
    }

    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requester']);
      } else {
        this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }

  }

  validateIntroductionInfoAndSave(saveAndNavigateToViewFlag: boolean) {
    // console.log("Introduction : ", this.demandIntakeService.demandInformation)
    let movenext = true;
    this.architectAlignmentInfo.forEach(item => {
      if ((this.demandInfo.architectAligned) && (!this.eventService.checkEmailValue(item.email))) {
        movenext = false;
      }
    });

    let movenext1 = true;
    if (this.demandInfo.title != '' && this.demandInfo.description != '') {
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
    } else {
      movenext1 = false;
    }

    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        //this.router.navigate(['demand-intake/requester']);
        this.savePage(saveAndNavigateToViewFlag);
      } else {
        this.router.navigate(['demand-intake/requester/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  savePage(saveAndNavigateToViewFlag: boolean) {
    if (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.ACCEPTED && this.demandIntakeService.demandInformation.introduction.status != 'REJECTED') {
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
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
            // this.router.navigate(['view']);
            this.demandIntakeService.demandInformation.introduction.demandIntakeId = response.demandIntakeId;
            this.demandIntakeService.demandInformation.introduction.requestedBy = response.requestedBy;
            if (saveAndNavigateToViewFlag) {
              this.router.navigate(['view']);
            } else {
              this.router.navigate(['demand-intake/requester']);
            }
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
}
