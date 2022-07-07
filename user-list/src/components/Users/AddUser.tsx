import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface UserType {
  id: string;
  age: string;
  name: string;
}

interface ErrorType {
  title: string;
  message: string;
}

interface PropsType {
  onAddUser: (newUser: UserType) => void;
}

const AddUser = (props: PropsType) => {
  const [enteredName, setEntereName] = useState<string>(""); //타입추론으로도 가능
  const [enteredAge, setEnteredAge] = useState<string>("");
  const [error, setError] = useState<ErrorType | null>(null);
  // const [error, setError] = useState({title:'',message:''});

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "잘못 입력하셨습니다",
        message: "모든 칸이 입력되어야 합니다",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "올바른 나이를 입력하세요",
        message: "나이는 1 이상의 정수여야 합니다.",
      });
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    });
    setEntereName("");
    setEnteredAge("");
  };

  const changeNameHandler = (e: InputEvent) => {
    setEntereName(e.target.value);
  };

  const changeAgeHandler = (e: InputEvent) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={styles["input"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            onChange={changeNameHandler}
            value={enteredName}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={changeAgeHandler}
            value={enteredAge}
          />
          <Button type="submit">등록</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
