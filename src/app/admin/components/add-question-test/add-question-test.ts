import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Admin } from '../../Services/admin';

@Component({
  selector: 'app-add-question-test',
  imports: [SharedModule],
  templateUrl: './add-question-test.html',
  styleUrl: './add-question-test.scss'
})
export class AddQuestionTest {

  constructor(
    private fb: FormBuilder,
    private adminService: Admin,
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  id: number | null;
  questionForm!: FormGroup;

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      questionText: [null, Validators.required],
      optionA: [null, Validators.required],
      optionB: [null, Validators.required],
      optionC: [null, Validators.required],
      optionD: [null, Validators.required],
      correctOption: [null, Validators.required],
    });
  
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  submitForm(): void {
    const questionDto = this.questionForm.value;
    questionDto.id = this.id;
  
    this.adminService.addQuestionInTest(questionDto).subscribe({
      next: () => {
        this.notification.success('SUCCESS', 'Question Created Successfully.', { nzDuration: 5000 });
        this.router.navigateByUrl('/admin/dashboard');
      },
      error: (err) => {
        this.notification.error('ERROR', `${err?.error ?? 'Something went wrong'}`, { nzDuration: 5000 });
      }
    });
  }
  
  

}
