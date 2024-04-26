export class Approver {
    approverId!: number;
    email: string = '';
    status: string = '';
    role: string = '';
    createdDate: Date = new Date();
    updatedDate: Date = new Date();
}