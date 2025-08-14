import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared-module';
import { Admin } from '../../Services/admin';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-test',
  imports: [SharedModule],
  templateUrl: './view-test.html',
  styleUrl: './view-test.scss'
})
export class ViewTest {

  questions: any[] = [];
testId: any;

constructor(
  private adminService: Admin,
  private activatedRoute: ActivatedRoute
) {}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    this.testId = +(params.get('id') ?? 0);

    this.adminService.getTestQuestions(this.testId).subscribe(res => {
      this.questions = res.questions;
      console.log(this.questions);
    });
  });
}


}
