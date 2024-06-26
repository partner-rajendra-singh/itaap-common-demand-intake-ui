import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription, first} from 'rxjs';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {DemandStatus} from '../../enums/demand-status';

interface EventItem {
  status?: string;
  date?: string;
  actionBy?: string;
  description?: string;
}

@Component({
  selector: 'app-demand-intake',
  templateUrl: './demand-intake.component.html',
})
export class DemandIntakeComponent implements OnInit, OnDestroy {

  events: EventItem[];
  items!: MenuItem[];
  subscription!: Subscription;
  sidebarVisible2: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, public messageService: MessageService,
              public demandIntakeService: DemandIntakeService, public eventService: EventService, public authService: AuthService) {
    const demandIntakeId = this.activatedRoute.snapshot.paramMap.get('demandIntakeId');
    this.eventService.currentDemandIntakeId = this.demandIntakeService.demandInformation.introduction.demandIntakeId;

    this.events = [
      {status: 'Drafted', date: '15/10/2020 10:30', actionBy: 'Pankaj', description: 'Draft description'},
      {status: 'Stakeholder - X', date: '15/10/2020 10:30', actionBy: 'Pradnya', description: 'Stakeholder-X remarks'},
      {status: 'Stakeholder - Y', date: '15/10/2020 10:30', actionBy: 'Sachin', description: 'Stakeholder-Y remarks'},
      {status: 'Demand Raised', date: '15/10/2020 10:30', actionBy: 'Pankaj', description: 'Demand raising desc'},
      {status: 'DM - ITaaP', date: '15/10/2020 10:30', actionBy: 'Lucy', description: 'DM-ItaaP remarks'},
      {status: 'DM - ADL L1', date: '15/10/2020 10:30', actionBy: 'Rajendra', description: 'DM-ADL L1 remarks'},
      {status: 'CCM Member', date: '15/10/2020 16:15', actionBy: 'Rakesh', description: 'CCB Member remarks'}
    ];
  }

  ngOnInit() {
    // console.log("DemandIntakeComponent id ", this.eventService.currentDemandIntakeId);
    // console.log("DemandIntakeComponent isNewDemand ", this.eventService.isNewDemand);

    // this.demandIntakeService.saveDemand()
    //   .pipe(first())
    //   .subscribe(
    //     response => {
    //       console.log("saveDemand() : Response -> ", response)
    //     },
    //     error => {
    //       console.log("saveDemand() : ERROR -> ", error)
    //     });

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
          visible: false
        },
        {
          label: 'EADI',
          routerLink: 'checklist',
          visible: false
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
          visible: ((!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand) && (this.authService.isDM() || this.authService.isCCB())) ||
          ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
            (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)),
        },
        {
          label: 'EADI',
          routerLink: ['/demand-intake/checklist/' + this.eventService.currentDemandIntakeId],
          visible: ((!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand) && (this.authService.isDM() || this.authService.isCCB())) ||
          ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
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
          visible: ((!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand) && (this.authService.isDM() || this.authService.isCCB())) ||
            ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)),
        },
        {
          label: 'CCB',
          routerLink: ['/demand-intake/ccb/' + this.eventService.currentDemandIntakeId],
          visible: (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.authService.isCCB())
            || ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) &&
              (this.demandIntakeService.demandInformation.introduction.status == DemandStatus.CCB_HOLD || this.demandIntakeService.demandInformation.introduction.status == DemandStatus.ACCEPTED || this.demandIntakeService.demandInformation.introduction.status == DemandStatus.CCB_REJECTED || this.demandIntakeService.demandInformation.introduction.status == DemandStatus.CCB_MODIFICATION))
            || (!this.eventService.isMyDemand && this.authService.isDM() && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_CCB && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DM_HOLD),
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
