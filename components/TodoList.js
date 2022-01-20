import React from "react";
import Todo from "./Todo";
import styles from "../styles/TodoList.module.css";

function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.container}>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
