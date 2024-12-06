import React, { useEffect, useRef } from 'react';
import './index.css';

const Body = () => {
  const bodyRef = useRef(null);

  useEffect(() => {
    // Agregar la hoja de estilos de Dialogflow
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    // Agregar el script de Dialogflow
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    // Configurar el Intersection Observer para animar la entrada
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bodyRef.current.classList.add('appear');
        } else {
          bodyRef.current.classList.remove('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (bodyRef.current) {
      observer.observe(bodyRef.current);
    }

    // Limpieza al desmontar el componente
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      if (bodyRef.current) {
        observer.unobserve(bodyRef.current);
      }
    };
  }, []);

  return (
    <div className='body1' ref={bodyRef}>
      <div className='block'>
        <i className="fas fa-users icon"></i>
        <h5>Más clientes</h5>
      </div>
      <div className='block'>
        <i className="fas fa-chart-line icon"></i>
        <h5>Más conversiones</h5>
      </div>
      <div className='block'>
        <i className="fas fa-shopping-cart icon"></i>
        <h5>Más ventas</h5>
      </div>
      
      {/* Contenedor para el chatbot */}
      <div className='chat-container'>
        <df-messenger
          intent="WELCOME"
          chat-title="Smartialab"
          agent-id="85456826-57d4-4215-a18e-ac2abaab3e87"
          language-code="en"
        ></df-messenger>
      </div>
    </div>
  );
};

export default Body;
