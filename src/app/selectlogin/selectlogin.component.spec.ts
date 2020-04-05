import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectloginComponent } from './selectlogin.component';

describe('SelectloginComponent', () => {
  let component: SelectloginComponent;
  let fixture: ComponentFixture<SelectloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
