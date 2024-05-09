import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { EventService } from 'src/app/services/event.service';
import * as FileSaver from 'file-saver';

interface UploadEvent {
  originalEvent: Event;
  files: Blob[];
}

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  providers: [MessageService]
})
export class AttachmentComponent {

  attachmentInfo: any;

  submitted: boolean = false;
  visibleNextButton!: boolean;
  visibleSaveButton!: boolean;
  visibleSubmitButton!: boolean;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,
    private messageService: MessageService, private authService: AuthService, private eventService: EventService
  ) {

    if (authService.isRequester()) {
      this.visibleNextButton = false;
      if (this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != null) {
        this.visibleSaveButton = false;
        this.visibleSubmitButton = false;
      } else {
        this.visibleSaveButton = true;
        this.visibleSubmitButton = true;
      }

    } else {
      if (this.eventService.isNewDemand) {
        this.visibleNextButton = false;
        this.visibleSaveButton = false;
        this.visibleSubmitButton = true;
      } else if (this.eventService.isMyDemand) {
        this.visibleNextButton = false;
        this.visibleSaveButton = false;
        this.visibleSubmitButton = false;
      } else {
        this.visibleNextButton = true;
        this.visibleSaveButton = false;
        this.visibleSubmitButton = false;
      }
    }
  }

  ngOnInit() {
    this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
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

  submitPage() {
    this.demandIntakeService.submitDemandWithAttachment()
      .pipe(first())
      .subscribe(
        response => {
          // setTimeout(() => {this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Submitted Successfully!' });},1000)
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Submitted Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Demand Failed to Submit!' });
        });

  }

  prevPage() {
    if (this.authService.isRequester()) {
      this.router.navigate(['demand-intake/requirement']);
    } else {
      this.router.navigate(['demand-intake/checklist']);
    }
  }

  nextPage() {
    // this.demandIntakeService.getDemandInformation().attachmentInfo = this.attachmentInfo;
    console.log("files: ", this.demandIntakeService.getDemandInformation().attachmentInfo)
    if (!this.eventService.isNewDemand) {
      this.router.navigate(['demand-intake/demandmanager']);
    }
  }


  onUpload(event: any, index: any) {
    for (let file of event.files) {
      // this.attachmentInfo[index].file = file;
      this.demandIntakeService.attachments[index] = file;
    }
    console.log("attachments1: ", this.demandIntakeService.attachments);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Files Uploaded Successfully!' });
  }

  downloadAttachment(index: any) {
    console.log("downloadAttachment ", this.attachmentInfo[index])
    let myArray = [];
    myArray = this.attachmentInfo[index].fileName.split(".");
    console.log("filename ext ", myArray[myArray.length - 1])
    let type = this.extToMimes(myArray[myArray.length - 1])
    var binary_string = window.atob(this.attachmentInfo[index].file);
    console.log("db file", this.attachmentInfo[index].file)
    console.log("binary_string file", binary_string)
    console.log("type ", type);
    const file = new Blob([binary_string], { type: type });
    FileSaver.saveAs(file, this.attachmentInfo[index].fileName);
  }

  extToMimes(ext: string) {
    let type = undefined;
    switch (ext) {
      case 'jpg':
        type = 'image/jpg'
        break;
      case 'png':
        type = 'image/png'
        break;
      case 'jpeg':
        type = 'image/jpeg'
        break;
      case 'txt':
        type = 'text/plain'
        break;
      case 'xls':
        type = 'application/vnd.ms-excel'
        break;
      case 'doc':
        type = 'application/msword'
        break;
      case 'xlsx':
        type = 'application/vnd.ms-excel'
        break;
      case 'pdf':
        type = 'application/pdf'
        break;
      case 'pptx':
        type = 'application/pptx'
        break;
      default:

    }
    return type;
  }


}
