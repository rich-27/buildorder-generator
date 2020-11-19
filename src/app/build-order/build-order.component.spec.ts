import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuildOrderComponent } from './build-order.component';

describe('BuildOrderComponent', () => {
  let component: BuildOrderComponent;
  let fixture: ComponentFixture<BuildOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
