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
    this.demandInfo = this.demandIntakeService.getDemandInformation().introduction;
  }
  nextPage() {
    this.demandIntakeService.demandInformation.introduction = this.demandInfo;
    this.router.navigate(['demand-intake/requester']);
    this.submitted = true;
  }

}
