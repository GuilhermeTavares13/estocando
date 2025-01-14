"use client";

import LogoEstocando from "@/app/globalComponents/logoEstocando/LogoEstocando";
import Link from 'next/link';
import "./styleEntrar.css"

export default function Page() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const payload = {
          email: formData.get("email"),
          password: formData.get("password"),
        };
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        // Handle response if necessary
        const data = await response.json()
        // ...
        console.log(data);
    }

    return (
        <div className="App">
            <LogoEstocando/>
            <main>
                <div className="container">
                    <form onSubmit={onSubmit}>
                        <div className="innerFormContainer">
                            <label>Email:</label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="innerFormContainer">
                            <label>Senha:</label>
                            <input type="password" name="password" id="password" placeholder="Senha"/>
                        </div>
                        <button id="homeButtonEntrar" className="homeButton" type="submit">Confirmar</button>
                    </form>
                    <div className="innerContainer">
                        <Link href="/pages/cadastrar">Desejo cadastrar</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
