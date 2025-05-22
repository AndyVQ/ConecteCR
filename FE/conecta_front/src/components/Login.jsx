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
    <>
        <input
        placeholder="Usuario"
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Clave Usuario"
        onChange={(e) => setClave(e.target.value)}
      />

      <button onClick={validarUsuario}>Iniciar sesión</button>
    </>
  );
};
export default Login;
