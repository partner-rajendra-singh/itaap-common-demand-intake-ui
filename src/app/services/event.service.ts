import { EventEmitter, Injectable } from '@angular/core';
import { SolutionDirection } from '../models/solution-direction';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  progressBarEvent = new EventEmitter();
  isNewDemand : any;
  solutionDirectionValue : SolutionDirection = new SolutionDirection;

  constructor() { }
}
