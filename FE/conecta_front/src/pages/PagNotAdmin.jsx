
import AdminNavBar from "../components/AdminNavBar";  
import FooterHighFashion from "../components/Footer";
import NotAdmin from "../components/NotAdmin";

const PagNotAdmin = () => {
  return (
    <>
    <header>
        <AdminNavBar />
    </header>
    <div className="pag-Admin">
        <NotAdmin />
    </div>
      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};
export default PagNotAdmin;
