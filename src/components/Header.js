import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importa los íconos de Font Awesome

const Header = () => {
  return (
    <header>
      <div className="left-links">
        <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>

      <div className="right-links">
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </header>
  );
};

export default Header;

