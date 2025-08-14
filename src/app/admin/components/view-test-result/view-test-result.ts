import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared-module';
import { Admin } from '../../Services/admin';

@Component({
  selector: 'app-view-test-result',
  imports: [SharedModule],
  templateUrl: './view-test-result.html',
  styleUrl: './view-test-result.scss'
})
export class ViewTestResult {

  resultsData: any;

constructor(private testService: Admin) {}

ngOnInit(): void {
  this.getTestResults();
}

getTestResults(): void {
  this.testService.getTestResults().subscribe(res => {
    this.resultsData = res;
    console.log(this.resultsData);
  });
}


}
