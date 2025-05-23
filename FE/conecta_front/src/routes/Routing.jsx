import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagLogin from "../pages/PagLogin";
import PagRegister from "../pages/PagRegister";
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PagLogin />} />
          <Route path="/Register" element={<PagRegister />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Routing;
