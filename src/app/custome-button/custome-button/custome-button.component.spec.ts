import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeButtonComponent } from './custome-button.component';

describe('CustomeButtonComponent', () => {
  let component: CustomeButtonComponent;
  let fixture: ComponentFixture<CustomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
