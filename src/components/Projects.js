import React from 'react';
import './Projects.css';
import ScrollAnimation from './ScrollAnimation';
import ParallaxElement from './ParallaxElement';
import eCommerce from './Akihabara-Neon-Nightscape.jpg'
import visDatos from './Akihabara-Neon-Nightscape.jpg'
import appGesTareas from './Akihabara-Neon-Nightscape.jpg'


const Projects = () => {
  const projectsData = [
    {
      img: eCommerce,
      title: "E-commerce Interactivo",
      description: "Tienda online con carrito de compras, filtros de productos y pasarela de pago.",
      tech: ["React", "Redux", "Styled Components"]
    },
    {
      img: eCommerce,
      title: "E-commerce Interactivo",
      description: "Tienda online con carrito de compras, filtros de productos y pasarela de pago.",
      tech: ["React", "Redux", "Styled Components"]
    },
    {
      img: eCommerce,
      title: "E-commerce Interactivo",
      description: "Tienda online con carrito de compras, filtros de productos y pasarela de pago.",
      tech: ["React", "Redux", "Styled Components"]
    },
    {
      img: visDatos,
      title: "Visualizador de Datos",
      description: "Aplicación interactiva para visualizar datos con gráficos personalizables.",
      tech: ["D3.js", "JavaScript", "CSS Grid"]
    },
    {
      img: appGesTareas,
      title: "App de Gestión de Tareas",
      description: "Aplicación para gestionar proyectos y tareas con funcionalidades avanzadas.",
      tech: ["Vue.js", "Vuex", "Firebase"]
    }
  ];

  return (
    <section className="projects-section" id="proyectos">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ScrollAnimation key={index}>
            <ParallaxElement>
              <div className="project-card">
                <div className="project-img">

                <img src={project.img} alt="Img" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
