import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoitems } from './todoitems';

describe('Todoitems', () => {
  let component: Todoitems;
  let fixture: ComponentFixture<Todoitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Todoitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
