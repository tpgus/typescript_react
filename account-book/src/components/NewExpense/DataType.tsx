export interface ExpenseDataType {
  title: string;
  amount: number;
  date: Date;
}

export interface NewExpenseDataType extends ExpenseDataType {
  id: string;
}

export interface ExpenseFormPropsType {
  onSaveExpenseData: (expenseData: ExpenseDataType) => void;
}

export interface NewExpensePropsType {
  onAddExpense: (newExpenseData: NewExpenseDataType) => void;
}
