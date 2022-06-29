import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { NewExpenseDataType } from "./components/NewExpense/DataType";

const App: React.FC = () => {
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
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
