import CardCampanaP from "./CardCampanaP";
import { getData } from "../services/fetch";
import { useState, useEffect } from "react";

const ListaCardCampanaP = () => {
  const [campanas, setCampanas] = useState([]);

  useEffect(() => {
    async function cargarCampanas() {
      const datos = (await getData("intCampanas/campanas/")) || [];
      setCampanas(datos);
    }
    cargarCampanas();
  }, []);

  return (
    <>
      {campanas.map((Camp) => {
        return(
        <CardCampanaP
          titulo={Camp.nombre_campana}
          descripcion={Camp.descripcion_campana}
          direccion={Camp.direccion_campana}
          fecha={Camp.fecha_campana}
          comunidad={Camp.nombre_comunidad}
        />
        )
      })}
    </>
  );
};
export default ListaCardCampanaP;
