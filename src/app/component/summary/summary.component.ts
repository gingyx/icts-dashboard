import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  expenses: number = 40000.00;
  income: number = 50000.00;

  get profit() {
    return this.income - this.expenses;
  }

  getExpenses() {
    return this.expenses.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })
  }

  getIncome() {
    return this.income.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })
  }

  getProfit() {
    return this.profit.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })
  }
}
