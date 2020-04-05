import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverLoginComponent } from './mover-login.component';

describe('MoverLoginComponent', () => {
  let component: MoverLoginComponent;
  let fixture: ComponentFixture<MoverLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
