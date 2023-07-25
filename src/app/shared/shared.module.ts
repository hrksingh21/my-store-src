import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    ConvertToSpacePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    ConvertToSpacePipe,
    HighlightDirective,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
