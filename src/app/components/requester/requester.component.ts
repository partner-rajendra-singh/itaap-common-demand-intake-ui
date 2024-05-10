import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

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
    this.demandIntakeService.getRequesterDomain().pipe(
      map((response: any) => {
        this.domainList = response;
        console.log('getAllDemands() Response :', this.domainList);
        this.selectedDomain = this.getSelectedDomain();;
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
    return JSON.parse(JSON.stringify(this.domainList.find(item => item.key === this.demandIntakeService.getDemandInformation().requesterInfo.domain))) as Domain;
  }

  nextPage() {
    if (this.requesterInfo.program != '' && this.selectedDomain && this.requesterInfo.requestDate != '') {
      if (this.selectedDomain.key != 'Other') {
        this.requesterInfo.domain = this.selectedDomain.key;
      }

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
    if (this.selectedDomain && this.selectedDomain.key != 'Other') {
      this.requesterInfo.domain = this.selectedDomain.key;
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


}
