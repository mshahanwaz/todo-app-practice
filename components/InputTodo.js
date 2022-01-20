import React, { useRef } from "react";
import styles from "../styles/InputTodo.module.css";
import { v4 as uuidv4 } from "uuid";
import { getRandomColor } from "./utils";

function InputTodo({ todos, setTodos }) {
  const input = useRef(null);

  function handleAddTodo(e) {
    e.preventDefault();
    const title = input.current.value;
    console.log(getRandomColor());
    if (title.length > 0) {
      let todo = {
        id: uuidv4(),
        title: title,
        done: false,
        color: getRandomColor(),
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
    }

    input.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo} className="{styles.input}">
      <input
        className={styles.input}
        ref={input}
        type="text"
        placeholder="Add todo item and hit ENTER"
      />
    </form>
  );
}

export default InputTodo;
