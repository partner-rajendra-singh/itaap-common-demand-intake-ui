import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {AuthService} from '../auth.service';
import {EventService} from '../../services/event.service';
import {FieldsService} from "../../services/fields.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'itaap-demand-intake-ui';
  email !: string;
  token !: string;

  isProgressing = false;

  constructor(public eventService: EventService,
              private messageService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.eventService.progressBarEvent.subscribe(response => {
      this.isProgressing = response;
    })
    if (this.authService.checkAccounts()) {
      this.eventService.progressBarEvent.emit(true);
      this.authService.loginSilently();
    } else {
      console.log('checkAccount : Token not received. Please proceed with login.')
    }
  }

  ssoLogin() {
    this.messageService.clear('retry');
    this.eventService.progressBarEvent.emit(true);
    this.authService.getHandleRedirect()
      .subscribe({
        next: (result) => {
          console.log('Redirect Result:', result);
          this.authService.loginPopUp();
        },
        error: (error) => console.error('Redirect Error:', error)
      })
  }

  onRetry() {
    this.messageService.clear('retry');
    this.eventService.progressBarEvent.emit(true);
    this.authService.populateResponse(this.authService.currentLoggedInUser);
  }
}
