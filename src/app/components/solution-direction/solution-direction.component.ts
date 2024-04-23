import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-solution-direction',
  templateUrl: './solution-direction.component.html'
})
export class SolutionDirectionComponent {

  solutionDirectionInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  ngOnInit() {
    // console.log("SolutionDirectionComponent Init: ", this.demandIntakeService.demandInformation)
    this.solutionDirectionInfo = this.demandIntakeService.getDemandInformation().solutionDirectionInfo;
  }

  nextPage() {
    this.demandIntakeService.getDemandInformation().solutionDirectionInfo = this.solutionDirectionInfo;
    this.router.navigate(['demand-intake/checklist']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/requirement']);
  }

}
