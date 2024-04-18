import { Spoc } from "./spoc";

export class RequesterInfo {
    program: string = '';
    domain: string = '';
    requestedDate: Date = new Date();
    spoc: Spoc[] = [{
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      },
      {
        email: '',
        role: ''
      }];
}