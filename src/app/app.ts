import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FinanceCalc } from './finance-calc/finance-calc';
import { ImcCalc } from './imc-calc/imc-calc';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, MatToolbarModule, ImcCalc, FinanceCalc],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Calculadoras';
}
