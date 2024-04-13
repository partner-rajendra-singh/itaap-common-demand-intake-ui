import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  providers: [MessageService]
})
export class RequirementsComponent implements OnInit{

  constructor(public demandIntakeService: DemandIntakeService, private router: Router,private messageService: MessageService) {}

    classes!: any[];

    vagons!: any[];

    seats!: any[];

    seatInformation: any;
    goLiveApproach!: string;

    ngOnInit() {
        this.seatInformation = this.demandIntakeService.ticketInformation.seatInformation;

        this.classes = [
            { name: 'First Class', code: 'A', factor: 1 },
            { name: 'Second Class', code: 'B', factor: 2 },
            { name: 'Third Class', code: 'C', factor: 3 }
        ];
    }

    setVagons(event: any) {
        if (this.seatInformation.class && event.value) {
            this.vagons = [];
            this.seats = [];
            for (let i = 1; i < 3 * event.value.factor; i++) {
                this.vagons.push({ wagon: i + event.value.code, type: event.value.name, factor: event.value.factor });
            }
        }
    }

    setSeats(event: any) {
        if (this.seatInformation.wagon && event.value) {
            this.seats = [];
            for (let i = 1; i < 10 * event.value.factor; i++) {
                this.seats.push({ seat: i, type: event.value.type });
            }
        }
    }

    nextPage() {
        this.demandIntakeService.ticketInformation.seatInformation = this.seatInformation;
        this.router.navigate(['demand-intake/solution-direction']);
    }

    submitPage() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demand Saved!' });
    }

    prevPage() {
        console.log(this.goLiveApproach)
        this.router.navigate(['demand-intake/requester']);
    }

    setGoLiveApproach(){
        console.log(this.goLiveApproach)
    }

}
