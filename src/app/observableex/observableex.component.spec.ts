import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableexComponent } from './observableex.component';

describe('ObservableexComponent', () => {
  let component: ObservableexComponent;
  let fixture: ComponentFixture<ObservableexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
