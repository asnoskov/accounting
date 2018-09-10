import { Injectable } from '@angular/core';
import { ExpenseCategory } from './models/expense-category';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  constructor() { }

  getCategories(): ExpenseCategory[] {
    return [
      { id: 1, name: 'Fruits' },
      { id: 2, name: 'Vegitables' },
      { id: 3, name: 'Sweeties' }
    ];
  }
}
