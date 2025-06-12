import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import { getData, updateData } from "../services/fetch";

function PetModal({ abrirModal, cerrarModal, peticiones }) {
  const [peticioness, setPetitions] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const [nombrePeticionEditar, setNombrePeticionEditar] = useState("");
  const [descripcionPeticionEditar, setDescripcionPeticionEditar] = useState("");
  const [comunidadPeticionEditar, setComunidadPeticionEditar] = useState("");
  // Estado para tener el estado de la publicación (se inicializa en pendiente)
  useEffect(() => {
    if (peticiones) {
      setComunidadPeticionEditar(
        peticiones.comunidad ? Number(peticiones.comunidad) : ""
      );
      setNombrePeticionEditar(peticiones.nombre_peticion);
      setDescripcionPeticionEditar(peticiones.descripcion_peticion);
      setImagenPeticionEditar(peticiones.imagen_peticion);
      setComentarioPeticionEditar(peticiones.comentario_peticion);
    }

    async function fetchCampaigns() {
      const peticionessGet =
        (await getData("intPeticiones/peticiones_get/")) || [];
      setPetitions(peticionessGet);
    }
    fetchCampaigns();
    async function fetchComunidades() {
      const comunidadesGet =
        (await getData("comunidades/comunidades_get/")) || [];
      setComunidades(comunidadesGet);
    }
    fetchComunidades();
  }, [peticiones]);

  async function editProd(id) {
    let editInfo = {
      comunidad: comunidadPeticionEditar,
      nombre_peticion: nombrePeticionEditar,
      descripcion_peticion: descripcionPeticionEditar,
    };
    console.log("editInfo a enviar:", editInfo);
    await updateData(editInfo, "intPeticiones/peticiones_rud", id);
  }

  return (
    <>
      <Modal show={abrirModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="comunidadSelect">
              <Form.Label>Comunidad</Form.Label>
              <select
                name="Comunidad"
                className="form-control"
                value={comunidadPeticionEditar || ""}
                onChange={(e) =>
                  setComunidadPeticionEditar(Number(e.target.value))
                }
              >
                <option value="" disabled>
                  Seleccione una comunidad
                </option>
                {comunidades.map((comunidad, index) => (
                  <option key={index} value={comunidad.id}>
                    {comunidad.nombre_comunidad}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="peticionInput">
              <Form.Label>Petición</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la petición"
                onChange={(e) => setNombrePeticionEditar(e.target.value)}
                autoFocus
                value={nombrePeticionEditar}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcionInput">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                autoFocus
                value={descripcionPeticionEditar}
                onChange={(e) => setDescripcionPeticionEditar(e.target.value)}
              />
            </Form.Group>
            /* Vamos a tener un select que tenga las tres opciones
              (pendiente,rechazada,aprobada) 
            */
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={async () => {
              await editProd(peticiones.id);
              cerrarModal();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PetModal;
