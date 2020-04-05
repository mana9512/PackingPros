import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbidviewComponent } from './userbidview.component';

describe('UserbidviewComponent', () => {
  let component: UserbidviewComponent;
  let fixture: ComponentFixture<UserbidviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbidviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbidviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
