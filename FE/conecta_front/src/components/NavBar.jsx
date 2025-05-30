import "../styles/nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <section>
          <img src="\src\img\logo.png" alt="Logo ConecteCR" className="logotipo"/>
        </section>
        <ul className="nav-links">
          <li>
            <a href="/home">Campañas</a>

          </li>
          <li>
            <a href="/User">Peticiones</a>
          </li>
          <li>
            <a href="/calificaciones">Votaciones</a>
          </li>
          <li>
            <a href="/Contacto">Reportes</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
