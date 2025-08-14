import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestResult } from './view-test-result';

describe('ViewTestResult', () => {
  let component: ViewTestResult;
  let fixture: ComponentFixture<ViewTestResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTestResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTestResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
