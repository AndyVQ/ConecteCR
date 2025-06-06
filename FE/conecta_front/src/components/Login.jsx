import { useState } from "react";
import { postData } from "../services/fetch";
import "../styles/Login.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [verClave, setVerClave] = useState("password");

  async function validarUsuario() {
    const usuarioObj = {
      username: usuario,
      password: clave,
    };

    const respuesta = await postData("usuarios/login/", usuarioObj);

    if (respuesta.exito) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
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
          <button
            className="boton-ojo"
            onClick={() =>
              verClave == "password"
                ? setVerClave("text")
                : setVerClave("password")
            }
          >
            {" "}
            {verClave === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
          <input
            type={verClave}
            placeholder="Clave"
            onChange={(e) => setClave(e.target.value)}
            className="input-password"
          />
          <button onClick={validarUsuario} className="botton-iniciar">
            Iniciar sesión
          </button>
          <p className="registerH2">
            <Link to="/Register">¡Registrarse!</Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;
