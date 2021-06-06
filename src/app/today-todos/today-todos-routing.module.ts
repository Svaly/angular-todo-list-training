import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayTodosComponent } from './today-todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodayTodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayTodosRoutingModule { }
