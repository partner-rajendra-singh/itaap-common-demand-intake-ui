import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html'
})
export class RequesterComponent implements OnInit{

  personalInformation: any;

    submitted: boolean = false;

    constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

    ngOnInit() {
        this.personalInformation = this.demandIntakeService.getTicketInformation().personalInformation;
    }

    nextPage() {
      this.router.navigate(['demand-intake/requirement']);
        // if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
        //     this.demandIntakeService.ticketInformation.personalInformation = this.personalInformation;
        //     this.router.navigate(['demand-intake/seat']);

        //     return;
        // }

        this.submitted = true;
    }

    prevPage() {
      this.router.navigate(['demand-intake/introduction']);
    }

}
