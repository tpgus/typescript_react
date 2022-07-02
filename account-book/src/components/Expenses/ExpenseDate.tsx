import React from "react";
import styles from "./ExpenseDate.module.css";

interface PropsType {
  date: Date;
}

const ExpenseDate = (props: PropsType) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("ko-KR", { month: "numeric" });
  const day = props.date.toLocaleString("ko-KR", { day: "numeric" });

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["day"]}>{day}</div>
      <div className={styles["month"]}>{month}</div>
      <div className={styles["year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
