import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  userName: string;

  constructor(public chat: ChatService) {
    this.userName = 'TestUser';
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val));
  }

  sendMessage() {
    this.chat.converse(this.formValue, this.userName);
    this.formValue = '';
  }

}
