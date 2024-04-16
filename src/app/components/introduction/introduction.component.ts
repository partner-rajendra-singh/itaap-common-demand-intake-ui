import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {

  demandInfo: any;

  submitted: boolean = false;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router) {}

  ngOnInit() {
    this.demandInfo = this.demandIntakeService.getDemandInformation().intoduction;
  }
  nextPage() {
    this.demandIntakeService.demandInformation.intoduction = this.demandInfo;
    this.router.navigate(['demand-intake/requester']);
    this.submitted = true;
  }

}
