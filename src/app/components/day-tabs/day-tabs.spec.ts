import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTabs } from './day-tabs';

describe('DayTabs', () => {
  let component: DayTabs;
  let fixture: ComponentFixture<DayTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
