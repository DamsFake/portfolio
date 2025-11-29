import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import FloatingShapes from './FloatingShapes';
import { IoIosDownload } from "react-icons/io";

const cv = process.env.PUBLIC_URL + '/cv.pdf';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const openModal = (e) => {
    e && e.preventDefault();
    setIsClosing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === 'Escape' && showModal && !isClosing) closeModal();
    };
    if (showModal) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showModal, isClosing]);

  useEffect(() => {
    if (!isClosing) return;
    const el = modalRef.current;
    if (!el) {
      setShowModal(false);
      setIsClosing(false);
      return;
    }
    const handleEnd = () => {
      setShowModal(false);
      setIsClosing(false);
    };
    el.addEventListener('animationend', handleEnd);
    const fallback = setTimeout(handleEnd, 420);
    return () => {
      el.removeEventListener('animationend', handleEnd);
      clearTimeout(fallback);
    };
  }, [isClosing]);

  const onKeyOpen = (ev) => {
    // support Enter and Space for anchors acting as buttons
    if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
      ev.preventDefault();
      openModal(ev);
    }
  };

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

          {/* Usar <a> para mantener coherencia; href="#" y role="button" para accesibilidad */}
          <a
            href="#"
            className="btn primary"
            onClick={openModal}
            onKeyDown={onKeyOpen}
            role="button"
            aria-haspopup="dialog"
            aria-label="Previsualizar CV"
          >
            <IoIosDownload size={20} /> Descargar CV
          </a>
        </div>
      </div>

      {showModal && (
        <div
          ref={modalRef}
          className={`cv-modal-backdrop ${isClosing ? 'closing' : 'opening'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Previsualización del CV"
        >
          <div className="cv-modal">
            <button type="button" className="cv-close" onClick={closeModal} aria-label="Cerrar previsualización">×</button>
            <div className="cv-content">
              <iframe src={cv} title="CV Damian Benitez Orozco" frameBorder="0" />
            </div>
            <div className="cv-actions">
              <a className="button" href={cv} download="CV-Damian-Benitez-Orozco.pdf" rel="noopener noreferrer">Descargar</a>
              <button className="button" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;