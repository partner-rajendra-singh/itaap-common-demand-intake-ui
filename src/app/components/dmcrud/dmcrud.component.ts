import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { catchError, first, map, throwError } from 'rxjs';
import { Approver } from 'src/app/models/approver';
import { AdminService } from 'src/app/services/admin.service';
import { DemandIntakeService } from 'src/app/services/demand-intake.service';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-dmcrud',
  templateUrl: './dmcrud.component.html',
})
export class DMCRUDComponent {

  dmList!: Approver[];
  visibleAddDMDialog!: boolean;
  visibleUpdateDMDialog!: boolean;

  constructor(private messageService: MessageService, private eventService: EventService, public adminService: AdminService) { }

  ngOnInit() {
    
    this.adminService.getAllDM().pipe(
      map((response: any) => {
        this.dmList = response;
             
        console.log('getAllDM() Response :',this.dmList);
        this.eventService.progressBarEvent.emit(false);
      }),
      catchError((error: any) => {
        console.log('Error', error);
        this.eventService.progressBarEvent.emit(false);
        return throwError(error);
      })
    ).subscribe();

  }

  showAddDMDialog(){
    this.adminService.setApprover(new Approver);
    this.visibleAddDMDialog = true;
  }

  showUpdateDMDialog(dm: Approver){
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
          this.closeAddDMDialog();
          this.ngOnInit();
        });
  }

  onUpdate(){

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
          this.closeUpdateDMDialog();
          this.ngOnInit();
        });

  }

}
