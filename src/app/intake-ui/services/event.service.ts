import {EventEmitter, Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {SolutionDirection1} from '../models/solution-direction1';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  progressBarEvent = new EventEmitter();
  isNewDemand: boolean = true;
  isMyDemand: boolean = true;
  isStakeholderDemand: boolean = false;
  solutionDirectionValue: SolutionDirection1[] = new Array();
  selectedDemandTabIndex: any = 0;
  selectedEADITabIndex: any = 0;
  selectedRequirementsTabIndex: any = 0;
  today: Date = new Date();
  goLiveMinDate: Date = new Date(this.today.setDate(this.today.getDate() + 1));
  currentDemandIntakeId!: any;

  constructor(private messageService: MessageService) {
  }

  checkEmailList(email: string): boolean{
    let list: string[] = email.split('\\s');
    let result : boolean = true;
    list.forEach(item => { 
      if(!this.checkEmailValue(item)){
        result = false;
      }
    });
    
    return result;
  }

  checkEmailValue(email: string) : boolean{
    if(email == ''){
      return true;
    }

    var regex = new RegExp("[A-Za-z0-9._%-]+@philips.com");
    var res = regex.test(email);
    if (!res) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please provide email under Philips domain!'
      });
    }
    return res;
  }
}
