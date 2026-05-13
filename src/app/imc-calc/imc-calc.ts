import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-imc-calc',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './imc-calc.html',
  styleUrl: './imc-calc.scss',
})
export class ImcCalc {
  weight = 70;
  height = 1.75;

  get bmi(): number {
    if (!this.weight || !this.height) {
      return 0;
    }

    return this.weight / (this.height * this.height);
  }

  get classification(): string {
    const value = this.bmi;

    if (!value) {
      return 'Fill in the fields to calculate.';
    }
    if (value < 18.5) {
      return 'Underweight';
    }
    if (value < 25) {
      return 'Normal weight';
    }
    if (value < 30) {
      return 'Overweight';
    }
    if (value < 35) {
      return 'Obesity class I';
    }
    if (value < 40) {
      return 'Obesity class II';
    }
    return 'Obesity class III';
  }

  reset(): void {
    this.weight = 70;
    this.height = 1.75;
  }
}
