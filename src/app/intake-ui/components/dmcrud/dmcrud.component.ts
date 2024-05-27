import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { ApproverDomain } from '../../enums/approver-domain';
import { Approver } from '../../models/approver';
import { AdminService } from '../../services/admin.service';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-dmcrud',
  templateUrl: './dmcrud.component.html',
})
export class DMCRUDComponent {

  dmList!: Approver[];
  visibleAddDMDialog!: boolean;
  visibleUpdateDMDialog!: boolean;

  domains!: string[];
  selectedDomain!: string;

  constructor(public demandIntakeService: DemandIntakeService, private messageService: MessageService, public eventService: EventService, public adminService: AdminService) { }

  ngOnInit() {
    this.adminService.approver = new Approver;
    this.domains = Object.values(ApproverDomain);
    // this.selectedDomain = this.getValue(this.demandIntakeService.getDemandInformation().demandManagerInfo.domain);

    this.adminService.getAllDM().pipe(
      map((response: any) => {
        this.dmList = response;

        console.log('getAllDM() Response :', this.dmList);
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('Error', error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  getValue(key: string): string {
    const status = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
    let s = Object.values(ApproverDomain)[status];
    return s;
  }

  getKey(value: string): string {
    const index = Object.values(ApproverDomain).indexOf(value as unknown as ApproverDomain);
    return Object.keys(ApproverDomain)[index];
  }

  showAddDMDialog() {
    this.adminService.setApprover(new Approver);
    this.visibleAddDMDialog = true;
  }

  showUpdateDMDialog(dm: Approver) {
    this.selectedDomain = this.getValue(dm.domain);
    dm.domain = this.getKey(this.selectedDomain);
    this.adminService.setApprover(dm);
    this.visibleUpdateDMDialog = true;
  }

  closeAddDMDialog() {
    this.visibleAddDMDialog = false;
  }

  closeUpdateDMDialog() {
    this.visibleUpdateDMDialog = false;
  }

  onSubmit() {
    this.eventService.progressBarEvent.emit(true);
    console.log("this.selectedDomain", this.selectedDomain)
    // if (this.selectedDomain && this.selectedDomain != '') {

    if (this.adminService.validateApproverRequest()) {
      this.adminService.approver.domain = this.getKey(this.adminService.approver.domain);
      this.adminService.addApprover('DEMAND_MANAGER')
        .pipe(first())
        .subscribe(
          response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Manager is added successfully!' });
            this.closeAddDMDialog();
            this.ngOnInit();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add Demand Manager!' });
            this.eventService.progressBarEvent.emit(false);
            this.closeAddDMDialog();
            this.ngOnInit();
          });

    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
      this.eventService.progressBarEvent.emit(false);
    }
    // } else {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
    //   this.eventService.progressBarEvent.emit(false);
    // }
  }

  onUpdate() {
    this.eventService.progressBarEvent.emit(true);

    if (this.adminService.validateApproverRequest()) {
      this.adminService.approver.domain = this.getKey(this.adminService.approver.domain);
      this.adminService.updateApprover('DEMAND_MANAGER')
        .pipe(first())
        .subscribe(
          response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Manager is updated successfully!' });
            this.closeUpdateDMDialog();
            this.ngOnInit();
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update Demand Manager!' });
            this.eventService.progressBarEvent.emit(false);
            this.closeUpdateDMDialog();
            this.ngOnInit();
          });

    } else {
      this.eventService.progressBarEvent.emit(false);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill the all the fields!' });
    }

  }

}
