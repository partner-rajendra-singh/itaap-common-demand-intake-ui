import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { DemandDecision } from 'src/app/models/demand-decision';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-demandmanager',
  templateUrl: './demandmanager.component.html'
})
export class DemandManagerComponent {

  decisions: DemandDecision[] | undefined;
  visibleNextButton!: boolean;
  visibleSubmitButton!: boolean;

  demandManagerInfo!: any;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService,
    private authService: AuthService
  ) {
    if(authService.isDM()){
      this.visibleNextButton = false;
      this.visibleSubmitButton = true;
    }else{
      this.visibleNextButton = true;
      this.visibleSubmitButton = false;
    }
  }

  ngOnInit() { 
    this.demandManagerInfo = this.demandIntakeService.getDemandInformation().demandManagerInfo;
    this.decisions = [
        {name: 'Approve', code: 'APPROVED'},
        {name: 'Rejected', code: 'REJECTED'},
        {name: 'OnHold', code: 'ON_HOLD'},
        {name: 'Need Mofidification', code: 'MODIFICATION'}
    ];
  }

  prevPage() {
    this.router.navigate(['demand-intake/attachment']);
  }

  nextPage() {
    this.demandManagerInfo.decision = this.demandManagerInfo.decision.code;
    this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
    this.router.navigate(['demand-intake/ccb']);
  }

  submitPage() {
    this.demandManagerInfo.decision = this.demandManagerInfo.decision.code;
    this.demandIntakeService.getDemandInformation().demandManagerInfo = this.demandManagerInfo;
    this.demandIntakeService.submitDemand()
    .pipe(first())
    .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
          this.router.navigate(['demand-intake']);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'Demand Failed!' });
        });
  }

}
