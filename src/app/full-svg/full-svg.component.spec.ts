import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullSvgComponent } from './full-svg.component';

describe('FullSvgComponent', () => {
  let component: FullSvgComponent;
  let fixture: ComponentFixture<FullSvgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
