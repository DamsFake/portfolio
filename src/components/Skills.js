import React, { useEffect, useRef } from 'react';
import './Skills.css';
import ScrollAnimation from './ScrollAnimation';
import { FaPython, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


const Skills = () => {
  const skillsData = [
    {
      icon: "📱",
      title: "Diseño Responsivo",
      description: "Creación de interfaces que funcionan perfectamente en todos los dispositivos."
    },
    {
      icon: "🎨",
      title: "CSS Avanzado",
      description: "Animaciones, Grid, Flexbox y las últimas características de CSS."
    },
    {
      icon: "🔄",
      title: "Optimización",
      description: "Mejora de rendimiento, accesibilidad y SEO para tus proyectos."
    },
    {
      icon: <FaPython />,
      title: "Python",
      description: "Creación de aplicaciones y scripts para automatización de procesos."
    },
    {
      icon: <GrMysql />,
      title: "MySQL",
      description: "Desarrollo y aplicación de bases de datos relacionales."
    },
    {
      icon: <FaReact />,
      title: "React",
      description: "Desarrollo de SPAs con React, Redux y React Hooks."
    },
    {
      icon: <RiTailwindCssFill />      ,
      title: "TailWindCSS",
      description: "Diseños personalizados de manera rápida y eficiente."
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
      description: "Desarrollo de código más legible, evitar errores y mejorar la productividad."
    },

  ];

  return (
    <section className="skills-section" id="habilidades">
      <h2>Mis Habilidades</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <ScrollAnimation key={index}>
            <div className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
