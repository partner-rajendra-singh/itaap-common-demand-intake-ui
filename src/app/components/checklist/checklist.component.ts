import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html'
})
export class ChecklistComponent {

  eADIInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  ngOnInit(){
    this.eADIInfo = this.demandIntakeService.getDemandInformation().eADIInfo;
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().eADIInfo = this.eADIInfo;
    this.router.navigate(['demand-intake/attachment']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/solution-direction']);
  }


}
