import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodosCreateComponent } from './today-todos-create.component';

describe('TodayTodosCreateComponent', () => {
  let component: TodayTodosCreateComponent;
  let fixture: ComponentFixture<TodayTodosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTodosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTodosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
