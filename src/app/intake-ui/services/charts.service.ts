import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EventService} from "./event.service";
import {environment} from "../../../environments/environment";
import {DataStatusItaap} from '../models/dataStatusItaap';
import {Constants} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient,
              private constants: Constants,
              private eventService: EventService) {
  }

  getYearlyChart(from: Date, to: Date): Observable<DataStatusItaap> {
    let url = this.baseUrl + '/common/demand-intake/chart/year';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      }),
      params: {
        'fromDate': from.toString(),
        'toDate': to.toString()
      }
    };
    return this.http.get<DataStatusItaap>(url, headerOptions);
  }

  getQuarterlyChart(): Observable<DataStatusItaap> {
    let url = this.baseUrl + '/common/demand-intake/chart/quarterly';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.constants.contentType,
        'X-Correlation-ID': this.constants.x_correlation_id
      })
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
}
