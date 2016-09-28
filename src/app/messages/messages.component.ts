import { Component, OnInit } from '@angular/core';

import { Message } from './shared/message';
import { MessageService } from './shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {
  /* local variables */
  title: string = 'Messages';
  messages: Message[];
  selectedMessage: Message;

  constructor(private messageService: MessageService) {
  }

  /* Angular lifecycle hooks */
  ngOnInit(): void {
    this._getMessages();
  }

  /* local functions */
  _getMessages(): void {
    this.messageService.getMessages().then(messages => {
      this.messages = messages;
    });
  }

  /**
   * Executed when the onSelMessageChanged is fired from message-list.component.ts
   * The local selectedMessage is set for binding in the detail section of the master-detail view
   * @param message: The selected message object
   */
  onSelMessageChanged(message: Message) {
    this.selectedMessage = message;
  }

}
