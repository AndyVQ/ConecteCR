import CampAdmin from "../components/CampAdmin";
import AdminNavBar from "../components/AdminNavBar";
import FooterHighFashion from "../components/Footer";

const PagAdminCamp = () => {
  return (
    <>
      <header>
        <AdminNavBar />
      </header>
      <div className="pag-Admin">
        <CampAdmin />
      </div>
      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};
export default PagAdminCamp;
