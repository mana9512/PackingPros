import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrequestComponent } from './listrequest.component';

describe('ListrequestComponent', () => {
  let component: ListrequestComponent;
  let fixture: ComponentFixture<ListrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
