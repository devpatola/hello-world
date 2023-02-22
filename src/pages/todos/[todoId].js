import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Todo() {
  const router = useRouter();
  const todoId = router.query.todoId;

  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>{`Todo id: ${todoId}`}</h1>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: blah blah{" "}
        <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link>
      </p>
    </>
  );
}
