import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { PrimeNGConfig } from 'primeng/api';
import { User } from './intake-ui/models/user';
import { AuthService } from './intake-ui/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'itaap-demand-intake-ui';
  currentUser!: User;
  currentUserSubscription!: Subscription;


  constructor(
    private primengConfig: PrimeNGConfig,
    private authService: AuthService, 
    private router: Router) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    if (this.isAuthenticated()) {
      this.router.navigate(['/view']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticatedUser();
  }

}