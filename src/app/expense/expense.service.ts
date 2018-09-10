import { Injectable } from '@angular/core';
import { Observable, from, Observer } from 'rxjs';
import { Expense } from './models/expense';
import { DEFAULT_EXPENSES } from './fake-data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses = DEFAULT_EXPENSES;

  get maximumId() {
    return this.expenses.map(x => x.id).reduce((prev, curr) => curr > prev ? curr : prev, 0);
  }

  constructor() { }

  addExpense(amount, description) {
    this.expenses.push({ amount, description, date: new Date(), id: this.maximumId })
  }

  removeExpense(id: number) {
    const index = this.expenses.findIndex(x => x.id == id);
    if (index != -1) {
      this.expenses.splice(index, 1);
    }
  }

  getExpenses(fromDate: Date, toDate: Date): Observable<Expense[]> {
    return from([DEFAULT_EXPENSES]);
  }
}
