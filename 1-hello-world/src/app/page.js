import "./layout"
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keyworkds" content="Roupas.Calçados,Bone"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>

      </Head>
      <div>
        <h1 className="home">HELLO WORLD Next.js</h1>
        <Image 
        src={"/images/city.jpg"}
        width={600} 
        height={800} 
        alt="Cidade à noite"
        />
      </div>
    </>
  );
}
