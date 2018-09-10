import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationDisplayComponent } from '../conversation/conversation-display/conversation-display.component';
import { ConversationService } from '../conversation/conversation.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ConversationDisplayComponent],
  exports: [ConversationDisplayComponent],
  providers: [ConversationService]
})
export class ConversationModule { }
