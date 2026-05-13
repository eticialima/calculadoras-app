import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCalc } from './finance-calc';

describe('FinanceCalc', () => {
  let component: FinanceCalc;
  let fixture: ComponentFixture<FinanceCalc>;

  beforeEach(async () => {
    registerLocaleData(localePt);

    await TestBed.configureTestingModule({
      imports: [FinanceCalc],
      providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceCalc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
