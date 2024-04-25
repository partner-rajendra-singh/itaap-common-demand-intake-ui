import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  user: string = '';
  isProgressing = false;
  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit(){
    // if (this.authService.currentUserValue && this.authService.currentUserValue.isAuthenticated) {
    //   this.user = this.authService.currentUserValue.email;
    // }

    this.eventService.progressBarEvent.subscribe(response => {
      // console.log("progressBarEvent", response);
      this.isProgressing = response;
    })
    
  }

}
