import React, { useEffect } from 'react';
import './Header.css';
import FloatingShapes from './FloatingShapes';
import { IoIosDownload  } from "react-icons/io";

const Header = () => {
  return (
    <header id="inicio">
      <FloatingShapes />
      <div className="hero-text">
        <h1>Desarrollador Front-end</h1>
        <h2>Damián Benítez Orozco</h2>
        <h3>Ing. en Sistemas Computacionales</h3>
        <p>Especializado en crear experiencias web interactivas, responsivas y accesibles utilizando las tecnologías más modernas.</p>
        <div className="buttonContainer">
        <a href="#proyectos" className="btn">Ver Proyectos</a>
        <a href="https://drive.google.com/file/d/1CBZkBdbSXOYwY7-DcD_1z_O1n_3FzB8Z/view?usp=sharing" className="btn"> <IoIosDownload  size={20}/> Descargar CV</a>
        </div>

        </div>
    </header>
  );
};

export default Header;
