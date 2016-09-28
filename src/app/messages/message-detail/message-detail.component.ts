import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../shared/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  /* The message object is provided as input to this class */
  @Input()
  message: Message;

  constructor() { }

  /* Angular lifecycle hooks */
  ngOnInit() {
  }

}
