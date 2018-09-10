import { Expense } from "../models/expense";

export const DEFAULT_EXPENSES: Expense[] = [
    { id: 1, amount: 54, description: "Milk", date: new Date() },
    { id: 2, amount: 40, description: "Snickers", date: new Date() },
    { id: 3, amount: 100, description: "Choko pie", date: new Date() }
];