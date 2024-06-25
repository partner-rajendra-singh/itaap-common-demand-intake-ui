export class Introduction {
  demandIntakeId: number = 0;
  title: string = '';
  description: string = '';
  requestedBy: string = '';
  status!: string;
  isDocReferred: boolean = false;
  architectAligned: boolean = false;
  updatedBy: string = '';
  requestedDate: Date = new Date();
}
