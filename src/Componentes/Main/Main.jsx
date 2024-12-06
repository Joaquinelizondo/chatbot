import React, { useState } from 'react';
import './index.css';
import "@fontsource/lato";

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='main' id="quienes-somos">
      <h2 className='main1'>La mejor Inteligencia Artificial aplicada a tu negocio Retail</h2>
      <div className="button-container">
        <button className='contact-button' onClick={handleButtonClick}>Empieza con nosotros</button>
        <button className='contact-button' onClick={handleButtonClick}>¿Hablamos?</button>
      </div>
      <div>
      <h3 className='subtitle1'>
        Creemos en el poder de la inteligencia artificial para cambiar el mundo del comercio electrónico. Desarrollamos agentes inteligentes que van más allá de las simples recomendaciones: nuestros sistemas comprenden el comportamiento, las necesidades y los intereses de cada cliente para crear una experiencia única y personalizada en cada visita.
      </h3>
      <h3 className='subtitle2'>Con un equipo compuesto por expertos en IA, ciencia de datos y experiencia de usuario, nuestra misión es conectar a las personas con los productos que desean de una manera más fluida, intuitiva y eficiente. Creemos que cada interacción debe ser significativa y aportar valor, por eso trabajamos día a día para redefinir cómo las marcas se comunican con sus clientes.
      </h3>
      </div>

      {showForm && (
        <div className='contact-form'>
          <button className='close-button' onClick={handleCloseForm}>✕</button>
          <h3>Contáctanos</h3>
          <form>
            <div className='form-group'>
              <label>Nombre</label>
              <input type='text' placeholder='Tu nombre' />
            </div>
            <div className='form-group'>
              <label>Apellido</label>
              <input type='text' placeholder='Tu apellido' />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input type='email' placeholder='Tu correo electrónico' />
            </div>
            <div className='form-group'>
              <label>Mensaje</label>
              <textarea placeholder='Tu mensaje'></textarea>
            </div>
            <button type='submit' className='submit-button'>Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Main;
