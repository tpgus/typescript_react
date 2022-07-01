export interface ExpensesProps {
  items: {
    id: string;
    title: string;
    date: Date;
    amount: number;
  }[];
}
