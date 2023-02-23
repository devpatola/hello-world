import React from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await response.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  // const router = useRouter();
  // const todoId = router.query.todoId;

  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>{`Todo id: ${todo.id}`}</h1>
      <h3>{todo.title}</h3>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
      </p>
    </>
  );
}
