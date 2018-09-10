import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
import { Expense } from '../expense/models/expense';
import { ExpenseCategoryService } from '../expense-category/expense-category.service';
import { ExpenseCategory } from '../expense-category/models/expense-category';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private expenseService: ExpenseService, private expenseCategoryService: ExpenseCategoryService) { }

  ngOnInit() {
  }

  removeExpense(expense: Expense) {
    this.expenseService.removeExpense(expense.id);
  }

  getCategories(): ExpenseCategory[]{
    return this.expenseCategoryService.getCategories();
  }
}
