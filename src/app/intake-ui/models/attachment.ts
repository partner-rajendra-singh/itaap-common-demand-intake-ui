export class Attachment {
    attachmentId!: number;
    content!: File;
    fileName!: string;
    description: string = '';
    uploadedDate: Date = new Date();
}