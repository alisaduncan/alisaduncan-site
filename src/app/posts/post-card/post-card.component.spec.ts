import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Post } from '../post';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    component.post = {} as Post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
