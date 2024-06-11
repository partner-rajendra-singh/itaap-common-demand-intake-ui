import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Fields} from "../models/fields";
import {EventService} from "./event.service";
import {environment} from "../../../environments/environment";
import {catchError, map, throwError} from "rxjs";
import {DataStatusItaap} from '../models/dataStatusItaap';
import {Constants} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  baseUrl: string = environment.baseUrl;
  allFields!: Map<string, Fields>;

  constructor(public http: HttpClient,
              private constants: Constants,
              private eventService: EventService) {
  }

  getStatusChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'STATUSWISE',
        'chartSolutionType': 'ADL_L1'
      }

    };

    return this.http.get<DataStatusItaap>(url, headerOptions);
  }


  getStageChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'STAGEWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get<DataStatusItaap>(url, headerOptions);
  }

  getQuaterChart() {
    let url = this.baseUrl + '/common/dashboard/chart';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'chartDataType': 'QUATERWISE',
        'chartSolutionType': 'ADL_L1'
      }
    };
    return this.http.get<DataStatusItaap>(url, headerOptions);
  }

  getAllFields() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/field/all';
    this.http
      .get<Map<string, Fields>>(url, this.constants.headerOptions)
      .pipe(
        map((response: Map<string, Fields>) => {
          this.eventService.progressBarEvent.emit(false);
          this.allFields = new Map(Object.entries(response));
          console.log('getAllFields() : Response -> ', this.allFields);
        }),
        catchError((error: any) => {
          console.log('getAllFields() : Error -> ', error);
          this.eventService.progressBarEvent.emit(false);
          return throwError(error);
        })
      )
      .subscribe();
  }

  getLabel(key: string): string {
    return <string>this.allFields.get(key)?.label;
  }

  getToolTip(key: string): string {
    return <string>this.allFields.get(key)?.tooltip;
  }

  getFormattedMessage(input: string, replacement: string): string {
    return input.replace(/\[key]/g, replacement);
  }
}
