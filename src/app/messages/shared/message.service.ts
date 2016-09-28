import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class MessageService {
  /* TODO Change this to an actual web service url */
  private messagesUrl = 'app/mock/messages.json';

  constructor(private http: Http) {}

  /**
   * Load all messages
   * @Return A promise
   */
  getMessages(): Promise<Message[]> {
    return this.http.get(this.messagesUrl)
               .toPromise()
               .then(response => response.json().messages as Message[])
               .catch(this.handleError);
  }
  /**
   * Handle errors
   * TODO Implement proper error handling
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
