import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChildrenComponent } from './navbar-children.component';

describe('NavbarChildrenComponent', () => {
  let component: NavbarChildrenComponent;
  let fixture: ComponentFixture<NavbarChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
