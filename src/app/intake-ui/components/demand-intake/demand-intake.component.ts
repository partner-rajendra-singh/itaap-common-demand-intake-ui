import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import { DemandStatus } from '../../enums/demand-status';

@Component({
  selector: 'app-demand-intake',
  templateUrl: './demand-intake.component.html',

})
export class DemandIntakeComponent implements OnInit, OnDestroy {

  items!: MenuItem[];
  subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, public messageService: MessageService,
              public demandIntakeService: DemandIntakeService, public eventService: EventService, public authService: AuthService) {
    const demandIntakeId = this.activatedRoute.snapshot.paramMap.get('demandIntakeId');
    this.eventService.currentDemandIntakeId = this.demandIntakeService.demandInformation.introduction.demandIntakeId;
  }

  ngOnInit() {
    console.log("DemandIntakeComponent id ", this.eventService.currentDemandIntakeId);
    console.log("DemandIntakeComponent isNewDemand ", this.eventService.isNewDemand);

    if (this.eventService.isNewDemand) {
      this.items = [
        {
          label: 'Introduction',
          routerLink: ['introduction'],
          visible: true
        },
        {
          label: 'Requester',
          routerLink: 'requester',
          visible: true
        },
        {
          label: 'Requirement',
          routerLink: 'requirement',
          visible: true
        },
        {
          label: 'Solution Direction',
          routerLink: 'solution-direction',
          visible: this.authService.isDM() || this.authService.isCCB()
          // || (!this.eventService.isNewDemand && this.authService.isRequester() && this.eventService.isMyDemand && this.demandIntakeService.demandInformation.introduction.status!=DemandStatus.DRAFT),
        },
        {
          label: 'EADI',
          routerLink: 'checklist',
          visible: (this.authService.isDM() || this.authService.isCCB()),
        },
        {
          label: 'Attachment',
          routerLink: 'attachment',
          visible: true
        },
        {
          label: 'Demand Manager',
          routerLink: 'demandmanager',
          visible: (!this.eventService.isNewDemand && !this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB())),
        },
        {
          label: 'CCB Member',
          routerLink: 'ccb',
          visible: (!this.eventService.isNewDemand && !this.eventService.isMyDemand && this.authService.isCCB()),
        }
      ];
    } else {
      this.items = [
        {
          label: 'Introduction',
          routerLink: ['introduction/' + this.eventService.currentDemandIntakeId],
          visible: true
        },
        {
          label: 'Requester',
          routerLink: ['/demand-intake/requester/' + this.eventService.currentDemandIntakeId],
          visible: true
        },
        {
          label: 'Requirement',
          routerLink: ['/demand-intake/requirement/' + this.eventService.currentDemandIntakeId],
          visible: true
        },
        {
          label: 'Solution Direction',
          routerLink: ['/demand-intake/solution-direction/' + this.eventService.currentDemandIntakeId],
          visible: this.authService.isDM() || this.authService.isCCB()
            || (this.authService.isRequester() && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)),
        },
        {
          label: 'EADI',
          routerLink: ['/demand-intake/checklist/' + this.eventService.currentDemandIntakeId],
          visible: (this.authService.isDM() || this.authService.isCCB())
            || (this.authService.isRequester() && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)),
        },
        {
          label: 'Attachment',
          routerLink: ['/demand-intake/attachment/' + this.eventService.currentDemandIntakeId],
          visible: true
        },
        {
          label: 'DM',
          routerLink: ['/demand-intake/demandmanager/' + this.eventService.currentDemandIntakeId],
          visible: (!this.eventService.isMyDemand && (this.authService.isDM() || this.authService.isCCB())) ||
            ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)),
        },
        {
          label: 'CCB',
          routerLink: ['/demand-intake/ccb/' + this.eventService.currentDemandIntakeId],
          visible: (!this.eventService.isMyDemand && this.authService.isCCB())
            || ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status == DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == DemandStatus.CCB_REJECTED))
            || (!this.eventService.isMyDemand && this.authService.isDM() && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_CCB && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DM_HOLD),
        }
      ];
    }

    this.items = this.items.filter(item => item.visible);
    // console.log("this.items", this.items)
  }

  @HostListener('unloaded')
  public ngOnDestroy() {
    // console.log('Items destroyed1', this.subscription);
    if (this.subscription) {
      // console.log('Items destroyed2');
      this.subscription.unsubscribe();
    }
  }

}
