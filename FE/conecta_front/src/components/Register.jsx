import { postData } from "../services/fetch";
import "../styles/register.css";
import { useState } from "react";
import { Link } from "react-router-dom"

const FormularioRegister = () => {
  const [userName, SetUserName] = useState("");
  const [userFirst, SetUserFirst] = useState("");
  const [userLast, SetUserLast] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userCedula, SetUserCedula] = useState("");
  const [userTel, SetUserTel] = useState("");
  const [reload, setReload] = useState(false);

  async function registerInfo() {
    if (
      !userName ||
      !userFirst ||
      !userLast ||
      !userEmail ||
      !userPass ||
      !userCedula ||
      !userTel
    ) {
      alert("Rellena los espacios requeridos");
      return;
    }

    if (userPass.length < 8) {
      alert("La contraseña debe tener más de 8 caracteres");
      return;
    }

    let users = {
      username: userName,
      first_name: userFirst,
      last_name: userLast,
      email: userEmail,
      password: userPass,
      cedula: userCedula,
      telefono: userTel,
    };
    await postData("usuarios/register/", users);

    setReload(!reload);
  }

  return (
    <>
      <div>
        <div className="register-Info">
          <section className="cont-image">
            <img src="\src\img\logo.png" alt="Logo ConecteCR" className="logo" />
          </section>
          <div className="register-inputs">
                <h2 className="h2">Registrate aquí</h2>
            <div className="input-columns">
              <div className="columna columna-1">
                <input
                  onChange={(e) => SetUserName(e.target.value)}
                  type="text"
                  placeholder="Nombre de Usuario"
                  className="register-input"
                />
                <input
                  onChange={(e) => SetUserFirst(e.target.value)}
                  type="text"
                  placeholder="Primer Nombre"
                  className="register-input"
                />
                <input
                  onChange={(e) => SetUserLast(e.target.value)}
                  type="text"
                  placeholder="Apellidos"
                  className="register-input"
                />
                <input
                  onChange={(e) => SetUserEmail(e.target.value)}
                  type="email"
                  placeholder="Correo"
                  className="register-input"
                />
                <p className="h2">Ya tienes una cuenta? <Link to= "/"> Haz click aqui</Link></p>
              </div>
              <div className="columna columna-2">
                <input
                  onChange={(e) => setUserPass(e.target.value)}
                  type="password"
                  placeholder="Contraseña"
                  className="register-input"
                />
                <input
                  onChange={(e) => SetUserCedula(e.target.value)}
                  type="text"
                  placeholder="Cédula"
                  className="register-input"
                />
                <input
                  onChange={(e) => SetUserTel(e.target.value)}
                  type="text"
                  placeholder="Teléfono"
                  className="register-input"
                />
                <button onClick={registerInfo} className="register-Btn">
                  Registrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioRegister;
