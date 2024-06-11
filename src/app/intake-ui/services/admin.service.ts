import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {MessageService} from 'primeng/api';
import {EventService} from './event.service';
import {Approver} from '../models/approver';
import {throwError} from 'rxjs';
import {FieldMgmt} from '../models/field-label-tooltip';
import {Constants} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl: string = environment.baseUrl;
  approver: Approver = new Approver();

  constructor(private http: HttpClient,
              private constants: Constants,
              private router: Router,
              private authService: AuthService,
              private messageService: MessageService,
              private eventService: EventService) {
  }

  getAllDM() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/dm';
    return this.http.get<any>(url, this.constants.headerOptions);
  }

  getAllCCB() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/ccb';
    return this.http.get<any>(url, this.constants.headerOptions);
  }

  updateField(field: FieldMgmt) {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field';
    return this.http.post<any>(url, field, this.constants.headerOptions)
      .pipe(map(response => {
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
  }

  getAllFields() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field';
    return this.http.get<any>(url, this.constants.headerOptions);
  }

  validateApproverRequest(): boolean {
    if (this.approver.email == '' || this.approver.status == '' || !this.eventService.checkEmailValue(this.approver.email)) {
      return false;
    }
    return true;
  }

  addApprover(role: string) {
    this.approver.role = role;
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/approver';
    return this.http.post<any>(url, this.approver, this.constants.headerOptions)
      .pipe(map(response => {
        console.log("addApprover() : Response -> ", response)
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
  }

  updateApprover(role: string) {
    this.approver.role = role;
    // console.log("upadate approver", this.approver)
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/approver';
    return this.http.patch<any>(url, this.approver, this.constants.headerOptions)
      .pipe(map(response => {
        console.log("updateApprover() : Response -> ", response)
        this.eventService.progressBarEvent.emit(false);
        return response;
      }));
  }

  setApprover(user: Approver) {
    this.approver.approverId = user.approverId;
    this.approver.email = user.email;
    this.approver.status = user.status;
    this.approver.role = user.role;
    this.approver.domain = user.domain;
    this.approver.createdDate = user.createdDate;
    this.approver.updatedDate = user.updatedDate;
  }
}
