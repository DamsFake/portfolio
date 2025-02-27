import React, { useEffect, useRef } from 'react';
import './Skills.css';
import ScrollAnimation from './ScrollAnimation';

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
      icon: "⚛️",
      title: "React",
      description: "Desarrollo de SPAs con React, Redux y React Hooks."
    },
    {
      icon: "🔄",
      title: "Optimización",
      description: "Mejora de rendimiento, accesibilidad y SEO para tus proyectos."
    }
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
