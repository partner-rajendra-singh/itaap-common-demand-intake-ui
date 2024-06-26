import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { EventService } from '../../services/event.service';
import { Market } from '../../enums/market';
import { BusinessUnit } from '../../enums/businessUnit';
import { RequesterInfo } from '../../models/requester-info';
import { Spoc } from '../../models/spoc';
import { DemandStatus } from '../../enums/demand-status';
import { FieldsService } from "../../services/fields.service";

interface Domain {
  key: string;
  value: string;
}

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit {

  requesterInfo!: RequesterInfo;
  visibleSaveButton!: boolean;
  domainList!: Domain[];
  selectedDomain!: Domain;
  marketList!: string[];
  selectedMarket!: string[];
  otherMarket!: string;
  businessUnitList!: string[];
  selectedBusinessUnit: string[] = [];
  otherBusinessUnit!: string;


  constructor(public authService: AuthService, public demandIntakeService: DemandIntakeService, public fieldsService: FieldsService, private router: Router, private messageService: MessageService, public eventService: EventService) {
    if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
      this.visibleSaveButton = false;
    } else {
      this.visibleSaveButton = true;
    }
  }

  ngOnInit() {
    this.requesterInfo = this.demandIntakeService.getDemandInformation().requesterInfo;

    if (!this.requesterInfo.isAnotherRequester && this.eventService.isNewDemand) {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.authService.currentUserValue.email;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    } else {
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy;
    }

    this.marketList = Object.values(Market);
    this.businessUnitList = Object.values(BusinessUnit);
    this.selectedMarket = this.getMarketValueArray(this.demandIntakeService.getDemandInformation().requesterInfo.market);
    this.selectedBusinessUnit = this.getBUValueArray(this.demandIntakeService.getDemandInformation().requesterInfo.businessUnit);

    this.demandIntakeService.getRequesterDomain().pipe(
      map((response: any) => {
        // console.log("getRequesterDomain() : Response -> ", response);
        this.domainList = response;
        this.selectedDomain = this.getSelectedDomain();
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('getRequesterDomain() : ERROR -> ', error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  requesterChange(event: any) {
    if (!this.requesterInfo.isAnotherRequester) {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.authService.currentUserValue.email;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.authService.currentUserValue.email;
    } else {
      this.demandIntakeService.getDemandInformation().requesterInfo.requestedBy = this.requesterInfo.requestedBy;
      this.demandIntakeService.getDemandInformation().introduction.requestedBy = this.requesterInfo.requestedBy;
    }
  }

  getSelectedDomain(): Domain {
    let platform = this.domainList.find(item => item.key === this.demandIntakeService.getDemandInformation().requesterInfo.domain);
    if (!platform && !this.eventService.isNewDemand) {
      return { key: 'Other', value: 'Other' };
    } else if (!platform) {
      return { key: '', value: '' };
    }
    return JSON.parse(JSON.stringify(platform)) as Domain;
  }

  onMarketSelect() {
    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other) {
      const indexOther = this.selectedMarket.indexOf('Other');
      this.selectedMarket.splice(indexOther, 1);
      this.requesterInfo.market.push(this.otherMarket);
    }

    this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
    this.selectedMarket = Array.from(new Set(this.selectedMarket))
    this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market))
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }

  onDomainSelect() {
    if (this.selectedDomain.key != 'Other') {
      this.requesterInfo.domain = this.selectedDomain.key;
    }
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }

  onBUSelect() {
    let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other1) {
      const indexOther = this.selectedBusinessUnit.indexOf('Other');
      this.selectedBusinessUnit.splice(indexOther, 1);
      this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
    }

    this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
    this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit));
    this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit));
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
  }

  addSpoc() {
    this.requesterInfo.spoc.push(new Spoc);
  }

  removeSpoc() {
    this.requesterInfo.spoc.pop();
  }

  nextPage() {
    let movenext = true;
    this.requesterInfo.spoc.forEach(item => {
      if ((item.role != '' && item.email == '') || (item.role == '' && item.email != '')) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill stakeholder(s) properly!' });
        movenext = false;
      }
    });

    let movenext1 = true;
    if ((this.requesterInfo.isDemandPOC || (!this.requesterInfo.isDemandPOC && this.requesterInfo.project != '')) && this.selectedMarket.length > 0 && this.selectedBusinessUnit.length > 0 && this.selectedDomain && this.requesterInfo.requestedDate && this.requesterInfo.requestedBy != '' && this.requesterInfo.requesterRole != '') {
      if (this.selectedDomain.key != 'Other') {
        this.requesterInfo.domain = this.selectedDomain.key;
      }

      let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
      if (other) {
        const indexOther = this.selectedMarket.indexOf('Other');
        this.selectedMarket.splice(indexOther, 1);
        this.requesterInfo.market.push(this.otherMarket);
      }
      this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
      this.selectedMarket = Array.from(new Set(this.selectedMarket));
      this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market))
      this.demandIntakeService.demandInformation.requesterInfo.market = this.requesterInfo.market;

      let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
      if (other1) {
        const indexOther = this.selectedBusinessUnit.indexOf('Other');
        this.selectedBusinessUnit.splice(indexOther, 1);
        this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
      }
      this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
      this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit))
      this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit))
      this.demandIntakeService.demandInformation.requesterInfo.businessUnit = this.requesterInfo.businessUnit;

      this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;

    } else {
      movenext1 = false;
    }

    if (movenext && movenext1) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }

  }

  isOtherMarketSelected(): boolean {
    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other && other.length > 0) {
      return true;
    }
    return false;
  }

  isOtherBUSelected(): boolean {
    let other = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other && other.length > 0) {
      return true;
    }
    return false;
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

    let other = this.getMarketKeyArray(this.selectedMarket).find(item => item == 'Other');
    if (other) {
      const indexOther = this.selectedMarket.indexOf('Other');
      this.selectedMarket.splice(indexOther, 1);
      this.requesterInfo.market.push(this.otherMarket);
    }
    this.selectedMarket.forEach(item => this.requesterInfo.market.push(this.getMarketKey(item)));
    this.selectedMarket = Array.from(new Set(this.selectedMarket));
    this.requesterInfo.market = Array.from(new Set(this.requesterInfo.market))
    this.demandIntakeService.demandInformation.requesterInfo.market = this.requesterInfo.market;

    let other1 = this.getBUKeyArray(this.selectedBusinessUnit).find(item => item == 'Other');
    if (other1) {
      const indexOther = this.selectedBusinessUnit.indexOf('Other');
      this.selectedBusinessUnit.splice(indexOther, 1);
      this.requesterInfo.businessUnit.push(this.otherBusinessUnit);
    }
    this.selectedBusinessUnit.forEach(item => this.requesterInfo.businessUnit.push(this.getBUKey(item)));
    this.selectedBusinessUnit = Array.from(new Set(this.selectedBusinessUnit))
    this.requesterInfo.businessUnit = Array.from(new Set(this.requesterInfo.businessUnit))
    this.demandIntakeService.demandInformation.requesterInfo.businessUnit = this.requesterInfo.businessUnit;

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

  getMarketValue(key: string): string {
    const status = Object.keys(Market).indexOf(key as unknown as Market);
    let s = Object.values(Market)[status];
    return s;
  }

  getMarketValueArray(array: string[]): string[] {
    let output: string[] = [];
    array.forEach(key => {
      const status = Object.keys(Market).indexOf(key as unknown as Market);
      let s = Object.values(Market)[status];
      if (s) {
        output.push(s);
      } else {
        output.push('Other');
        this.otherMarket = key;
      }
    })

    return output;
  }

  getBUValueArray(array: string[]): string[] {
    let output: string[] = [];
    array.forEach(key => {
      const status = Object.keys(BusinessUnit).indexOf(key as unknown as BusinessUnit);
      let s = Object.values(BusinessUnit)[status];
      if (s) {
        output.push(s);
      } else {
        output.push('Other');
        this.otherBusinessUnit = key;
      }
    })
    return output;
  }

  getMarketKey(value: string): string {
    const index = Object.values(Market).indexOf(value as unknown as Market);
    return Object.keys(Market)[index];
  }

  getMarketKeyArray(array: string[]): string[] {
    let output: string[] = [];
    array.forEach(value => {
      const index = Object.values(Market).indexOf(value as unknown as Market);
      let s = Object.keys(Market)[index];
      output.push(s);
    })

    return output;
  }

  getBUKeyArray(array: string[]): string[] {
    let output: string[] = [];
    array.forEach(value => {
      const index = Object.values(BusinessUnit).indexOf(value as unknown as BusinessUnit);
      let s = Object.keys(BusinessUnit)[index];
      output.push(s);
    })

    return output;
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
