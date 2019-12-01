import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DevCommunityService } from './dev-community.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private postService: DevCommunityService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
