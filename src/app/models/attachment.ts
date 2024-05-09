export class Attachment {
    file!: File;
    fileName!: string;
    description: string = '';
    uploadedDate: Date = new Date();
}