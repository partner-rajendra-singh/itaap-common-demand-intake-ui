import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  providers:[MessageService]
})
export class AttachmentComponent {

  attachmentInfo: any;

  submitted: boolean = false;
  visibleNextButton!: boolean;
  visibleSaveButton!: boolean;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,
    private messageService: MessageService, private authService: AuthService
  ) {
    if(authService.isRequester()){
      this.visibleNextButton = false;
      if(this.demandIntakeService.getDemandInformation().introduction.status!='DRAFT' && this.demandIntakeService.getDemandInformation().introduction.status !=null){
        this.visibleSaveButton = false;
      }else{
        this.visibleSaveButton = true;
      }
      
    } else{
      this.visibleNextButton = true;
      this.visibleSaveButton = false;
    }
  }

  ngOnInit() {
    this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
  }

  savePage() {
    this.demandIntakeService.saveDemand()
    .pipe(first())
    .subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Demand Failed to Save!' });
        });
  }

  submitPage(){
    this.demandIntakeService.submitDemand()
    .pipe(first())
    .subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Submitted Successfully!' });
          this.router.navigate(['view']);
        },
        error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Demand Failed to Submit!' });
        });

  }

  prevPage() {
    if(this.authService.isRequester()){
      this.router.navigate(['demand-intake/requirement']);
    }else{
      this.router.navigate(['demand-intake/checklist']);
    }
  }

  nextPage() {
    // this.demandIntakeService.getDemandInformation().attachmentInfo = this.attachmentInfo;
    console.log("files: ", this.demandIntakeService.getDemandInformation().attachmentInfo)
    this.router.navigate(['demand-intake/demandmanager']);
  }

  
  onUpload(event: any, index: any) {
    for(let file of event.files) {
      this.attachmentInfo[index].file = file;
    }
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
   

}
