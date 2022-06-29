import styles from "./ExpensesFilter.module.css";

interface PropsType {
  selectedYear: string;
  onChangeFilter: (selectedYear: string) => void;
}

const ExpenseFilter: React.FC<PropsType> = (props) => {
  const selectYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
