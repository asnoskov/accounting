import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  public expenses: any[] = [];

  constructor() { }

  public addExpense(amount: number, description: string){
    this.expenses.push({ amount, description });
  }
}
