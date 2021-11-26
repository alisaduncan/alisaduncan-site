import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PostCardComponent, ContactComponent],
  exports: [PostCardComponent, ContactComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
