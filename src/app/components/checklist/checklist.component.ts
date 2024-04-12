import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  nextPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['demand-intake/compliance']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/solution-direction']);
  }


}
