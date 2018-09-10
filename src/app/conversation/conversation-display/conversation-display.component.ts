import { Component, OnInit } from '@angular/core';
import { ConversationService, Message } from '../conversation.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'conversation-display',
  templateUrl: './conversation-display.component.html',
  styleUrls: ['./conversation-display.component.css']
})
export class ConversationDisplayComponent implements OnInit {

  formValue: string;

  constructor(public conversationService: ConversationService) {
  }

  ngOnInit() {

  }

  displayConversation() {
    this.conversationService.send(this.formValue);
  }

}
