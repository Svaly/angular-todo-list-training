import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodosListItemComponent } from './today-todos-list-item.component';

describe('TodayTodosListItemComponent', () => {
  let component: TodayTodosListItemComponent;
  let fixture: ComponentFixture<TodayTodosListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTodosListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTodosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
