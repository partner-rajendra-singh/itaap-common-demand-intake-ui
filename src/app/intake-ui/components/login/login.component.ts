import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DemandIntakeService } from '../../services/demand-intake.service';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { EventService } from '../../services/event.service';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { PopupRequest, AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'itaap-demand-intake-ui';
  email !: string;
  token !: string;
  otpSent: boolean = false;

  constructor(public eventService: EventService, private router: Router, private messageService: MessageService, private authService: AuthService,
    private msalAuthService: MsalService, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration
  ) { }

  ngOnInit(): void {
    this.msalAuthService.handleRedirectObservable().subscribe();
  }

  getOTP() {
    this.authService.getOTP(this.email)
      .pipe(first())
      .subscribe(
        data => {
          if (data.otpSent) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP Sent Successfully!' });
          } else {
            this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Use already having OTP!' });
          }

          this.otpSent = true;
        },
        error => {
          // this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide valid Email Id!' });
        });

  }

  login(email: any, token: any) {

    this.authService.login(this.email, this.token)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful!' });
          // if (this.authService.isDM() || this.authService.isCCB()) {
          this.router.navigate(['dashboard']);
          // } else {
          // this.router.navigate(['demand-intake']);
          // }
        },
        error => {
          this.messageService.add({ key: 'retry', severity: 'error', sticky: true, summary: error.statusText, detail: error.message });
        });
  }

  ssoLogin() {
    this.msalAuthService
      .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
      .subscribe((response: AuthenticationResult) => {
        console.log(response);
        this.login(response.account.username, response.accessToken),
          this.router.navigate(['dashboard']);
      }, error => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'error', detail: 'Login Failed!' });
      });
  }

  onRetry() {
    this.login(this.email, this.token);
    this.messageService.clear('retry');
  }

}
