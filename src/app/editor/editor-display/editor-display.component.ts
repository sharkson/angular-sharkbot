import { Component, OnInit } from '@angular/core';
import { EditorService, Chat, Conversation, AnalyzedChat } from '../editor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'editor-display',
  templateUrl: './editor-display.component.html',
  styleUrls: ['./editor-display.component.css']
})
export class EditorDisplayComponent implements OnInit {

  messages: Array<AnalyzedChat>;
  conversationName: string;
  formValue: string;
  userName: string;
  formValue2: string;
  userName2: string;

  constructor(public editor: EditorService) {
    this.conversationName = 'TestConversation';
    this.userName = 'TestUser1';
    this.userName2 = 'TestUser2';
  }

  ngOnInit() {
    this.messages = this.editor.conversation;
  }

  sendMessage() {
    this.editor.addMessage(this.formValue, this.userName);
    this.formValue = '';
  }

  sendMessage2() {
    this.editor.addMessage(this.formValue2, this.userName2);
    this.formValue2 = '';
  }

  saveConversation() {
    let conversation = new Conversation(this.conversationName, 'test', this.messages);
    let conversationJson = JSON.stringify(conversation);
    this.editor.save(conversationJson);
  }

  sendConversation() {
    let conversation = new Conversation(this.conversationName, 'test', this.messages);
    let conversationJson = JSON.stringify(conversation);
    this.editor.send(conversationJson);
  }
}
