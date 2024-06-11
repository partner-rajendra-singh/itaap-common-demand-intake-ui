import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, catchError, throwError, first } from 'rxjs';
import { Approver } from '../../models/approver';
import { AdminService } from '../../services/admin.service';
import { EventService } from '../../services/event.service';
import { DemandIntakeService } from '../../services/demand-intake.service';

@Component({
  selector: 'app-ccbcrud',
  templateUrl: './ccbcrud.component.html',
})
export class CCBCRUDComponent implements OnInit {

  ccbList!: Approver[];
  visibleAddCCBDialog!: boolean;
  visibleUpdateCCBDialog!: boolean;

  constructor(public demandIntakeService: DemandIntakeService, private messageService: MessageService, public eventService: EventService, public adminService: AdminService) { }

  ngOnInit() {
    this.adminService.approver = new Approver;
    this.adminService.getAllCCB().pipe(
      map((response: any) => {
        this.ccbList = response;

        console.log('getAllCCB() : Response -> ', this.ccbList);
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('getAllCCB() : ERROR -> ', error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  showAddCCBDialog() {
    this.adminService.setApprover(new Approver);
    this.visibleAddCCBDialog = true;
  }

  showUpdateCCBDialog(dm: Approver) {
    this.adminService.setApprover(dm);
    this.visibleUpdateCCBDialog = true;
  }

  closeAddCCBDialog() {
    this.visibleAddCCBDialog = false;
  }

  closeUpdateCCBDialog() {
    this.visibleUpdateCCBDialog = false;
  }

  onSubmit() {
    this.eventService.progressBarEvent.emit(true);
    if (this.adminService.validateApproverRequest()) {
      this.adminService.addApprover('CCB_MEMBER')
        .pipe(first())
        .subscribe(
          response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CCB Member is added successfully!' });
            this.closeAddCCBDialog();
            this.ngOnInit();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add CCB Member!' });
            this.closeAddCCBDialog();
            this.ngOnInit();
          });
    }
    else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
    }
  }

  onUpdate() {
    this.eventService.progressBarEvent.emit(true);
    if (this.adminService.validateApproverRequest()) {
      this.adminService.updateApprover('CCB_MEMBER')
        .pipe(first())
        .subscribe(
          response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'CCB Member is updated successfully!' });
            this.closeUpdateCCBDialog();
            this.ngOnInit();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update CCB Member!' });
            this.closeUpdateCCBDialog();
            this.ngOnInit();
          });
    }
    else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
    }

  }

}
