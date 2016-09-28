export class Message {
    uid: string;
    sender: string;
    subject: string;
    message: string;
    time_sent: number;
    read: boolean = false;
}
