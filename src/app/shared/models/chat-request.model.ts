import { Chat } from './chat.model';

export class ChatRequest {
  constructor(public chat: Chat, public type: string, public conversationName: string, public exclusiveTypes: Array<string> = [], public requiredProperyMatches: Array<string> = [], public excludedTypes: Array<string> = []) { }
}
