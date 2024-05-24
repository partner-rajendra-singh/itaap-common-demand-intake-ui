import { Component, OnInit } from '@angular/core';
import { ApproverDomain } from 'src/app/enums/approver-domain';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  user: string = '';
  userRole: string = '';
  isProgressing = false;
  dmDomain: string  = '';

  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit(){
    if (this.authService.isAuthenticatedUser()) {
      this.user = this.authService.currentUserValue.email;
      this.userRole = this.authService.getCurrentUserRole();
      if(this.authService.isDM()){
        this.dmDomain = this.getDomainValue(this.authService.currentUserValue.domain);
      }
    }

    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    })
    
  }

  getDomainValue(key: string): string {
    const status = Object.keys(ApproverDomain).indexOf(key as unknown as ApproverDomain);
    let s = Object.values(ApproverDomain)[status];
    return s;
  }

}
