import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorDisplayComponent } from './editor-display/editor-display.component';
import { EditorService } from './editor.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [EditorDisplayComponent],
  exports: [EditorDisplayComponent],
  providers: [EditorService]
})
export class EditorModule { }
