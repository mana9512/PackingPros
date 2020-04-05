import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsubmitComponent } from './bidsubmit.component';

describe('BidsubmitComponent', () => {
  let component: BidsubmitComponent;
  let fixture: ComponentFixture<BidsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
