import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalc } from './imc-calc';

describe('ImcCalc', () => {
  let component: ImcCalc;
  let fixture: ComponentFixture<ImcCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcCalc],
    }).compileComponents();

    fixture = TestBed.createComponent(ImcCalc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
