import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  nextPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['demand-intake/requester']);
  }

}
