import React from 'react'
import "../styles/campAdmin.css";
import { useState, useEffect } from "react";
import { getData } from "../services/fetch";


function PetAdmin() {
    const [petitions, setPetitions] = useState([]);
    const [search, setSearch] = useState("")
  
    useEffect(() => {
      async function fetchPetitions() {
        const petitionsGet = await getData("intPeticiones/peticiones_get/") || [];
        setPetitions(petitionsGet);
      }
      fetchPetitions();
    }, []);

  const filtarPeticion = petitions.filter(petition =>
  String(petition.nombre_peticion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(petition.usuario || "").toLowerCase().includes(search.toLowerCase()) ||
  String(petition.comunidad || "").toLowerCase().includes(search.toLowerCase()) ||
  String(petition.descripcion_peticion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(petition.fecha_peticion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(petition.comentario_peticion || "").toLowerCase().includes(search.toLowerCase())
);
  
  return (
     <div className="dashboard-container">
      <div className="main-content">
        <h2>Campañas</h2>
        <input type="text" placeholder="Buscar Peticiones" className="admin-search-1"
        value={search}
        onChange={e => setSearch(e.target.value)}/>
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Comunidad</th>
              <th>Peticion</th>
              <th>Descripción</th>
              <th>Fecha de creación</th>
              <th>Imagen</th>
              <th>Comentario</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {filtarPeticion.map((peticion, index) => (
              <tr key={index}>
                <td>{peticion.usuario}</td>
                <td>{peticion.comunidad}</td>
                <td>{peticion.nombre_peticion}</td>
                <td>{peticion.descripcion_peticion}</td>
                <td>{peticion.fecha_peticion}</td>
                <td>{peticion.imagen_peticion}</td>
                <td>{peticion.comentario_peticion}</td>
                <td>
                  <button>👁️</button>
                  <button>✏️</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PetAdmin