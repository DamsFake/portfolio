import React, { useEffect } from 'react';
import './Header.css';
import FloatingShapes from './FloatingShapes';

const Header = () => {
  return (
    <header id="inicio">
      <FloatingShapes />
      <div className="hero-text">
        <h1>Desarrollador Front-end Creativo</h1>
        <p>Especializado en crear experiencias web interactivas, responsivas y accesibles utilizando las tecnologías más modernas.</p>
        <a href="#proyectos" className="btn">Ver Proyectos</a>
      </div>
    </header>
  );
};

export default Header;
