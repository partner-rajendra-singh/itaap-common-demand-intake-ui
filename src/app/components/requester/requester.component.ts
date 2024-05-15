import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { Market } from 'src/app/enums/market';
import { BusinessUnit } from 'src/app/enums/businessUnit';

interface Domain {
  key: string;
  value: string;
}

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit {

  requesterInfo: any;
  visibleSaveButton!: boolean;
  domainList!: Domain[];
  selectedDomain!: Domain;
  marketList!: string[];
  selectedMarket!: string;
  businessUnitList!: string[];
  selectedBusinessUnit!: string;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService, public eventService: EventService) {
    if (authService.isRequester()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != null) {
        this.visibleSaveButton = false;
      } else {
        this.visibleSaveButton = true;
      }
    } else {
      this.visibleSaveButton = false;
    }
  }

  ngOnInit() {
    this.requesterInfo = this.demandIntakeService.getDemandInformation().requesterInfo;
    this.marketList = Object.values(Market);
    this.businessUnitList = Object.values(BusinessUnit);

    this.selectedMarket = this.getMarketValue(this.demandIntakeService.getDemandInformation().requesterInfo.market);
    if (!this.selectedMarket && !this.eventService.isNewDemand) {
      this.selectedMarket = 'Other';
    }

    this.selectedBusinessUnit = this.getBUValue(this.demandIntakeService.getDemandInformation().requesterInfo.businessUnit);
    if (!this.selectedBusinessUnit && !this.eventService.isNewDemand) {
      this.selectedBusinessUnit = 'Other';
    }

    this.demandIntakeService.getRequesterDomain().pipe(
      map((response: any) => {
        this.domainList = response;
        console.log('getAllDemands() Response :', this.domainList);
        this.selectedDomain = this.getSelectedDomain();
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('Error', error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

    console.log("RequesterComponent Init: ", this.demandIntakeService.demandInformation)
  }

  getSelectedDomain(): Domain {
    let platform = this.domainList.find(item => item.key === this.demandIntakeService.getDemandInformation().requesterInfo.domain);
    if (!platform && !this.eventService.isNewDemand) {
      this.selectedDomain = { key: 'Other', value: 'Other' };
    }
    return JSON.parse(JSON.stringify(platform)) as Domain;
  }

  nextPage() {
    if (this.requesterInfo.program != '' && this.selectedDomain && this.requesterInfo.requestDate != '') {
      if (this.selectedDomain.key != 'Other') {
        this.requesterInfo.domain = this.selectedDomain.key;
      }

      if (this.getMarketKey(this.selectedMarket) != 'Other') {
        this.requesterInfo.market = this.getMarketKey(this.selectedMarket);
      }

      if (this.getBUKey(this.selectedBusinessUnit) != 'Other') {
        this.requesterInfo.businessUnit = this.getBUKey(this.selectedBusinessUnit);
      }

      this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;

      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
      
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  prevPage() {
    if (this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/introduction']);
    } else {
      this.router.navigate(['demand-intake/introduction/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
    }
  }

  savePage() {
    if (this.selectedDomain && this.selectedDomain.key != 'Other') {
      this.requesterInfo.domain = this.selectedDomain.key;
    }

    if (this.getMarketKey(this.selectedMarket) != 'Other') {
      this.requesterInfo.market = this.getMarketKey(this.selectedMarket);
    }

    if (this.getBUKey(this.selectedBusinessUnit) != 'Other') {
      this.requesterInfo.businessUnit = this.getBUKey(this.selectedBusinessUnit);
    }

    this.demandIntakeService.saveDemandWithAttachment()
      .pipe(first())
      .subscribe(
        response => {
          this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Demand Saved Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
          this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Demand Failed to Save!' });
        });
  }

  getMarketValue(key: string): string {
    const status = Object.keys(Market).indexOf(key as unknown as Market);
    let s = Object.values(Market)[status];
    return s;
  }

  getMarketKey(value: string): string {
    const index = Object.values(Market).indexOf(value as unknown as Market);
    return Object.keys(Market)[index];
  }

  getBUValue(key: string): string {
    const status = Object.keys(BusinessUnit).indexOf(key as unknown as BusinessUnit);
    let s = Object.values(BusinessUnit)[status];
    return s;
  }

  getBUKey(value: string): string {
    const index = Object.values(BusinessUnit).indexOf(value as unknown as BusinessUnit);
    return Object.keys(BusinessUnit)[index];
  }

}
