import { useState } from "react";
import styles from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

interface ExpensesProps {
  items: {
    id: string;
    title: string;
    date: Date;
    amount: number;
  }[];
}
const Expenses: React.FC<ExpensesProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState<string>("2022");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className={styles["expenses"]}>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
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
