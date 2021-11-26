import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DevCommunityService } from '../../dev-community.service';
import { of } from 'rxjs';
import { Post } from '../../types/post';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: DevCommunityService, useValue: { getPosts: () => of([{} as Post])}}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
