import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-finance-calc',
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './finance-calc.html',
  styleUrl: './finance-calc.scss',
})
export class FinanceCalc {
  initialAmount = 1000;
  monthlyContribution = 250;
  interestRate = 1;
  months = 24;

  get totalInvested(): number {
    return this.initialAmount + this.monthlyContribution * this.months;
  }

  get finalAmount(): number {
    const monthlyRate = this.interestRate / 100;
    let amount = this.initialAmount;

    for (let month = 0; month < this.months; month += 1) {
      amount = amount * (1 + monthlyRate) + this.monthlyContribution;
    }

    return amount;
  }

  get interestEarned(): number {
    return this.finalAmount - this.totalInvested;
  }

  reset(): void {
    this.initialAmount = 1000;
    this.monthlyContribution = 250;
    this.interestRate = 1;
    this.months = 24;
  }
}
