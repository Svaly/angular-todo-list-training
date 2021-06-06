import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'today-todos',
    pathMatch: 'full'
  },
  {
    path: 'today-todos',
    loadChildren: () =>
      import('./today-todos/today-todos.module').then((m) => m.TodayTodosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
