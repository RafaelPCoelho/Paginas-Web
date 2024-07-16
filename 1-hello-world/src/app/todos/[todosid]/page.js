import Link from "next/link";

// Função assíncrona para buscar os dados de um todo específico
async function fetchTodoData(todosid) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todosid}`);
    const todo = await res.json();
    return todo;
}

// Componente da página que exibe os dados
export default async function TodoPage({ params }) {
    const { todosid } = params;
    const todo = await fetchTodoData(todosid);

    return (
        <>
            <div>
                <Link href="/todos">Voltar a Todos</Link>
                <h1>Exibindo o todoId: {todosid}</h1>
                <p>Título: {todo.title}</p>
                <p>
                    Comentário: <Link href={`/todos/${todosid}/comments/1`}>detalhes</Link>
                </p>
            </div>
            <div>
                <h1>Exibindo o todoId: {todosid}</h1>
                <p>
                    Comentário: <Link href={`/todos/${todosid}/comments/2`}>detalhes</Link>
                </p>
            </div>
            <div>
                <h1>Exibindo o todoId: {todosid}</h1>
                <p>
                    Comentário: <Link href={`/todos/${todosid}/comments/3`}>detalhes</Link>
                </p>
            </div>
            <div>
                <h1>Exibindo o todoId: {todosid}</h1>
                <p>
                    Comentário: <Link href={`/todos/${todosid}/comments/4`}>detalhes</Link>
                </p>
            </div>
        </>
    );
}
