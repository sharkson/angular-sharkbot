import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ConversationDisplayComponent } from './conversation/conversation-display/conversation-display.component';
import { EditorDisplayComponent } from './editor/editor-display/editor-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatDialogComponent },
  { path: 'conversation', component: ConversationDisplayComponent },
  { path: 'editor', component: EditorDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
