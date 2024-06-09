import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {AuthService} from '../auth.service';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'itaap-demand-intake-ui';
  email !: string;
  token !: string;
  otpSent: boolean = false;

  constructor(public eventService: EventService,
              private messageService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.msalAuthService
    //   .handleRedirectObservable()
    //   .subscribe({
    //     next: (result) => {
    //       console.log('Redirect Result:', result);
    //       this.checkAccount();
    //     },
    //     error: (error) => console.error('Redirect Error:', error)
    //   });
  }

  ssoLogin() {
    this.authService.getLoggedInAccounts()
      .subscribe({
        next: (result) => {
          console.log('Redirect Result:', result);
          this.authService.checkAccount();
        },
        error: (error) => console.error('Redirect Error:', error)
      })
  }

  onRetry() {
    this.messageService.clear('retry');
  }
}
