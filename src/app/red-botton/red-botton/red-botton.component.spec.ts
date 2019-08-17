import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBottonComponent } from './red-botton.component';

describe('RedBottonComponent', () => {
  let component: RedBottonComponent;
  let fixture: ComponentFixture<RedBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
