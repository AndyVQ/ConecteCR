import React from 'react'
import "../styles/campAdmin.css";
import { useState, useEffect } from "react";
import { getData } from "../services/fetch";


function RepAdmin() {
    const [reports, setReports] = useState([]);
    const [search, setSearch] = useState("")
  
    useEffect(() => {
      async function fetchReports() {
        const reportsGet = await getData("intReportes/reportes_get/") || [];
        setReports(reportsGet);
      }
      fetchVotes();
    }, []);

  const filtarReporte = report.filter(vote =>
  String(vote.nombre_votacion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(vote.usuario || "").toLowerCase().includes(search.toLowerCase()) ||
  String(vote.comunidad || "").toLowerCase().includes(search.toLowerCase()) ||
  String(vote.descripcion_votacion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(vote.fecha_votacion || "").toLowerCase().includes(search.toLowerCase()) ||
  String(vote.comentario_votacion || "").toLowerCase().includes(search.toLowerCase())
);
  
  return (
     <div className="dashboard-container">
      <div className="main-content">
        <h2>Campañas</h2>
        <input type="text" placeholder="Buscar Votaciones" className="admin-search-1"
        value={search}
        onChange={e => setSearch(e.target.value)}/>
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Comunidad</th>
              <th>Votacion</th>
              <th>Descripción</th>
              <th>Fecha de creación</th>
              <th>Imagen</th>
              <th>Comentario</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {filtarVotacion.map((votacion, index) => (
              <tr key={index}>
                <td>{votacion.usuario}</td>
                <td>{votacion.comunidad}</td>
                <td>{votacion.nombre_votacion}</td>
                <td>{votacion.descripcion_votacion}</td>
                <td>{votacion.fecha_votacion}</td>
                <td>{votacion.imagen_votacion}</td>
                <td>{votacion.comentario_votacion}</td>
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
export default VotAdmin