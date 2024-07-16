import Link from "next/link";

export default function Comments({ params }) {
    const { todosid, commentid } = params;

    return (
        <>
            <div>
                <Link href={`/todos/${todosid}`}>Voltar ao Todo</Link>
                <h1>Exibindo Comentário de número: {commentid} do todo: {todosid}</h1>
            </div>
        </>
    );
}
