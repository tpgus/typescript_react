import React from "react";
import "./TodoList.css";

interface ToListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

function TodoList({ items, onDeleteTodo }: ToListProps) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)} type="button">
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

TodoList.defaultProps = {
  items: [{ id: "default id", text: "default text" }],
};

export default TodoList;
