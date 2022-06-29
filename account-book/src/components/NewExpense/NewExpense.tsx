import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { ExpenseDataType, NewExpensePropsType } from "./DataType";

const NewExpense: React.FC<NewExpensePropsType> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseDataType) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
