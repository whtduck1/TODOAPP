import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Networkerror } from './networkerror';

describe('Networkerror', () => {
  let component: Networkerror;
  let fixture: ComponentFixture<Networkerror>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Networkerror]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Networkerror);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
