import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  nextPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['demand-intake/compliance']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/requirement']);
  }

}
