import React from 'react';
import './Projects.css';
import ScrollAnimation from './ScrollAnimation';
import ParallaxElement from './ParallaxElement';
import bd from '../img/bd.jpeg'
import crud from '../img/crud.jpeg'
import sisat from '../img/sisat.jpeg'
import sisat2 from '../img/sisat2.jpeg'
import svrcent from '../img/svrcent.jpeg'


const Projects = () => {
  const projectsData = [
    {
      img: crud,
      title: "CRUD in Python with MySQL",
      description: "CRUD en Python utilizando MySQL como sistema gestor de base de datos.",
      tech: ["MySQL", "Python"]
    },
    {
      img: bd,
      title: "Creation of database for cable shop",
      description: "Creación de una base de datos para una tienda de cables, utilizando una vez más MySQL.",
      tech: ["MySQL", "SQL Workbench"]
    },
    {
      img: sisat,
      title: "Maintenance of the SICLE website",
      description: "Mantenimiento de página web SICLE (Sistema Integral de la Coordinación de Lenguas Extranjeras)",
      tech: ["PHP", "HTML", "JavaScript"]
    },
    {
      img: sisat2,
      title: "Redesign of the SICLE website",
      description: "Rediseño de página web SICLE (Sistema Integral de la Coordinación de Lenguas Extranjeras)",
      tech: ["CSS", "BootStrap 5", "CSS Grid"]
    },
    {
      img: svrcent,
      title: "Made a functional server with CentOs",
      description: "Creación de un servidor funcional utilizando el S.O. de CentOs con servicios como DHCP, DNS, FTP, HTTP, SMTP y demás servicios.",
      tech: ["CentOS", "HTTP", "FTP", "Samba", "SMTP", "DNS"]
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
