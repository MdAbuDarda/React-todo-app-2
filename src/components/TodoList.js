import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log("new todos", newTodos);
    setTodos(newTodos);
  };

  const updateTodo = (id, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newVal : item)));
  };


  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removedArr);
  };


  return (
    <div>
      <h1>Whats is the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
