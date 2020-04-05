import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoverComponent } from './admin-mover.component';

describe('AdminMoverComponent', () => {
  let component: AdminMoverComponent;
  let fixture: ComponentFixture<AdminMoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
