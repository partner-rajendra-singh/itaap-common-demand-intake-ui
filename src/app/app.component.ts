import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {PrimeNGConfig} from 'primeng/api';
import {User} from './intake-ui/models/user';
import {AuthService} from './intake-ui/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
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
    this.router.navigate(['/login']);
  }

}
