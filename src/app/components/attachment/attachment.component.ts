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
  visibleSubmitButton!: boolean;

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,
    private messageService: MessageService, private authService: AuthService
  ) {
    if(authService.isRequester()){
      this.visibleNextButton = false;
      this.visibleSubmitButton = true;
    }else{
      this.visibleNextButton = true;
      this.visibleSubmitButton = false;
    }
  }

  ngOnInit() {
    this.attachmentInfo = this.demandIntakeService.getDemandInformation().attachmentInfo;
  }

  submitPage() {
    this.demandIntakeService.submitDemand()
    .pipe(first())
    .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
            this.router.navigate(['demand-intake']);
        },
        error => {
          alert("Demand Failed")
            this.messageService.add({ severity: 'error', summary: 'error', detail: 'Demand Failed!' });
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