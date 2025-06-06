import AdminNavBar from "../components/AdminNavBar";  
import FooterHighFashion from "../components/Footer";
import PetAdmin from "../components/PetAdmin";

const PagPetAdmin = () => {
  return (
    <>
      <header>
        <AdminNavBar />
      </header>
      <div className="pag-Admin">
        <PetAdmin />
      </div>
      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};
export default PagPetAdmin;
