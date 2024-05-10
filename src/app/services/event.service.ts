import { EventEmitter, Injectable } from '@angular/core';
import { SolutionDirection } from '../models/solution-direction';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  progressBarEvent = new EventEmitter();
  isNewDemand : boolean = true;
  isMyDemand : boolean = true;
  solutionDirectionValue : SolutionDirection = new SolutionDirection;
  selectedDemandTabIndex: any = 0;
  today : Date =  new Date();
  goLiveMinDate : Date = new Date(this.today.setDate(this.today.getDate() + 1));

  constructor(private messageService: MessageService) {}

  checkEmailValue(email: string) : boolean{
    if(email == ''){
      return true;
    }
    var regex = new RegExp("[A-Za-z0-9._%-]+@philips.com");
    var res = regex.test(email);
    if(!res){
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please provide email under Philips domain!' });
    }

    return res;
  }


}
