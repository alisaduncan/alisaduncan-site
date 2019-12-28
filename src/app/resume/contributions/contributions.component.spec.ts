import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContributionsComponent } from './contributions.component';

describe('ContributionsComponent', () => {
  let component: ResumeContributionsComponent;
  let fixture: ComponentFixture<ResumeContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
