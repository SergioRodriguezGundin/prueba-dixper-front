import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRepositoryComponent } from './resume-repository.component';

describe('ResumeRepositoryComponent', () => {
  let component: ResumeRepositoryComponent;
  let fixture: ComponentFixture<ResumeRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
