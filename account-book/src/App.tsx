import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { NewExpenseDataType } from "./components/NewExpense/DataType";

const App = () => {
  const [expenses, setExpenses] = useState<NewExpenseDataType[]>([
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2022, 5, 28),
      amount: 29000,
    },
  ]);

  const addExpenseHandler = (expense: NewExpenseDataType) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
