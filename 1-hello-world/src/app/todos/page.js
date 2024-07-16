import "../layout"
import Link from "next/link";

export default async function Todos(todos) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');

    var todos = await data.json();


    return (
        <>
            <div className="todolist">
                <h1 className="text-2xl font-bold">Tarefas a fazer</h1>
                <ul className="todolist li">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title} - <Link href={`/todos/${todo.id}`}><p> Ver mais </p></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
}