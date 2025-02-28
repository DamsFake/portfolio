import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">DevPortfolio <small>by Dams</small></div>
      <div className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
