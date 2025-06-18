import CardCampanaP from "./CardCampanaP";
import { getData } from "../services/fetch";
import { useState, useEffect } from "react";

const ListaCardCampanaP = () => {
  const [campanas, setCampanas] = useState([]);
  const [apoyos, setApoyos] = useState([]);

  useEffect(() => {
    async function cargarCampanas() {
      const datos = (await getData("intCampanas/campanas/")) || [];
      setCampanas(datos);
      console.log(datos);
      datos.forEach((campana) => {
        apoyosCampana(campana.id);
      });
    }

    async function apoyosCampana(id) {
      const datos =
        (await getData("intCampanas/apoyos_campana/", id + "/")) || [];
      const filtradoApoyos = datos.filter(
        (campana_apoyo) => campana_apoyo.id === id
      );
      console.log(filtradoApoyos);
      setApoyos((prev) => ({
        ...prev,
        [id]: filtradoApoyos.length,
      }));
    }

    cargarCampanas();
  }, []);

  return (
    <>
      {campanas.map((Camp) => {
        return (
          <CardCampanaP
            key={Camp.id}
            titulo={Camp.nombre_campana}
            descripcion={Camp.descripcion_campana}
            direccion={Camp.direccion_campana}
            fecha={Camp.fecha_campana}
            comunidad={Camp.nombre_comunidad}
            cantApoyos={apoyos[Camp.id] || 69}
          />
        );
      })}
    </>
  );
};

export default ListaCardCampanaP;
