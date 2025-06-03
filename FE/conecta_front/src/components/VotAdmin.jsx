import React from 'react'
import "../styles/campAdmin.css";

import { postData } from "../services/fetch";

 const campaigns = [
    {
      name: 'Limpiar el parque',
      author: 'Juan Vargas',
      id: 110,
      date: '19/05/25',
    },
    {
      name: 'Remodelar Ebais',
      author: 'Mario Quiros',
      id: 34,
      date: '15/07/25',
    },
    {
      name: 'Tapar huecos de calles',
      author: 'Rodolfo Fallas',
      id: 98,
      date: '06/04/25',
    },
  ];


function VotAdmin() {
  return (
     <div className="dashboard-container">
      <div className="main-content">
        <h2>Campañas</h2>
        <table>
          <thead>
            <tr>
              <th>Campañas</th>
              <th>Autor</th>
              <th>ID</th>
              <th>Fecha de creación</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((camp, idx) => (
              <tr key={idx}>
                <td>{camp.name}</td>
                <td>{camp.author}</td>
                <td>{camp.id}</td>
                <td>{camp.date}</td>
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

      <aside className="sidebar">
        <h3>ConecteCR</h3>
        <ul>
          <li>Inicio</li>
          <li className="active">Campañas</li>
          <li>Peticiones</li>
          <li>Votaciones</li>
          <li>Estadísticas</li>
          <li>Fotografias</li>
        </ul>
      </aside>
    </div>
  );
};
export default VotAdmin