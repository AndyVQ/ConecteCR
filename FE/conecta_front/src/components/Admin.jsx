import React from 'react'
import "../styles/AdminHome.css"
import { postData, getData } from "../services/fetch";
import { useState, useEffect } from "react";


function Admin() {

const [campaigns, setCampaigns] = useState([]);


  useEffect(() => { 

    async function fetchCampaings() {
      const campaingsGet = await getData("intCampanas/ campanas_rud/") || [];
      setCampaigns(campaingsGet); 
    }
    fetchCampaings();

  }, []); 

  return (
 <div className="admin-home">
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Panel de control</h3>
          <img src="leaf.png" alt="icono" />
        </div>
        <div className="admin-card-body">
          <p>Campañas Activas <span className="admin-value">2</span></p>
          <p>Peticiones Realizadas <span className="admin-value">76</span></p>
          <p>Propuestas Enviadas <span className="admin-value">30</span></p>
          <hr />
          <h4>Campañas</h4>
          <div className="admin-campaign-status">
            <p>Iluminación</p>
            <div className="admin-bar admin-finalized"><span>Finalizada</span></div>
          </div>
          <div className="admin-campaign-status">
            <p>Mejoras al parque</p>
            <div className="admin-bar admin-active"><span>Activa</span></div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Reportes vecinales</h3>
          <img src="leaf.png" alt="icono" />
        </div>
        <div className="admin-card-body">
          <input type="text" placeholder="Buscar reportes" className="admin-search" />
          <div className="admin-report">
            <p>Postes de luz defectuosos</p><span>4 días</span>
          </div>
          <div className="admin-report">
            <p>Basura acumulada</p><span>6 días</span>
          </div>
          <div className="admin-report">
            <p>Calles en mal estado</p><span>2 días</span>
          </div>
          <div className="admin-report">
            <p>Gatos abandonados</p><span>4 días</span>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Estadísticas</h3>
          <img src="leaf.png" alt="icono" />
        </div>
        <div className="admin-card-body">
          <div className="admin-chart-placeholder">[Gráfico aquí]</div>
          <h4>Fotos compartidas</h4>
          <div className="admin-photo-carousel">
            <button>{'<'}</button>
            <img src="photo.png" alt="Foto" />
            <button>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin