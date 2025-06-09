import PagPetAdmin from "../pages/PagPetAdmin";
import PagVotAdmin from "../pages/PagVotAdmin";
import PagRepAdmin from "../pages/PagRepAdmin";
import PagNotAdmin from "../pages/PagNotAdmin";
import PagCrearCampana from "../pages/PagCrearCampana";
import PagCampa from "../pages/PagCampa";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PagAdminCamp from "../pages/PagCampAdmin";
import PagLogin from "../pages/PagLogin";
import PagRegister from "../pages/PagRegister";
import PagHome from "../pages/PagHome";
import pagad
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
          <Route path="/CrearCampana" element={<PagCrearCampana />} />
          <Route path="/Campañas" element={<PagCampa />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Routing;
