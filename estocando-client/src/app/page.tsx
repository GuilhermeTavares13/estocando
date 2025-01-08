import LogoEstocando from "@/app/components/LogoEstocando";
import "../app/styles/home.css";

export default function Home() {
  return (
    <div className="App">
        <LogoEstocando />
       <main>
           <div className="container">
               <button id="homeButtonEntrar" className="homeButton">Entrar</button>
               <button id="homeButtonCadastrar" className="homeButton">Cadastrar</button>
           </div>
       </main>
    </div>
  );
}
