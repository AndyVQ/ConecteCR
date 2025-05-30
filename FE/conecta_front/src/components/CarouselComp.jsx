import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CompImagen from "../components/CompImagen";

function CarouselComp() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <CompImagen src={""} />
          <Carousel.Caption>
            <h3>Bienvenido a ConectaCr</h3>
            <p>Por una comunidad Conectada</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CompImagen src={""} />
          <Carousel.Caption>
            <h3>Bienvenido a ConectaCr</h3>
            <p>Por una comunidad Conectada</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CompImagen src={""} />
          <Carousel.Caption>
            <h3>Bienvenido a ConectaCr</h3>
            <p>Por una comunidad Conectada</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
