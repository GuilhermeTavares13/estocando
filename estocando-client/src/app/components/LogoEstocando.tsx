import Logo from "../../img/box.png";
import '../styles/styleLogoEstocando.css';

export default function LogoEstocando() {
    return (
        <div className="logoEstocando">
            <img id="imgLogoEstocando" src={Logo.src}/>
            <h1>Estocando</h1>
            <img id="imgLogoEstocando" src={Logo.src}/>
        </div>
    );
}
