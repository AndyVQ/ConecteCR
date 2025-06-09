import React from "react";
import "../styles/campAdmin.css";
import { useState, useEffect } from "react";
import { getData } from "../services/fetch";

const campaigns = [
  {
    name: "Limpiar el parque",
    author: "Juan Vargas",
    id: 110,
    date: "19/05/25",
  },
  {
    name: "Remodelar Ebais",
    author: "Mario Quiros",
    id: 34,
    date: "15/07/25",
  },
  {
    name: "Tapar huecos de calles",
    author: "Rodolfo Fallas",
    id: 98,
    date: "06/04/25",
  },
];

function CampAdmin() {
  const [campaigns, setCampaigns] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCampaigns() {
      const campaignsGet = (await getData("intCampanas/campanas_get/")) || [];
      setCampaigns(campaignsGet);
    }
    fetchCampaigns();
  }, []);

  const filtarCampana = campaigns.filter(
    (campaign) =>
      String(campaign.nombre_campana || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.usuario || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.comunidad || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.descripcion_campana || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.fecha_campana || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.direccion_campana || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      String(campaign.comentario_campana || "")
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h2>Campañas</h2>
        <input
          type="text"
          placeholder="Buscar campañas"
          className="admin-search-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Comunidad</th>
              <th>Campaña</th>
              <th>Descripción</th>
              <th>Fecha de creación</th>
              <th>Dirección</th>
              <th>Imagen</th>
              <th>Comentario</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {filtarCampana.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.usuario}</td>
                <td>{campaign.comunidad}</td>
                <td>{campaign.nombre_campana}</td>
                <td>{campaign.descripcion_campana}</td>
                <td>{campaign.fecha_campana}</td>
                <td>{campaign.direccion_campana}</td>
                <td>{campaign.imagen_campana}</td>
                <td>{campaign.comentario_campana}</td>

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
}
export default CampAdmin;
