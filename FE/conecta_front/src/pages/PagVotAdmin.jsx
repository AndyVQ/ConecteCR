import VotAdmin from "../components/VotAdmin";
import AdminNavBar from "../components/AdminNavBar";  
import FooterHighFashion from "../components/Footer";

const PagVotAdmin = () => {
  return (
    <>
      <header>
        <AdminNavBar />
      </header>
      <div className="pag-Admin">
        <VotAdmin />
      </div>
      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};
export default PagVotAdmin;
