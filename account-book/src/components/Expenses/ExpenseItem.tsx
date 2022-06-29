import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";
import Card from "../UI/Card";

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  return (
    <Card className={styles["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={styles["description"]}>
        <h2>{props.title}</h2>
        <div className={styles["price"]}>{props.amount}원</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
