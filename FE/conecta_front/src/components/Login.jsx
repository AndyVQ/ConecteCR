import { useState } from "react";
import { postData } from "../services/fetch";
import "../styles/Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  async function validarUsuario() {
    const usuarioObj = {
      username: usuario,
      password: clave,
    };

    const respuesta = await postData("usuarios/login/", usuarioObj);

    if (respuesta.exito) {
      console.log("correcto");
    } else {
      console.log("incorrecto");
    }
  }

  return (
    <main className="cont-todo">
      <div className="login-container">
        <section className="cont-img">
          <img src="\src\img\logo.png" alt="Logo ConecteCR" className="logo" />
        </section>

        <section className="section-inputs">
          <h2 className="h2">Iniciar sesión</h2>
          <input
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
            className="input-usuario"
          />
          <input
            type="password"
            placeholder="Clave Usuario"
            onChange={(e) => setClave(e.target.value)}
            className="input-password"
          />
          <button onClick={validarUsuario} className="botton-iniciar">
            Iniciar sesión
          </button>
        </section>
      </div>
    </main>
  );
};

export default Login;
