import "../styles/CardCampanaP.css";

const CardCampanaP = ({
  titulo,
  descripcion,
  comunidad,
  fecha,
  direccion,
  cantApoyos,
}) => {
  return (
    <div className="card-campana">
      <input value={cantApoyos} className="cont-apoyos" />
      <h3 className="titulo-campana">{titulo}</h3>
      <p className="descripcion-campana">{descripcion}</p>
      <p className="direccion-campana">Dirección: {direccion} </p>
      <p className="fecha-campana">Fecha: {fecha}</p>
      <p className="comunidad-campana">Comunidad: {comunidad}</p>
      <button className="mx-auto d-flex mt-3 btn btn-success">Apoyar</button>
    </div>
  );
};

export default CardCampanaP;
