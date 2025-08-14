import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared-module';
import { Test } from '../../services/test';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../../../auth/services/user-storage';
import { interval } from 'rxjs';

@Component({
  selector: 'app-take-test',
  imports: [SharedModule],
  templateUrl: './take-test.html',
  styleUrl: './take-test.scss'
})
export class TakeTest {

  questions: any[] = [];
  testId: any;

  selectedAnswers: { [key: number]: string } = {};

  timeRemaining: number = 0;
  interval: any;


constructor(
  private testService: Test,
  private activatedRoute: ActivatedRoute,
  private message: NzMessageService,
  private router: Router
) {}


ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    this.testId = +(params.get('id') ?? 0);

    this.testService.getTestQuestions(this.testId).subscribe(res => {
      this.questions = res.questions;
      console.log(this.questions);

      this.timeRemaining = res.testDTO.time || 0;
      this.startTimer();
    });
  });
}

startTimer(): void {
  this.interval = setInterval(() => {
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
    } else {
      clearInterval(this.interval);
      this.submitAnswers();
    }
  }, 1000);
}


getFormattedTime(): string {
  const minutes = Math.floor(this.timeRemaining / 60);
  const seconds = this.timeRemaining % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // e.g., 5:02
}


onAnswerChange(questionId: number, selectedOption: string): void {
  this.selectedAnswers[questionId] = selectedOption;
  console.log(this.selectedAnswers);
}
submitAnswers(): void {
  const answerList = Object.keys(this.selectedAnswers).map((questionId) => ({
    questionId: +questionId,
    selectedOption: this.selectedAnswers[+questionId],
  }));

  const data = {
    testId: this.testId,
    userId: UserStorageService.getUserId(),
    responses: answerList,
  };

  this.testService.submitTest(data).subscribe({
    next: () => {
      this.message.success('Test Submitted Successfully', { nzDuration: 5000 });
      this.router.navigateByUrl('/user/view-test-results');
    },
    error: (err) => {
      this.message.error(`${err?.error ?? 'Something went wrong'}`, { nzDuration: 5000 });
    },
  });
}


}
