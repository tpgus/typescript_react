import React, { useState } from "react";
import styles from "./Expenses.module.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

interface ExpensesProps {
  items: {
    id: string;
    title: string;
    date: Date;
    amount: number;
  }[];
}
const Expenses: React.FC<ExpensesProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState<string>("2022"); //타입추론으로도 가능

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className={styles["expenses"]}>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
