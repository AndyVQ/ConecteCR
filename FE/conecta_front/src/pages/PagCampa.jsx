import Navbar from "../components/NavBar";
import FooterHighFashion from "../components/Footer";
import ListaCardCampanaP from "../components/ListaCardCampanaP";

const PagCampa = () => (
  <>
    <header>
      <Navbar />
    </header>
    <div className="pagCampana">
      <ListaCardCampanaP />
    </div>
    <footer>
      <FooterHighFashion />
    </footer>
  </>
);

export default PagCampa;
