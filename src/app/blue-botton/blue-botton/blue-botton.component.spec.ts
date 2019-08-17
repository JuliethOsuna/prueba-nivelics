import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBottonComponent } from './blue-botton.component';

describe('BlueBottonComponent', () => {
  let component: BlueBottonComponent;
  let fixture: ComponentFixture<BlueBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
