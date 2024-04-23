import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit {

  requesterInfo: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.requesterInfo = this.demandIntakeService.getDemandInformation().requesterInfo;
    // console.log("RequesterComponent Init: ", this.demandIntakeService.demandInformation)
  }

  nextPage() {
    if (this.requesterInfo.program != '' && this.requesterInfo.domain != '' && this.requesterInfo.requestDate != '') {
      this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
      this.router.navigate(['demand-intake/requirement']);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }
  }

  prevPage() {
    this.router.navigate(['demand-intake/introduction']);
  }

}
