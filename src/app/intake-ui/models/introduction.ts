export class Introduction {
    demandIntakeId!: number;
    title: string = '';
	description: string = '';
    requestedBy: string = '';
    status!: string;
    statusLabel: string = '';

    isDocReferred: boolean = false;
    architectAligned: boolean = false;
}