import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit{

  requesterInfo: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  ngOnInit() {
      this.requesterInfo = this.demandIntakeService.getDemandInformation().requesterInfo;
      console.log("RequesterComponent Init: ", this.demandIntakeService.demandInformation)
  }

  nextPage() {
    this.demandIntakeService.demandInformation.requesterInfo = this.requesterInfo;
    this.router.navigate(['demand-intake/requirement']);
  }

  prevPage() {
    this.router.navigate(['demand-intake/introduction']);
  }

}
