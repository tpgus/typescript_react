import styles from "./ExpenseForm.module.css";
import React, { useState } from "react";
import { ExpenseDataType } from "./DataType";

interface PropsType {
  onSaveExpenseData: (expenseData: ExpenseDataType) => void;
  onCancle: () => void;
}

type EventType = React.ChangeEvent<HTMLInputElement>;

const ExpenseForm = (props: PropsType) => {
  const [enteredTitle, setEnteredTitle] = useState<string>(""); //타입추론으로도 가능
  const [enteredDate, setEnteredDate] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");

  const titleChangeHandler = (event: EventType) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event: EventType) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event: EventType) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="100"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="button" onClick={props.onCancle}>
          취소
        </button>
        <button type="submit">추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
