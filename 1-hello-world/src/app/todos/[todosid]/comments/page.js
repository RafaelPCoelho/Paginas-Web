import Link from "next/link";

export default function VariosComents({ params }) {
    const { todosid } = params;

    return (
        <>
            <div>
                <Link href={`/todos/${todosid}`}>Voltar ao Todo</Link>
                <h1>Comentários para o todoId: {todosid}</h1>
                {/* Aqui você pode adicionar a lógica para exibir a lista de comentários */}
            </div>
        </>
    );
}
