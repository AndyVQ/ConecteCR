import React from "react";
import Navbar from "../components/NavBar";
import CarouselComp from "../components/CarouselComp";
import Cards from "../components/Card";
import FooterHighFashion from "../components/Footer";
import CardNoticia from "../components/CardNoticia";

const PagHome = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <article>
        <CarouselComp />
      </article>
      <div>
        <CardNoticia
          title="Noticia 3"
          description="Aquí va la descripción de la noticia 3. Breve resumen."
          imageUrl="https://via.placeholder.com/350x200"
          link="https://www.ejemplo.com/noticia3"
        />
      </div>

      <div className="pag-Home">
        <Cards />
      </div>

      <footer>
        <FooterHighFashion />
      </footer>
    </>
  );
};

export default PagHome;
