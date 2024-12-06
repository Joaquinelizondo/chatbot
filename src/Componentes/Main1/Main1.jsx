import React, { useState, useEffect } from 'react';
import './index.css';

const Main1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: 'Inteligencia Artificial al servicio de tu negocio',
      content: 'Descripción del servicio 1 en IA y Retail.'
    },
    {
      title: 'Las mejores soluciones para hacer que tu empresa sea MAS rentable',
      content: 'Descripción del servicio 2 en IA y Retail.'
    },
    {
      title: 'Soluciones a medida para brindarle el mejor servicio a tus clientes',
      content: 'Descripción del servicio 3 en IA y Retail.'
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Efecto para desplazamiento automático
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [currentIndex]); // Ejecuta el intervalo cada vez que cambia currentIndex

  return (
    <div className="Main1-container">
      <div className="Main1" id="nuestros-productos">
        <span className="arrow left" onClick={goToPrevious}>&lt;</span>
        <div className="carousel">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="carousel-item">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="arrow right" onClick={goToNext}>&gt;</span>
      </div>

      {/* Chatbot debajo del carrusel */}
      <df-messenger
        project-id="smartialab01"
        agent-id="e5639daf-3d63-4313-8719-6c6006062202"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="SmartIA-02"></df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
};

export default Main1;
