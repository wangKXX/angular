import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackborderComponent } from './blackborder.component';

describe('BlackborderComponent', () => {
  let component: BlackborderComponent;
  let fixture: ComponentFixture<BlackborderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackborderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
