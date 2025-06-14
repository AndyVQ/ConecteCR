import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagLogin from "../pages/PagLogin";
import PagRegister from "../pages/PagRegister";
import PagHome from "../pages/PagHome";
import PagAdmin from "../pages/PagAdmin";
import PagCampAdmin from "../pages/PagCampAdmin";
import PagPetAdmin from "../pages/PagPetAdmin";
import PagVotAdmin from "../pages/PagVotAdmin";
import PagRepAdmin from "../pages/PagRepAdmin";
import PagNotAdmin from "../pages/PagNotAdmin";
import PagCampa from "../pages/PagCampa";
import PagCampModal from "../pages/PagCampModal";
import PagPetModal from "../pages/PagPetModal";
import PagVotModal from "../pages/PagVotModal";
import PagRepModal from "../pages/PagRepModal";
import PagPeticiones from "../pages/PagPeticiones";
import PagReportes from "../pages/PagReportes";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PagLogin />} />
          <Route path="/Register" element={<PagRegister />} />
          <Route path="/Home" element={<PagHome />} />
          <Route path="/Admin" element={<PagAdmin />} />
          <Route path="/CampAdmin" element={<PagCampAdmin />} />
          <Route path="/PetAdmin" element={<PagPetAdmin />} />
          <Route path="/VotAdmin" element={<PagVotAdmin />} />
          <Route path="/RepAdmin" element={<PagRepAdmin />} />
          <Route path="/NotAdmin" element={<PagNotAdmin />} />
          <Route path="/Campañas" element={<PagCampa />} />
          <Route path="/CampModal" element={<PagCampModal />} />
          <Route path="/PetModal" element={<PagPetModal/>} />
          <Route path="/VotModal" element={<PagVotModal />} />
          <Route path="/RepModal" element={<PagRepModal />} />
          <Route path="/PagPeti" element={<PagPeticiones />} />
           <Route path="/PagReport" element={<PagReportes />} />

        </Routes>
      </Router>
    </div>
  );
}
export default Routing;