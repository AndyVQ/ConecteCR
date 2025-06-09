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
            <a href="/PagCampana">Campañas</a>

          </li>
          <li>
            <a href="/PagPeti">Peticiones</a>
          </li>
          <li>
            <a href="/PagVota">Votaciones</a>
          </li>
          <li>
            <a href="/PagReport">Reportes</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
