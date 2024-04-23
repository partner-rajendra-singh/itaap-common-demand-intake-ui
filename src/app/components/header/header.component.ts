import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user: string = '';
  constructor(private authService: AuthService) {
    if (authService.currentUserValue) {
      this.user = authService.currentUserValue.email;
    }

  }


}
