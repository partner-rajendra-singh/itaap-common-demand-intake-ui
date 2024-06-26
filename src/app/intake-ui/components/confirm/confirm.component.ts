import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../auth/auth.service';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { first } from 'rxjs';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  constructor(private eventService: EventService, private demandIntakeService: DemandIntakeService, private router: Router, private authService: AuthService, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to submit the demand!',
      accept: () => {
        this.submitDemand();
      },
      reject: () => {
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 1000 });

        let path = 'demand-intake/attachment';
        if (this.authService.isDM()) {
          if (this.eventService.isNewDemand) {
            path = 'demand-intake/attachment';
          } else {
            path = 'demand-intake/demandmanager';
          }

        } else if (this.authService.isCCB()) {
          if (this.eventService.isNewDemand) {
            path = 'demand-intake/attachment';
          } else {
            path = 'demand-intake/ccb';
          }
        }

        this.router.navigate([path]);
      }
    });
  }

  submitDemand() {
    this.demandIntakeService.submitDemand()
      .pipe(first())
      .subscribe(
        response => {
          console.log("submitDemand() : Response -> ", response)
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Submitted Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
          console.log("submitDemand() : ERROR -> ", error)
          this.messageService.add({ severity: 'error', summary: 'error', detail: 'Demand Failed to Submit!' });
        });
  }

}
