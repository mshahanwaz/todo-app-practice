import React from "react";
import styles from "../styles/Todo.module.css";
import { getRandomColor } from "./utils";

export default function Todo({ todo, setTodos }) {
  function handleCheck() {
    setTodos((prevTodos) =>
      prevTodos.map((checkTodo) =>
        checkTodo.id === todo.id
          ? { ...checkTodo, done: !todo.done, color: getRandomColor() }
          : checkTodo
      )
    );
  }

  function handleRemove() {
    setTodos((prevTodos) =>
      prevTodos.filter((removeTodo) => removeTodo.id !== todo.id)
    );
  }

  // console.log("Todo.js", todo.title, todo.done);

  return (
    <label className={`${styles.todo} label`} title="Click to mark">
      <style jsx>
        {`
          .label:hover {
            border-color: ${todo.color};
            box-shadow: 5px 5px 0 ${todo.color};
          }
        `}
      </style>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onClick={handleCheck}
        className={styles.checkbox}
      />
      <div className={styles.title}>{todo.title}</div>
      <button className={styles.button} onClick={handleRemove}>
        Remove
      </button>
    </label>
  );
}
