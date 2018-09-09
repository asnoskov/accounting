import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  private description : string;
  private amount: number;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.clearForm();
  }

  private changeAmount($event){
    const value = Number.parseFloat($event.data);
    if (value){
      this.amount = value;
    }
  }

  private changeDescription($event){
    this.description = $event.data;
  }

  private addExpense(){
    this.expenseService.addExpense(this.amount, this.description);
  }

  private clearForm(){
    this.description = "";
    this.amount = 0;
  }
}
