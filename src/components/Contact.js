import React from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';
import { IoMdMail, IoLogoGithub, IoLogoLinkedin, IoIosDownload  } from "react-icons/io";


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
          {/* <form onSubmit={handleSubmit}>
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
          </form> */}

        <div className="logoContact">


        <a href="mailto:damianbtzor@gmail.com" target='_blank'>
        <button type="submit" className="submit-btn">
        <IoMdMail size={30}/>
        </button>
        </a>


        <a href="https://github.com/DamsFake" target='_blank'>
        <button type="submit" className="submit-btn">
        <IoLogoGithub size={30}/>
        </button>
        </a>


        <a href="https://www.linkedin.com/in/damian-benitez-orozco-81b8a3270/" target='_blank'>
        <button type="submit" className="submit-btn">
        <IoLogoLinkedin size={30}/>
        </button>
        </a>


        </div>

        <div className="descargarCV">
        <a href="https://drive.google.com/file/d/1CBZkBdbSXOYwY7-DcD_1z_O1n_3FzB8Z/view?usp=sharing" target='_blank'>
        <button type="submit" className="submit-btn">
        <IoIosDownload  size={30}/> <br></br>Descargar CV
        </button>
        </a>
        </div>


        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
