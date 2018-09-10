import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseCategoryComponent } from './expense-category/models/expense-category/expense-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    ExpenseCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
