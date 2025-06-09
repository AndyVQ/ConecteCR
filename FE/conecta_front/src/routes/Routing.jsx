import PagPetAdmin from "../pages/PagPetAdmin";
import PagVotAdmin from "../pages/PagVotAdmin";
import PagRepAdmin from "../pages/PagRepAdmin";
import PagNotAdmin from "../pages/PagNotAdmin";
<<<<<<< HEAD
import PagCampModal from "../pages/PagCampModal";
import PagPetModal from "../pages/PagPetModal";

=======
import PagCrearCampana from "../pages/PagCrearCampana";
import PagCampa from "../pages/PagCampa";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PagAdminCamp from "../pages/PagCampAdmin";
import PagLogin from "../pages/PagLogin";
import PagRegister from "../pages/PagRegister";
import PagHome from "../pages/PagHome";
import pagad
>>>>>>> 33a814ad3aa5b6cd4d96fedefa98660793235088
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PagLogin />} />
          <Route path="/Register" element={<PagRegister />} />
          <Route path="/Home" element={<PagHome />} />
          <Route path="/Admin" element={<PagAdmin />} />
          <Route path="/CampAdmin" element={<PagAdminCamp />} />
          <Route path="/PetAdmin" element={<PagPetAdmin />} />
          <Route path="/VotAdmin" element={<PagVotAdmin />} />
          <Route path="/RepAdmin" element={<PagRepAdmin />} />
          <Route path="/NotAdmin" element={<PagNotAdmin />} />
<<<<<<< HEAD
          <Route path="/CampModal" element={<PagCampModal />} />
          <Route path="/PetModal" element={<PagPetModal/>} />
=======
          <Route path="/CrearCampana" element={<PagCrearCampana />} />
          <Route path="/Campañas" element={<PagCampa />} />
>>>>>>> 33a814ad3aa5b6cd4d96fedefa98660793235088
        </Routes>
      </Router>
    </div>
  );
}
export default Routing;
