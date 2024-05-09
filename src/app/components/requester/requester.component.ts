import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { RequesterDomain } from 'src/app/enums/requesterDomain';

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
  domainList!: string[];
  selectedDomain!: string;

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
  //   this.domainList = [
  //     { key: 'Digital_IT', value: 'Digital IT' },
  //     { key: 'Commercial_IT', value: 'Commercial IT' },
  //     { key: 'SCM_IT', value: 'SC&M IT' },
  //     { key: 'Innovation_Engineering', value: 'Innovation & Engineering' },
  //     { key: 'Group_Functions', value: 'Group Functions' },
  //     { key: 'EADI', value: 'EADI' },
  //     { key: 'Services_Solutions_IT', value: 'Services Solutions IT' },
  //     { key: 'Hyper_Automation', value: 'Hyper Automation' },
  //     { key: 'MA', value: 'M&A' },
  //     { key: 'Software_Vendor_Management', value: 'Software & Vendor Management' }
  // ];

  this.domainList = Object.values(RequesterDomain);

  // this.demandIntakeService.getRequesterDomain().pipe(
  //   map((response: any) => {
  //     this.domainList = response;
  //     console.log('getAllDemands() Response :', this.domainList);
  //     this.eventService.progressBarEvent.emit(false);
  //   }),
  //   catchError((error: any) => {
  //     console.log('Error', error);
  //     this.eventService.progressBarEvent.emit(false);
  //     return throwError(error);
  //   })
  // ).subscribe();

    this.selectedDomain = this.getDomainValue(this.demandIntakeService.getDemandInformation().requesterInfo.domain);
    console.log("RequesterComponent Init: ", this.demandIntakeService.demandInformation)
  }

  nextPage() {
    
    if (this.requesterInfo.program != '' && this.selectedDomain && this.requesterInfo.requestDate != '') {
      this.requesterInfo.domain = this.getDomainKey(this.selectedDomain);
      this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
      this.router.navigate(['demand-intake/requirement']);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  prevPage() {
    this.router.navigate(['demand-intake/introduction']);
  }

  savePage() {
    if(this.selectedDomain){
      this.requesterInfo.domain = this.getDomainKey(this.selectedDomain);
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

  getDomainValue(key: string): string {
    const status = Object.keys(RequesterDomain).indexOf(key as unknown as RequesterDomain);
    let s = Object.values(RequesterDomain)[status];
    return s;
  }

  getDomainKey(value: string): string {
    const index = Object.values(RequesterDomain).indexOf(value as unknown as RequesterDomain);
    return Object.keys(RequesterDomain)[index];
  }

}
