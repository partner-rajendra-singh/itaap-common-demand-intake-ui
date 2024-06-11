import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class Constants {
  headerOptions: { headers: HttpHeaders };

  constructor(private authService: AuthService) {
    this.x_correlation_id = this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId;
    this.headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.contentType,
        'X-Correlation-ID': this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId,
        'Authorization': 'Bearer ' + this.authService.currentLoggedInUser.accessToken
      })
    };
  }

  baseUrl: string = environment.baseUrl;
  contentType: string = 'application/json';
  x_correlation_id: string = this.authService.currentLoggedInUser.account.localAccountId + '.' + this.authService.currentLoggedInUser.correlationId;
}
