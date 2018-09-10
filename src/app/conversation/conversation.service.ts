import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Chat } from '../shared/models/chat.model';
import { ChatRequest } from '../shared/models/chat-request.model';

const API_URL = environment.apiUrl;

export class Message {
  constructor(public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: Http) { }

  send(conversationJson: string) {
    var json = JSON.parse(conversationJson);
    return this.http.put(API_URL + 'api/conversationimport', json).subscribe((res) => {
      var response = res.json().response;
      console.log(res);
    });
  }
}
