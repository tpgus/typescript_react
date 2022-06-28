import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App: React.FC = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2022, 5, 28),
      amount: 29000,
    },
    {
      id: "e2",
      title: "Car Insurance",
      date: new Date(2022, 5, 28),
      amount: 29000,
    },
    {
      id: "e3",
      title: "Car Insurance",
      date: new Date(2022, 5, 28),
      amount: 29000,
    },
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
