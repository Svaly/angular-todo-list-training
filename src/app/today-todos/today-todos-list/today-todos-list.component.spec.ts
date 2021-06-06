import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodosListComponent } from './today-todos-list.component';

describe('TodayTodosListComponent', () => {
  let component: TodayTodosListComponent;
  let fixture: ComponentFixture<TodayTodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTodosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
