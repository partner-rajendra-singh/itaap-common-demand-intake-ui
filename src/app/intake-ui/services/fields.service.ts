import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fields} from "../models/fields";
import {EventService} from "./event.service";
import {environment} from "../../../environments/environment";
import {catchError, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  baseUrl: string = environment.baseUrl;
  allFields!: Map<string, Fields>;

  constructor(public http: HttpClient,
              private eventService: EventService) {
  }

  getAllFields() {
    this.eventService.progressBarEvent.emit(true);
    let url = this.baseUrl + '/common/demand-intake/fields';
    let headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Correlation-ID': 'abc',
      })
    };
    this.http.get<Map<string, Fields>>(url, headerOptions)
      .pipe(
        map((response: Map<string, Fields>) => {
          this.eventService.progressBarEvent.emit(false);
          this.allFields = new Map(Object.entries(response));
          console.log('FieldsService getAllFields() -> : ', this.allFields);
        }),
        catchError((error: any) => {
          console.log('FieldsService getAllFields() : Error -> ', error);
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
