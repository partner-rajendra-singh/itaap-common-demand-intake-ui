export class Attachment {
    attachmentId!: number;
    content!: File;
    fileName!: string;
    uploadedBy!: string;
    description: string = '';
    size!: number;
    uploadedDate: Date = new Date();
}