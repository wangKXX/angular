import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidlistComponent } from './slidlist.component';

describe('SlidlistComponent', () => {
  let component: SlidlistComponent;
  let fixture: ComponentFixture<SlidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
