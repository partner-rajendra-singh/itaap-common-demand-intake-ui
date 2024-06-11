import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemandIntakeService} from '../../services/demand-intake.service';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import {AuthService} from '../../auth/auth.service';
import {first} from 'rxjs/operators';
import {EventService} from '../../services/event.service';
import {Attachment} from '../../models/attachment';
import {HttpHeaders} from '@angular/common/http';
import {FileUploadEvent} from 'primeng/fileupload';
import {DemandStatus} from '../../enums/demand-status';
import {FieldsService} from "../../services/fields.service";
import {Constants} from "../../constants";

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  providers: [MessageService]
})
export class AttachmentComponent implements OnInit {
  attachmentInfo: Attachment[] = [];

  fileUploadUrl!: string;
  visibleNextButton!: boolean;
  visibleSaveButton!: boolean;
  visibleSubmitButton!: boolean;
  visibleAttachmentUpload!: boolean;
  index: any;
  httpHeaders: HttpHeaders = new HttpHeaders;
  submitDemandLabel!: string;

  constructor(private config: PrimeNGConfig,
              public fieldsService: FieldsService,
              public constants: Constants,
              public demandIntakeService: DemandIntakeService, private router: Router,
              private messageService: MessageService, public authService: AuthService, public eventService: EventService, private confirmationService: ConfirmationService) {
    this.visibleAttachmentUpload = true;

    if (authService.isRequester()) {
      if (!this.eventService.isNewDemand && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand)
        && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT
        && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM) {
        this.visibleNextButton = true;
        this.visibleAttachmentUpload = false;
      } else {
        this.visibleNextButton = false;
        if (this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != null) {
          this.visibleAttachmentUpload = false;
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
        if (this.eventService.isNewDemand && (this.eventService.isMyDemand || this.eventService.isStakeholderDemand)) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = true;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT && this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.PENDING_WITH_DM) {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else if ((this.eventService.isMyDemand || this.eventService.isStakeholderDemand) && this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT) {
          this.visibleNextButton = false;
          this.visibleSubmitButton = false;
        } else if (!this.eventService.isMyDemand && !this.eventService.isStakeholderDemand && this.demandIntakeService.getDemandInformation().introduction.status != DemandStatus.DRAFT) {
          this.visibleNextButton = true;
          this.visibleSubmitButton = false;
        } else {
          this.visibleNextButton = false;
          this.visibleSubmitButton = false;
        }
      }
    }

    if (authService.isDM()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.PENDING_WITH_CCB
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.ACCEPTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.DM_REJECTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_REJECTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_HOLD) {
        this.visibleAttachmentUpload = false;
      }
    } else if (authService.isCCB()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.ACCEPTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_REJECTED) {
        this.visibleAttachmentUpload = false;
      }
    }

    if (this.eventService.isStakeholderDemand && !this.eventService.isNewDemand && !this.eventService.isMyDemand) {
      this.visibleSubmitButton = false;
    }
  }

  ngOnInit() {
    this.submitDemandLabel = 'Raise Demand';
    if (this.demandIntakeService.getDemandInformation().introduction.status === DemandStatus.DM_MODIFICATION || this.demandIntakeService.getDemandInformation().introduction.status === DemandStatus.CCB_MODIFICATION) {
      this.submitDemandLabel = 'Update Demand';
    }
    this.getAllAttachmentsByDemandId();
    this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
    this.fileUploadUrl = this.demandIntakeService.getAttachmentUploadURL();
  }

  isDeleteDisabled(attachment: Attachment): boolean {
    if (attachment.uploadedBy != this.authService.currentUserValue.email) {
      return true;
    }
    if (this.demandIntakeService.isNew) {
      return false;
    }
    if (this.authService.isRequester()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status && this.demandIntakeService.getDemandInformation().introduction.status != 'DRAFT') {
        return true;
      }
    } else if (this.authService.isDM()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.PENDING_WITH_CCB
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.ACCEPTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.DM_REJECTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_REJECTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_HOLD) {
        return true;
      }
    } else if (this.authService.isCCB()) {
      if (this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.ACCEPTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.CCB_REJECTED
        || this.demandIntakeService.getDemandInformation().introduction.status == DemandStatus.DM_REJECTED) {
        return true;
      }
    }
    return false;
  }

  savePage() {
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
    this.demandIntakeService.saveDemand()
      .pipe(first())
      .subscribe(
        response => {
          console.log("saveDemand() : Response -> ", response)
          this.messageService.add({
            key: 'success',
            severity: 'success',
            summary: 'Success',
            detail: 'Demand Saved Successfully!'
          });
          this.router.navigate(['view']);
        },
        error => {
          console.log("saveDemand() : ERROR -> ", error)
          this.messageService.add({
            key: 'error',
            severity: 'error',
            summary: 'Error',
            detail: 'Demand Failed to Save!'
          });
        });
  }

  submitPage() {
    if (this.files.length > 0) {
      this.uploadEvent(this.uploadCallback);
    }
    this.router.navigate(['demand-intake/confirm']);
  }

  prevPage() {
    if (this.authService.isRequester()) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/requirement']);
      } else {
        if (this.eventService.isMyDemand && (this.demandIntakeService.demandInformation.introduction.status != DemandStatus.DRAFT && this.demandIntakeService.demandInformation.introduction.status != DemandStatus.PENDING_WITH_DM)) {
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
    if (!this.eventService.isNewDemand) {
      if (this.eventService.isNewDemand) {
        this.router.navigate(['demand-intake/demandmanager']);
      } else {
        this.router.navigate(['demand-intake/demandmanager/' + this.demandIntakeService.demandInformation.introduction.demandIntakeId]);
      }
    }
  }

  getAllAttachmentsByDemandId() {
    this.demandIntakeService
      .getAllAttachmentsByDemandId(this.demandIntakeService.demandInformation.introduction.demandIntakeId)
      .subscribe(
        response => {
          this.attachmentInfo = response;
          this.eventService.progressBarEvent.emit(false);
        }
      )
  }

  deleteAttachment(index: any, fileName: string) {
    this.demandIntakeService
      .deleteAttachmentsById(index)
      .subscribe(
        response => {
          console.log("deleteAttachment() : SUCCESS -> ", response);
          this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: response.attachmentResponse,
            life: 3000
          });
          this.getAllAttachmentsByDemandId();
        },
        error => {
          console.log("deleteAttachment() : ERROR -> ", error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'File : ' + fileName + ' : ' + error.statusText,
            life: 3000
          });
        }
      )
  }

  updateAttachment(attachment: Attachment) {
    this.demandIntakeService
      .updateDescAttachmentsById(attachment.attachmentId, attachment.description)
      .subscribe(
        response => {
          console.log("updateAttachment() : SUCCESS -> ", response);
          this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: response.attachmentResponse,
            life: 3000
          });
          this.getAllAttachmentsByDemandId();
        },
        error => {
          console.log("updateAttachment() : ERROR -> ", error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'File : ' + attachment.fileName + ' : ' + error.statusText,
            life: 3000
          });
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
            const blob = new Blob([response.body as BlobPart], {type: contentType as string});
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            link.click();

            window.URL.revokeObjectURL(link.href);
            link.remove();
            this.eventService.progressBarEvent.emit(false);
          } else {
            console.log("downloadAttachment() : ERROR -> Unable to extract file")
          }
        }
      )
  }

  files: any = [];
  uploadedFiles: any = [];
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
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.files.forEach((file: any) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;
    this.customUploadHandler();
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

  customUploadHandler() {
    let formData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i], this.files[i].name);
    }
    this.demandIntakeService
      .http
      .post<any>(this.demandIntakeService.getAttachmentUploadURL(), formData, {
        headers: new HttpHeaders({
          'X-Correlation-ID': this.constants.x_correlation_id,
          'Authorization': this.authService.currentLoggedInUser.accessToken
        })
      })
      .subscribe((response) => {
        this.uploadedFiles.push(...this.files);
        this.files.splice(0, this.files.length);
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: response.attachmentResponse,
          life: 3000
        });
        this.getAllAttachmentsByDemandId();
      })
  }

  clonedAttachments: { [s: number]: Attachment } = {};

  onRowEditInit(attachment: Attachment) {
    this.clonedAttachments[attachment.attachmentId] = {...attachment};
  }

  onRowEditSave(attachment: Attachment) {
    delete this.clonedAttachments[attachment.attachmentId];
    this.updateAttachment(attachment);
  }

  onRowEditCancel(attachment: Attachment, index: number) {
    this.attachmentInfo[index] = this.clonedAttachments[attachment.attachmentId];
    delete this.clonedAttachments[attachment.attachmentId];
  }
}
