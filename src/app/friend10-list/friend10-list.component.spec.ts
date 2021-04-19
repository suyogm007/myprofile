import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Friend10ListComponent } from './friend10-list.component';

describe('Friend10ListComponent', () => {
  let component: Friend10ListComponent;
  let fixture: ComponentFixture<Friend10ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Friend10ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Friend10ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
