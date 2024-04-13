import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

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

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,
    private messageService: MessageService
  ) {}

  submitPage() {
    // this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
    // this.router.navigate(['demand-intake/']);
  }

  prevPage() {
      this.router.navigate(['demand-intake/checklist']);
  }

  nextPage() {
    this.router.navigate(['demand-intake/demandmanager']);
  }

  
  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }


}
