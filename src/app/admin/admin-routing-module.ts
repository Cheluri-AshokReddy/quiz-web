import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard'; // ✅
import { CreateTest } from './components/create-test/create-test';
import { AddQuestionTest } from './components/add-question-test/add-question-test';
import { ViewTest } from './components/view-test/view-test';
import { ViewTestResult } from './components/view-test-result/view-test-result';


const routes: Routes = [
  { path: 'dashboard', component: Dashboard},
  { path: 'create-test', component: CreateTest},
  { path: 'add-question/:id', component: AddQuestionTest},
  { path: 'view-test/:id', component: ViewTest },
  { path: 'view-test-results', component: ViewTestResult },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
