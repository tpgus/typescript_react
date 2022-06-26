import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">text</label>
        <input id="todo-text" ref={textInputRef} type="text"></input>
      </div>
      <button type="submit">등록</button>
    </form>
  );
};

export default NewTodo;
