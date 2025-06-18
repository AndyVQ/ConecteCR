import React from 'react'
import { Navigate } from "react-router-dom";

function RutaPrivada() {
    
    const isAuthenticated = localStorage.getItem("token") !== null;
    const userGroup = localStorage.getItem("user_group");
    
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    if (userGroup === "usuario") {
        return <Navigate to="/Home" replace />;
    }
    if (userGroup === "administrador") {
        return <Navigate to="/Admin" replace />;
    }

    
  return (
    <div>RutaPrivada</div>
  )
}

export default RutaPrivada