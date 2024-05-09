import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { Introduction } from 'src/app/models/introduction';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {

  demandInfo: any;
  visibleSaveButton!: boolean;
  submitted: boolean = false;

  constructor(private authService: AuthService, public demandIntakeService: DemandIntakeService, private router: Router, private messageService: MessageService) {
    if (authService.isRequester()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != null) {
        this.visibleSaveButton = false;
      } else {
        this.visibleSaveButton = true;
      }
    } else {
      this.visibleSaveButton = false;
    }

  }

  ngOnInit() {
    this.demandInfo = this.demandIntakeService.getDemandInformation().introduction;
  }

  nextPage() {
    if (this.demandInfo.title != '' && this.demandInfo.description != '') {
      this.demandIntakeService.demandInformation.introduction = this.demandInfo;
      this.router.navigate(['demand-intake/requester']);
      this.submitted = true;
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Please fill required fields!' });
    }

  }

  savePage() {
    this.demandIntakeService.saveDemandWithAttachment()
      .pipe(first())
      .subscribe(
        response => {
          this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Demand Saved Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
          this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Demand Failed to Save!' });
        });
  }

}
