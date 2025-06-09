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

  const filtarReporte = reports.filter(report =>
  String(report.nombre_reporte || "").toLowerCase().includes(search.toLowerCase()) ||
  String(report.usuario || "").toLowerCase().includes(search.toLowerCase()) ||
  String(report.comunidad || "").toLowerCase().includes(search.toLowerCase()) ||
  String(report.descripcion_reporte || "").toLowerCase().includes(search.toLowerCase()) ||
  String(report.fecha_reporte || "").toLowerCase().includes(search.toLowerCase()) ||
  String(report.comentario_votacion || "").toLowerCase().includes(search.toLowerCase())

);
  
  return (
     <div className="dashboard-container">
      <div className="main-content">
        <h2>Campañas</h2>
        <input type="text" placeholder="Buscar Reportes" className="admin-search-1"
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
            {filtarReporte.map((reporte, index) => (
              <tr key={index}>
                <td>{reporte.usuario}</td>
                <td>{reporte.comunidad}</td>
                <td>{reporte.nombre_reporte}</td>
                <td>{reporte.descripcion_reporte}</td>
                <td>{reporte.fecha_reporte}</td>
                <td>{reporte.imagen_reporte}</td>
                <td>{reporte.comentario_reporte}</td>
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