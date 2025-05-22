import { postData } from "../services/fetch";
import "../styles/register.css";
import { useState } from "react";


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
    postData("api/register", users); // Llamado para ingresar el usuario

    setReload(!reload);
  }
  return (
    <>
      <div>
        <div className="register-Info">
          <h3 className="register-h3">Registrate aquí</h3>
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
          <input
            onChange={(e) => setUserPass(e.target.value)}
            type="password"
            placeholder="Contraseña"
            className="register-input"
          />
          <input
            onChange={(e) => SetUserCedula(e.target.value)}
            type="text"
            placeholder="Cedula"
            className="register-input"
          />
          <input
            onChange={(e) => SetUserTel(e.target.value)}
            type="text"
            placeholder="Telefono"
            className="register-input"
          />
          <button onClick={registerInfo} className="register-Btn">
            Registrate
          </button>
          <p className="register-p">
            Ya tenes una cuenta? <Link to="/Login"> Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default FormularioRegister;
