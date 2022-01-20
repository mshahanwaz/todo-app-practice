import Head from "next/head";
import { useEffect, useState } from "react";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import styles from "../styles/Main.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList) setTodos(todoList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo Application in NEXT.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <InputTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}
