import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'itaap-demand-intake-ui';
  currentUser!: User;
  currentUserSubscription!: Subscription;
  

  constructor(private authService: AuthService, private router: Router) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  
  ngOnInit() {
    if(this.currentUser){
      if(this.authService.isDM() ||this.authService.isCCB() ){
        this.router.navigate(['/view']);
      }else{
        this.router.navigate(['/demand-intake']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticatedUser();
  }

}