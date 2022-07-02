import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";
import { ExpenseType } from "./DataType";

const ExpensesList: React.FC<ExpenseType> = (props) => {
  /*
JSX.Element vs React.ReactNode?
https://github.com/typescript-cheatsheets/react#useful-react-prop-type-examples
 A more technical explanation is that a valid React node is not the same thing as what is returned by React.createElement. 
 Regardless of what a component ends up rendering, React.createElement always returns an object, which is the JSX.Element interface, 
 but React.ReactNode is the set of all possible return values of a component.

  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  */
  //let let expensesContent: JSX.Element | JSX.Element[] = <p>데이터가 없습니다.</p>;
  //let let expensesContent: JSX.Element[] = [<p>데이터가 없습니다.</p>];
  //   let expensesContent: JSX.Element | JSX.Element[] = <p>데이터가 없습니다.</p>;

  if (props.items.length === 0)
    return (
      <h2 className={styles["expenses-list__fallback"]}>데이터가 없습니다.</h2>
    );
  return (
    <ul className={styles["expenses-list"]}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
