import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit(){
    if (this.authService.isAuthenticatedUser()) {
      this.user = this.authService.currentUserValue.email;
      this.userRole = this.authService.getCurrentUserRole();
    }

    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    })
    
  }

}
