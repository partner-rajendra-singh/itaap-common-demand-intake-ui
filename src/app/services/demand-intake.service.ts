import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandIntakeService {

  constructor() { }

  ticketInformation = {
    personalInformation: {
        firstname: '',
        lastname: '',
        age: null
    },
    seatInformation: {
        class: null,
        wagon: null,
        seat: null
    } 
  }

    private paymentComplete = new Subject<any>();
    
    paymentComplete$ = this.paymentComplete.asObservable();

    getTicketInformation() {
        return this.ticketInformation;
    }

    setTicketInformation(ticketInformation: any) {
        this.ticketInformation = ticketInformation;
    }

    complete() {
        this.paymentComplete.next(this.ticketInformation.personalInformation);
    }
}
