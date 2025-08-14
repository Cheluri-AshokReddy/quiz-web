import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionTest } from './add-question-test';

describe('AddQuestionTest', () => {
  let component: AddQuestionTest;
  let fixture: ComponentFixture<AddQuestionTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQuestionTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuestionTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
