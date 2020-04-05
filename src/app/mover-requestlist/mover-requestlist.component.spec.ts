import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverRequestlistComponent } from './mover-requestlist.component';

describe('MoverRequestlistComponent', () => {
  let component: MoverRequestlistComponent;
  let fixture: ComponentFixture<MoverRequestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverRequestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverRequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
