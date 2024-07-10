import Link from "next/link";
import "../layout";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">A fazer</Link>
        </li>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre nós</Link>
        </li>
        <li>
          <Link href="/contact">Contatos</Link>
        </li>
      </ul>
    </div>
  );
}