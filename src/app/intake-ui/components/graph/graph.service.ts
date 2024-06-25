import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {Constants} from "../../constants";
import {AuthService} from "../../auth/auth.service";
import {MessageService} from "primeng/api";
import {EventService} from "../../services/event.service";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  baseUrl: string = environment.baseUrl;
  assignee: any;

  constructor(private http: HttpClient,
              private constants: Constants,
              private router: Router,
              private authService: AuthService,
              private messageService: MessageService,
              private eventService: EventService) {
  }

  searchUser(query: any) {
    const headers = {
      'ConsistencyLevel': 'eventual',
      'Authorization': `Bearer ${this.authService.currentLoggedInUser.accessToken}`
    };
    return this
      .http
      .get<any>(`https://graph.microsoft.com/v1.0/users?$search="displayName:${query}"`, {headers});
  }

}
