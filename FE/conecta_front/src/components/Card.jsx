  import React from 'react';
  import "../styles/Card.css"

  const cardsData = [
    {
      title: 'Foros de Propuestas',
      description: 'Comparte tus ideas con la comunidad y recibe retroalimentación en tiempo real.',
      buttonText: 'Ir al Foro'
    },
    {
      title: 'Votaciones Ciudadanas',
      description: 'Participa en encuestas locales para apoyar proyectos de tu interés.',
      buttonText: 'Votar Ahora'
    },
    {
      title: 'Directorio de Comercios',
      description: 'Descubre y apoya negocios locales cerca de ti.',
      buttonText: 'Ver Comercios'
    }
  ];


  const CardItem = ({ title, description, buttonText, onButtonClick }) => (
    <div className="card">
      <h3 className="card-header">{title}</h3>
      <p className="card-body">{description}</p>
      <button className="card-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );


  const Cards = () => (
    <div className="cards-container">
      {cardsData.map((card, idx) => (
        <CardItem
          key={idx}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          onButtonClick={() => alert(`Has clickeado: ${card.title}`)}
        />
      ))}
    </div>
  );

  export default Cards;
