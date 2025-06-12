import "../styles/nav.css";
import { CgProfile } from "react-icons/cg";

const AdminNavBar = () => {
  return (
    <>
      <nav className="navbar">
        <section>
          <img src="\src\img\logo.png" alt="Logo ConecteCR" className="logotipo"/> 
        </section>
        <ul className="nav-links">
          <li>
            <a href="/Admin">Inicio</a>
          </li>
          <li>
            <a href="/CampAdmin">Campañas</a>
          </li>
          <li>
            <a href="/PetAdmin">Peticiones</a>
          </li>
          <li>
            <a href="/VotAdmin">Votaciones</a>
          </li>
          <li>
            <a href="/RepAdmin">Reportes</a>
          </li>
          <li>
            <a href="/NotAdmin">Noticias</a>
          </li>
          <li>
            <a><CgProfile /> Admin</a>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default AdminNavBar;
