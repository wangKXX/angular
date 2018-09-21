import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidcardComponent } from './slidcard.component';

describe('SlidcardComponent', () => {
  let component: SlidcardComponent;
  let fixture: ComponentFixture<SlidcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
