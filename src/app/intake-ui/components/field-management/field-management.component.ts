import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {map} from 'rxjs';
import {Approver} from '../../models/approver';
import {AdminService} from '../../services/admin.service';
import {EventService} from '../../services/event.service';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {FieldMgmt} from '../../models/field-label-tooltip';

@Component({
  selector: 'app-field-management',
  templateUrl: './field-management.component.html',
})
export class FieldManagementComponent implements OnInit {

  fields!: FieldMgmt[];
  clonedField: { [key: string]: FieldMgmt } = {};
  field: FieldMgmt = new FieldMgmt();

  constructor(public demandIntakeService: DemandIntakeService,
              private messageService: MessageService,
              public eventService: EventService,
              public adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.approver = new Approver;
    this.loadTableData();

  }

  loadTableData() {
    this.adminService.getAllFields().pipe(
      map((response: any) => {
        this.fields = response;
        console.log('getAllFields() : Response -> ', this.fields);
        this.eventService.progressBarEvent.emit(false);
      })
    ).subscribe();
  }

  onRowEditInit(field: FieldMgmt) {
    this.clonedField[field.key as string] = {...field};
  }

  onRowEditCancel(field: FieldMgmt, index: number) {
    this.fields[index] = this.clonedField[field.key as string];
    delete this.clonedField[field.key as string];
  }

  onRowEditSave(field: FieldMgmt) {
    this.adminService.updateField(field).pipe(
      map((response: any) => {
        console.log('updateField() : Response -> ', response);
        this.loadTableData();
        this.eventService.progressBarEvent.emit(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Updated Key : ' + this.field.key
        });
      })
    ).subscribe();
  }

  addField() {
    this.adminService
      .addField(this.field)
      .subscribe(
        response => {
          console.log('addField() : Response -> ', response);
          this.loadTableData();
          this.eventService.progressBarEvent.emit(false);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Successfully Added Key : ' + this.field.key
          });
          this.resetField();
        },
        error => {
          this.eventService.progressBarEvent.emit(false);
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Field could not be added : ' + error});
        });
  }

  resetField() {
    this.field = new FieldMgmt();
  }
}
