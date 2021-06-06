import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodosListItemButtonsComponent } from './today-todos-list-item-buttons.component';

describe('TodayTodosListItemButtonsComponent', () => {
  let component: TodayTodosListItemButtonsComponent;
  let fixture: ComponentFixture<TodayTodosListItemButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTodosListItemButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTodosListItemButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
