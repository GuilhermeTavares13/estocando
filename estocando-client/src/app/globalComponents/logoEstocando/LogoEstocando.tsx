import Logo from "../../../img/box.png";
import './styleLogoEstocando.css';
import Link from 'next/link';

export default function LogoEstocando() {
    return (
        <Link className="linkEstocando" href="/">
            <div className="logoEstocando">
                <img id="imgLogoEstocando" src={Logo.src}/>
                <h1>Estocando</h1>
                <img id="imgLogoEstocando" src={Logo.src}/>
            </div>
        </Link>
    );
}
