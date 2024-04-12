import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-nfr',
  templateUrl: './nfr.component.html'
})
export class NfrComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  nextPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['demand-intake/attachment']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/compliance']);
  }

}
