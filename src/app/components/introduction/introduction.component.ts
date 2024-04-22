import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { Introduction } from 'src/app/models/introduction';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {

  demandInfo: any;

  submitted: boolean = false;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {}

  ngOnInit() {
    this.demandInfo = this.demandIntakeService.getDemandInformation().introduction;
  }
  
  nextPage() {
    if(this.demandInfo.title != '' && this.demandInfo.description != ''){
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
      this.router.navigate(['demand-intake/requester']);
      this.submitted = true;
    }else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill required fields!' });
    }

  }

}
