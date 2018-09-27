import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

export class Chat {
  constructor(public message: string, public user: string) { }
}

export class AnalyzedChat {
  constructor(public chat: Chat) { }
}

export class Conversation {
  constructor(public name: string, public type: string, public responses: Array<AnalyzedChat>) { }
}

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  conversation = new Array<AnalyzedChat>();

  constructor(private http: Http) { }

  update(msg: AnalyzedChat) {
    this.conversation.push(msg);
  }

  addMessage(msg: string, userName: string) {
    const chat = new Chat(msg, userName);
    const analyzedChat = new AnalyzedChat(chat);
    this.update(analyzedChat);
  }

  send(conversationJson: string) {
    var json = JSON.parse(conversationJson);
    return this.http.put(API_URL + 'api/conversationimport', json).subscribe((res) => {
      var response = res.json().response;
      console.log(res);
    });
  }

  save(conversationJson: string) {
    let data = "text/json;charset=utf-8," + encodeURIComponent(conversationJson);
    let downloader = document.createElement('a');
    downloader.href = 'data:' + data;
    downloader.download = 'data.json';
    downloader.click();
  }
}
