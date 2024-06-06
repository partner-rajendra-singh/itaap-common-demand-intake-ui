export class ReportResult {
    demandIntakeId!: number;
    title: string = '';
    description: string = '';
    status!: string;
    requestedBy: string = '';
    requestedDate: Date = new Date;
    isCrossFunctional: boolean = false;
    dmDecisionDate: Date = new Date;
    ccbDecisionDate: Date = new Date;

}