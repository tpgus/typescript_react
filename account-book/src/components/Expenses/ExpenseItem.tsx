import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";
import Card from "../UI/Card";

interface PropsType {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = (props: PropsType) => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={styles["description"]}>
          <h2>{props.title}</h2>
          <div className={styles["price"]}>{props.amount}원</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
