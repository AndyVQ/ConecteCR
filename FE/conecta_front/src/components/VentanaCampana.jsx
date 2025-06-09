import { useEffect, useState } from "react";
import "../styles/ventanaCampana.css";
import { getData,postData } from "../services/fetch";

function VentanaCampana() {
  const [comunidades, setComunidades] = useState([]);
  const [comunidad, setComunidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    async function cargarComunidades() {
      const datos = (await getData("comunidades/comunidades_create/")) || [];
      setComunidades(datos);
    }
    cargarComunidades();
  }, []);

  const enviarCampana = async () => {
    const nuevaCampana = {
      comunidad,
      nombre_campana: nombre,
      descripcion_campana: descripcion,
      direccion_campana: direccion,
      fecha_campana: fecha,
    };
    await postData("intCampanas/campanas/", nuevaCampana);
  };

  return (
    <div className="fondo-campana">
      <div className="ventana-campana">
        <h2 className="titulo-campana">Agregar campaña</h2>
        <select
          className="input-comunidad"
          value={comunidad}
          onChange={(e) => setComunidad(e.target.value)}
        >
          <option value="">Selecciona comunidad</option>
          {comunidades.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre_comunidad}
            </option>
          ))}
        </select>
        <input
          className="input-nombre"
          type="text"
          placeholder="Nombre de Campaña"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          className="input-descripcion"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <input
          className="input-direccion"
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          className="input-fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button className="boton-guardar" onClick={enviarCampana}>
          Guardar campaña
        </button>
      </div>
    </div>
  );
}

export default VentanaCampana;
