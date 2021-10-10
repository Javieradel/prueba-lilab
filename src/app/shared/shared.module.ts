import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { ModalComponent } from './modal/modal.component';
import { SlideOverComponent } from './slide-over/slide-over.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    PostComponent,
    ModalComponent,
    SlideOverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PostComponent,
    SlideOverComponent

  ]
})
export class SharedModule { }
