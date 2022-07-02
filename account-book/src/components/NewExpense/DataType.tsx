interface ExpenseDataType {
  title: string;
  amount: number;
  date: Date;
}

interface NewExpenseDataType extends ExpenseDataType {
  id: string;
}

export type { ExpenseDataType, NewExpenseDataType };
