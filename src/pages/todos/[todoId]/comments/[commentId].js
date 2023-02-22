import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Comment() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <p>{`Comment: ${commentId}`}</p>
    </>
  );
}
