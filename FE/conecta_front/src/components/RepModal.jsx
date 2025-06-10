import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { getData, updateData } from "../services/fetch";

function RepModal({ abrirModal, cerrarModal, reportes }) {   

    const [reports, setReports] = useState([]);
    const [comunidades, setComunidades] = useState([]);
    const [nombreReporteEditar, setNombreReporteEditar] = useState("");
    const [descripcionReporteEditar, setDescripcionReporteEditar] = useState("");
    const [direccionReporteEditar, setDireccionReporteEditar] = useState("");
    const [imagenReporteEditar, setImagenReporteEditar] = useState("");
    const [comentarioReporteEditar, setComentarioReporteEditar] = useState("");
    const [comunidadReporteEditar, setComunidadReporteEditar] = useState("");

    useEffect(() => { 
      if(reportes){
        setComunidadReporteEditar(
          reportes.comunidad ? Number(reportes.comunidad) : ""
        );
        setNombreReporteEditar(reportes.nombre_Votacion);
        setDescripcionReporteEditar(reportes.descripcion_Votacion);
        setDireccionReporteEditar(reportes.direccion_campana);
        setImagenReporteEditar(reportes.imagen_Votacion);
        setComentarioReporteEditar(reportes.comentario_Votacion);
      } 

      async function fetchCampaigns() {
        const reportsGet = await getData("intReportes/reportes_get/") || [];
        setReports(reportsGet);
      }
      fetchCampaigns();
      async function fetchComunidades() {
        const comunidadesGet = await getData("comunidades/comunidades_get/") || [];
        setComunidades(comunidadesGet);
      }
      fetchComunidades(); 
    }, [reportes]);

    async function editProd(id) {  
      let editInfo = { 
        "comunidad": comunidadReporteEditar,
        "nombre_reporte": nombreReporteEditar,
        "descripcion_reporte": descripcionReporteEditar,
        "direccion_reporte": direccionReporteEditar,
        "imagen_reporte": imagenReporteEditar, 
        "comentario_reporte": comentarioReporteEditar
      };
      await updateData(editInfo,"intReportes/reportes_rud", id);
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
                  value={comunidadReporteEditar || ""}
                  onChange={e => setComunidadReporteEditar(Number(e.target.value))}
                >
                  <option value="" disabled>Seleccione una comunidad</option>
                  {comunidades.map((comunidad, index) => (
                    <option key={index} value={comunidad.id}>
                      {comunidad.nombre_comunidad}
                    </option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="reporteInput">
                <Form.Label>Reporte</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del Reporte"
                  onChange={(e) => setNombreReporteEditar(e.target.value)}
                  autoFocus
                  value={nombreReporteEditar || ""}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="descripcionInput">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción"
                  autoFocus
                  value={descripcionReporteEditar || ""}
                  onChange={(e) => setDescripcionReporteEditar(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="imagenInput">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Imagen"
                  autoFocus
                  value={imagenReporteEditar || ""}
                  onChange={(e) => setImagenReporteEditar(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Comentario"
                  autoFocus
                  value={comentarioReporteEditar || ""}
                  onChange={(e) => setComentarioReporteEditar(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Close
            </Button>
            <Button variant="primary" 
              onClick={async () => {
                await editProd(reportes.id);
                cerrarModal();
              }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default RepModal;


