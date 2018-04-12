import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { TestExamComponent } from './test-exam/test-exam.component';


const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [{
    path: 'test',
    component: TestExamComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}

export const routedComponents = [
    TestComponent,
    TestExamComponent ,
];
