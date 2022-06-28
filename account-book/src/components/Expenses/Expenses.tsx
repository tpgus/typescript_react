import styles from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
interface ExpensesProps {
  items: {
    id: string;
    title: string;
    date: Date;
    amount: number;
  }[];
}
const Expenses: React.FC<ExpensesProps> = ({ items }) => {
  return (
    <Card className={styles["expenses"]}>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
