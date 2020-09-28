import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {!props.edit ? (
        <>
          <input
            name="text"
            type="text"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo"
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      ) : (
        <>
          <input
            name="text"
            type="text"
            className="todo-input edit"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update Todo"
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
