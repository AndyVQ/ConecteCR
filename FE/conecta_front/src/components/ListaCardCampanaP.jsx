import CardCampanaP from "./CardCampanaP";
import { getData } from "../services/fetch";
import { useState, useEffect } from "react";

const ListaCardCampanaP =  () => {
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
        <CardCampanaP
          titulo={Camp.titulo}
          descripcion={Camp.descripcion}
          direccion={Camp.direccion}
          fecha={Camp.fecha}
          comunidad={Camp.comunidad}
        />;
      })}
    </>
  );
};
export default ListaCardCampanaP;
