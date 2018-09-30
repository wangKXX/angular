import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaselJSComponent } from './easel-js.component';

describe('EaselJSComponent', () => {
  let component: EaselJSComponent;
  let fixture: ComponentFixture<EaselJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaselJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaselJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
