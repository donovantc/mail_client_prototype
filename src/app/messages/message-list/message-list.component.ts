import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Message } from '../shared/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() 
  messages: Message[]; /* An array of messages is provided as input to this class */

  @Output() 
  onSelMessageChanged = new EventEmitter<Message>(); /* This event is broadcast to the parent of this component */

  /* local variables */
  selectedMessage: Message;

  constructor() { }

  /* Angular lifecycle hooks */ 
  ngOnInit() { }

  /* Event handlers */
  onSelect(message: Message): void {
    // To deselect?
    if (message === this.selectedMessage){
      this.selectedMessage = null;
    }else{
      // update the selected message and mark as read
      this.selectedMessage = message;
      this.selectedMessage.read = true;
    }
    this._updateDetails();
  }

  onDelete(index: number): void {
    this.selectedMessage = null;
    this.messages.splice(index, 1);
    this._updateDetails();
  }

  /* local functions */
  _updateDetails(): void {
    this.onSelMessageChanged.emit(this.selectedMessage);
  }

}
