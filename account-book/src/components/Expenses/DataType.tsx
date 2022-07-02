interface ExpenseType {
  items: {
    id: string;
    title: string;
    date: Date;
    amount: number;
  }[];
}

export type { ExpenseType };
