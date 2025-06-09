const CardCampanaP = ({ titulo, descripcion, comunidad, fecha, direccion }) => {
  return (
    <div className="card-campana">
      <h3 className="titulo-campana">{titulo}</h3>
      <p className="descripcion-campana">{descripcion}</p>
      <p className="direccion-campana">Dirección: {direccion} </p>
      <p className="fecha-campana">Fecha: {fecha}</p>
      <p className="comunidad-campana">Comunidad: {comunidad}</p>
    </div>
  );
};

export default CardCampanaP;
