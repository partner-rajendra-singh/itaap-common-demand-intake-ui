import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { EventService } from '../../services/event.service';
import { Attachment } from '../../models/attachment';
import { HttpHeaders } from '@angular/common/http';
import { FileUploadEvent, FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  providers: [MessageService]
})
export class AttachmentComponent implements OnInit {
  attachmentInfo: Attachment[] = [];

  fileUploadUrl!: string;
  submitted: boolean = false;
  visibleNextButton!: boolean;
  visibleSaveButton!: boolean;
  visibleSubmitButton!: boolean;
  index: any;
  httpHeaders: HttpHeaders = new HttpHeaders;

  constructor(private config: PrimeNGConfig,
    public demandIntakeService: DemandIntakeService, private router: Router,
    private messageService: MessageService, private authService: AuthService, public eventService: EventService
  ) {

    if (authService.isRequester()) {

      if (!this.eventService.isNewDemand && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')) {
        this.visibleNextButton = true;
      } else {
        this.visibleNextButton = false;
        if (this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != null) {
          this.visibleSaveButton = false;
          this.visibleSubmitButton = false;
        } else {
          this.visibleSaveButton = true;
          this.visibleSubmitButton = true;
        }
      }

    } else {
      if (authService.isDM() || authService.isCCB()) {
        this.visibleSaveButton = false;
        if (this.eventService.isNewDemand || this.eventService.isMyDemand || this.eventService.isStakeholderDemand) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = true;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status != 'PENDING_WITH_DM') {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT') {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else {
          this.visibleNextButton = false;
          this.visibleSubmitButton = false;
        }
      }
    }

    if (this.eventService.isStakeholderDemand && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
      this.visibleSubmitButton = false;
    }
  }

  ngOnInit() {
    console.log("this.demandIntakeService.isNew -> " + this.demandIntakeService.isNew)
    console.log("attachment demand", this.demandIntakeService.getDemandInformation())
    this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
    this.fileUploadUrl = this.demandIntakeService.getAttachmentUploadURL();
    this.httpHeaders.set('X-Correlation-ID', 'abc');
    this.httpHeaders.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    console.log("this.fileUploadUrl -> " + this.fileUploadUrl);
  }

  addAttachment() {
    this.attachmentInfo.push(new Attachment);
  }

  removeAttachment() {
    this.attachmentInfo.pop();
  }

  savePage() {
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
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
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
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
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        if (this.eventService.isMyDemand && (this.demandIntakeService.demandInformation.introduction.status != 'DRAFT' && this.demandIntakeService.demandInformation.introduction.status != 'PENDING_WITH_DM')) {
          this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
        } else {
          this.router.navigate(['demand-intake/requirement/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
        }
      }
    } else {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/checklist']);
      } else {
        this.router.navigate(['demand-intake/checklist/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }

  nextPage() {
    // this.demandIntakeService.getDemandInformation().attachmentInfo = this.attachmentInfo;
    console.log("files: ", this.demandIntakeService.getDemandInformation().attachmentInfo)
    if (!this.eventService.isNewDemand) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/demandmanager']);
      } else {
        this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }

  onUpload(event: any, index: any) {
    for (let file of event.files) {
      // this.attachmentInfo[index].fileName = file;
      // this.attachmentInfo[index].uploadedDate = new Date();
      this.demandIntakeService.attachments[index] = file;
    }
    console.log("attachments1: ", this.demandIntakeService.attachments);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Files Uploaded Successfully!' });
  }

  setDescription(description: HTMLInputElement, file: any) {
    file.description = description.value;
    description.disabled = true;
  }

  getAllAttachmentsByDemandId() {
    this.demandIntakeService
      .getAllAttachmentsByDemandId(this.demandIntakeService.demandInformation.introduction.demandIntakeId)
      .subscribe(
        response => {
          this.attachmentInfo = response;
        }
      )
  }

  deleteAttachment(index: any, fileName: string) {

    this.demandIntakeService
      .deleteAttachmentsById(index)
      .subscribe(
        response => {
          console.log(response);
          this.messageService.add({ severity: 'info', summary: 'Success', detail: response.attachmentResponse, life: 3000 });
          this.getAllAttachmentsByDemandId();
        },
        error => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'File : ' + fileName + ' : ' + error.statusText, life: 3000 });
        }
      )
  }

  downloadAttachment(index: any, fileName: string) {
    this.demandIntakeService
      .getAttachmentsById(index)
      .subscribe(
        response => {
          const fileNameFromUrl = "file";
          if (fileNameFromUrl) {
            const contentType = response.headers.get("Content-Type");
            const blob = new Blob([response.body as BlobPart], { type: contentType as string });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            link.click();

            window.URL.revokeObjectURL(link.href);
            link.remove();
            this.eventService.progressBarEvent.emit(false);
          }
          else {
            console.log("Unable to extract file")
          }
        }
      )
  }

  files: any = [];

  totalSize: number = 0;

  totalSizePercent: number = 0;

  uploadCallback: any;

  choose(event: any, callback: any, uploadCallback: any) {
    this.uploadCallback = uploadCallback;
    callback();
  }

  onRemoveTemplatingFile(event: any, file: any, removeFileCallback: any, index: any) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear: any) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload(event: FileUploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.files.forEach((file: any) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;

    // this.demandIntakeService.uploadAttachments(this.files);
  }

  uploadEvent(callback: any) {
    callback();
  }

  formatSize(bytes: any) {
    if (bytes) {
      const k = 1024;
      const dm = 3;
      const sizes: any = this.config.translation.fileSizeTypes;
      if (bytes === 0) {
        return `0 ${sizes[0]}`;
      }

      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

      return `${formattedSize} ${sizes[i]}`;
    }
    return "";
  }

  customUploadHandler($event: FileUploadHandlerEvent) {
    let formData = new FormData();

    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i], this.files[i].name);
    }
    this.demandIntakeService.uploadAttachments(formData);
  }
}
