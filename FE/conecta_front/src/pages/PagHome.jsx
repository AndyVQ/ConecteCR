import React from 'react';
import Navbar from "../components/NavBar";
import CarouselComp from "../components/CarouselComp";
import Cards from "../components/Card"; 
import FooterHighFashion from "../components/Footer"; 


const PagHome = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      
      <article>
        <CarouselComp />
      </article>
      
      <div className="pag-Home">
        <Cards />
      </div>
      <footer>
        <FooterHighFashion/>   
      </footer>
    
    </>
    
  );
};

export default PagHome;


