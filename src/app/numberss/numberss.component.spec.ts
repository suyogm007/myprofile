import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberssComponent } from './numberss.component';

describe('NumberssComponent', () => {
  let component: NumberssComponent;
  let fixture: ComponentFixture<NumberssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
