import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../types/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() public post: Post|undefined;
  constructor() { }

  ngOnInit() {
  }

}
