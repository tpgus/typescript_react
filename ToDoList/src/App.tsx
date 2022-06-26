import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

interface Todo {
  id: string;
  text: string;
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function todoAddHandler(text: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  }

  function todoDeleteHandler(todoId: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
