import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActionIconComponent } from './action-icon.component';

describe('ActionIconComponent', () => {
  let component: ActionIconComponent;
  let fixture: ComponentFixture<ActionIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
