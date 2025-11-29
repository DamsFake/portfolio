import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';
import { IoMdMail, IoLogoGithub, IoLogoLinkedin, IoIosDownload  } from "react-icons/io";
import cv from "../docs/cv.pdf";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (demo)');
  };

  const openModal = (e) => {
    e && e.preventDefault();
    setIsClosing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    // activa animación de cierre; el efecto desmontará el modal al terminar
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

  // esperar animationend para desmontar el modal (fallback con timeout)
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

  return (
    <section className="contact-section" id="contacto">
      <h2>Contacto</h2>
      <ScrollAnimation>
        <div className="contact-form">

          <div className="logoContact">
            <a
              className="submit-btn"
              href="mailto:damianbtzor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar correo"
            >
              <IoMdMail size={30}/>
            </a>

            <a
              className="submit-btn"
              href="https://github.com/DamsFake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub size={30}/>
            </a>

            <a
              className="submit-btn"
              href="https://www.linkedin.com/in/damian-benitez-orozco-81b8a3270/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin size={30}/>
            </a>
          </div>

          <div className="descargarCV">
            <button
              className="submit-btn"
              onClick={openModal}
              aria-haspopup="dialog"
              aria-label="Previsualizar CV"
            >
              <IoIosDownload size={30}/> <br/>Ver CV
            </button>
          </div>

        </div>
      </ScrollAnimation>

      {showModal && (
        // añadida ref y clase 'closing' cuando isClosing=true
        <div
          ref={modalRef}
          className={`cv-modal-backdrop ${isClosing ? 'closing' : 'opening'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Previsualización del CV"
        >
          <div className="cv-modal">
            <button className="cv-close" onClick={closeModal} aria-label="Cerrar previsualización">×</button>
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
    </section>
  );
};

export default Contact;