import React from "react";
import Navbar from "../components/NavBar";
import NotAdmin from "../components/NotAdmin";

const PagNotAdmin = () => {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <div className="pag-Admin">
        <NotAdmin />
    </div>
    </>
  );
};
export default PagNotAdmin;
