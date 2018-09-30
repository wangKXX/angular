import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacecheckComponent } from './facecheck.component';

describe('FacecheckComponent', () => {
  let component: FacecheckComponent;
  let fixture: ComponentFixture<FacecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
