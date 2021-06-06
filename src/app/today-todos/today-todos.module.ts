import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayTodosComponent } from './today-todos.component';
import { TodayTodosListComponent } from './today-todos-list/today-todos-list.component';
import { TodayTodosListItemComponent } from './today-todos-list-item/today-todos-list-item.component';
import { TodayTodosListItemButtonsComponent } from './today-todos-list-item-buttons/today-todos-list-item-buttons.component';
import { TodayTodosCreateComponent } from './today-todos-create/today-todos-create.component';

import { TodayTodosRoutingModule } from './today-todos-routing.module';

@NgModule({
  declarations: [
    TodayTodosComponent,
    TodayTodosListComponent,
    TodayTodosListItemComponent,
    TodayTodosListItemButtonsComponent,
    TodayTodosCreateComponent],
  imports: [
    CommonModule,
    TodayTodosRoutingModule
  ]
})
export class TodayTodosModule { }
