import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todolist } from './todolist';

describe('Todolist', () => {
  let component: Todolist;
  let fixture: ComponentFixture<Todolist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Todolist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todolist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
