import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared-module';
import { Test } from '../../services/test';

@Component({
  selector: 'app-view-my-test-results',
  imports: [SharedModule],
  templateUrl: './view-my-test-results.html',
  styleUrl: './view-my-test-results.scss'
})
export class ViewMyTestResults {

  dataSet: any;

constructor(private testService: Test) {}

ngOnInit(): void {
  this.getTestResults();
}

getTestResults(): void {
  this.testService.getMyTestResults().subscribe(res => {
    this.dataSet = res;
    console.log(this.dataSet);
  });
}

}
