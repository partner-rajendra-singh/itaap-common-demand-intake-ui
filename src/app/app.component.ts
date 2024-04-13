import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'itaap-demand-intake-ui';
  

  constructor(private authService: AuthService) {
  }
  
  isAuthenticated() {
    return this.authService.isAuthenticatedUser();
  }

}