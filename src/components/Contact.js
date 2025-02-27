import React from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    alert('Formulario enviado (demo)');
  };

  return (
    <section className="contact-section" id="contacto">
      <h2>Contacto</h2>
      <ScrollAnimation>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" placeholder="Tu mensaje aquí..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
