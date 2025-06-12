import AdminNavBar from "../components/AdminNavBar";  
import FooterHighFashion from "../components/Footer";
import PetAdmin from "../components/PetAdmin";
import { useEffect, useState } from "react";
import "../styles/PagCampAdmin.css";
import AggPetModal from "../components/AggPetModal";

const PagPetAdmin = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  function abrirModalAgg() {
    setAbrirModal(true);
  }

  function cerrarModalAgg() {
    setAbrirModal(false);
  }
  return (
    <>
      <header>
        <AdminNavBar />
        <button onClick={() => {abrirModalAgg()}} className="btn-agg-camps">
          +
        </button>
      </header>
      <div className="pag-Admin">
        <PetAdmin />
      </div>
      <footer>
        <FooterHighFashion />
      </footer>

      <AggPetModal abrirModal={abrirModal} cerrarModal={cerrarModalAgg} />
    </>
  );
};
export default PagPetAdmin;
