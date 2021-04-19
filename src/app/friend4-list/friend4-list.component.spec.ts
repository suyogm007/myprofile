import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Friend4ListComponent } from './friend4-list.component';

describe('Friend4ListComponent', () => {
  let component: Friend4ListComponent;
  let fixture: ComponentFixture<Friend4ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Friend4ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Friend4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
