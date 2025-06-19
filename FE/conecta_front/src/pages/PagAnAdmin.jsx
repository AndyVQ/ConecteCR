
import AnAdmin from "../components/AnAdmin";
import AdminNavBar from "../components/AdminNavBar";  
import FooterHighFashion from "../components/Footer";

const PagAnAdmin = () => {
  return (
    <>
    <header>
        <AdminNavBar />
    </header>
    <div className="pag-Admin">
        <AnAdmin />
    </div>
      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};
export default PagAnAdmin;
