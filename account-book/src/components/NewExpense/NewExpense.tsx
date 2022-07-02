import { useState } from "react";
import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { ExpenseDataType, NewExpenseDataType } from "./DataType";

interface PropsType {
  onAddExpense: (newExpenseData: NewExpenseDataType) => void;
}

const NewExpense: React.FC<PropsType> = (props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseDataType) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEdititingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles["new-expense"]}>
      {!isEditing && <button onClick={startEdititingHandler}>추가하기</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
