import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importa los iconos de react-icons
import './index.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add('visible');
        } else {
          footerRef.current.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className='footer' ref={footerRef}>
      <div className='footer-section'>
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="#">Quienes somos</a></li>
          <li><a href="#nuestros-productos">Nuestros productos</a></li>
          <li><a href='#'>Invertir con nosotros</a></li>
          <li><a href='#'>Contactenos</a></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h4>Síguenos</h4>
        <ul className='social-links'>
          <li>
            <a href='#'>
              <FaInstagram className='social-icon' /> Instagram
            </a>
          </li>
          <li>
            <a href='#'>
              <FaWhatsapp className='social-icon' /> WhatsApp
            </a>
          </li>
          <li>
            <a href='#'>
              <FaLinkedin className='social-icon' /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-copyright'>
        <p>&copy; 2024 Smartialab. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
