import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*import { CommonModule } from '@angular/common';*/

import { MessagesComponent } from './messages.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageDatePipe } from './shared/message-date.pipe';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageListComponent,
    MessageDetailComponent,
    MessageDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MessagesComponent]
})
export class MessagesModule { }
