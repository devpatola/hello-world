import React from "react";
import styles from "@/styles/Todo.module.css";

// Faz a pré-renderização dos dados retornados pela API, tornando a aplicação mais performática
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
