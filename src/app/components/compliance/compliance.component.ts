import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html'
})
export class ComplianceComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  nextPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['demand-intake/nfr']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/solution-direction']);
  }

}
