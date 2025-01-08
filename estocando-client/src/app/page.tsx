import LogoEstocando from "@/app/globalComponents/logoEstocando/LogoEstocando";
import "../app/styles/home.css";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="App">
        <LogoEstocando />
       <main>
           <div className="container">
               <Link id="homeButtonEntrar" className="homeButton" href="/pages/entrar">Entrar</Link>
               <Link id="homeButtonCadastrar" className="homeButton" href="/pages/cadastrar">Cadastrar</Link>
           </div>
       </main>
    </div>
  );
}
