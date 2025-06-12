import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { getData, updateData } from "../services/fetch";

function RepModal({ abrirModal, cerrarModal, noticias }) {   

    const [news, setNews] = useState([]);
    const [descripcionNoticiaEditar, setDescripcionNoticiaEditar] = useState("");
    const [imagenNoticiaEditar, setImagenNoticiaEditar] = useState("");
    const [titularNoticiaEditar, setTitularNoticiaEditar] = useState("");
    useEffect(() => { 
      if(noticias){
        setDescripcionNoticiaEditar(noticias.descripcion_noticia);
        setImagenNoticiaEditar(noticias.imagen_noticia);
        setTitularNoticiaEditar(noticias.titular_notica);
      } 

      async function fetchNews() {
        const newsGet = await getData("intNoticias/noticia_create/") || [];
        setNews(newsGet);
      }
      fetchNews();
    }, [noticias]);

    async function editProd(id) {  
      let editInfo = { 
        "descripcion_noticia": descripcionNoticiaEditar,
        "imagen_noticia": imagenNoticiaEditar,
        "titular_notica": titularNoticiaEditar,
      };
      await updateData(editInfo,"intNoticias/noticias_rud", id);
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

