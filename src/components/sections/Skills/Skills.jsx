import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const technicalSkills = [
    {
      name: 'MySQL',
      icon: 'fa-solid fa-database',
      description: 'Gestión y manipulación de bases de datos relacionales',
      colorClass: 'mysql-card'
    },
    {
      name: 'MongoDB',
      icon: 'fa-solid fa-leaf',
      description: 'Base de datos NoSQL para aplicaciones modernas',
      colorClass: 'mongodb-card'
    },
    {
      name: 'Power BI',
      icon: 'fa-solid fa-chart-pie',
      description: 'Visualización y análisis de datos empresariales',
      colorClass: 'powerbi-card'
    },
    {
      name: 'TablePlus',
      icon: 'fa-solid fa-table',
      description: 'Herramienta GUI para gestión de bases de datos',
      colorClass: 'tableplus-card'
    },
    {
      name: 'Python',
      icon: 'fa-brands fa-python',
      description: 'Análisis de datos y automatización',
      colorClass: 'python-card'
    },
    {
      name: 'Excel',
      icon: 'fa-solid fa-file-excel',
      description: 'Análisis avanzado y visualización de datos',
      colorClass: 'excel-card'
    },
    {
      name: 'C',
      icon: 'fa-solid fa-code',
      description: 'Programación de sistemas y algoritmos',
      colorClass: 'c-card'
    },
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-square-js',
      description: 'Desarrollo web interactivo y dinámico',
      colorClass: 'javascript-card'
    },
    {
      name: 'HTML5',
      icon: 'fa-brands fa-html5',
      description: 'Desarrollo de estructura web moderna',
      colorClass: 'html-card'
    },
    {
      name: 'CSS3',
      icon: 'fa-brands fa-css3-alt',
      description: 'Diseño y estilizado web avanzado',
      colorClass: 'css-card'
    },
    {
      name: 'React',
      icon: 'fa-brands fa-react',
      description: 'Desarrollo de interfaces modernas y dinámicas',
      colorClass: 'react-card'
    },
    {
      name: 'Git',
      icon: 'fa-brands fa-git-alt',
      description: 'Control de versiones y colaboración',
      colorClass: 'git-card'
    }
  ];

  const professionalSkills = [
    {
      name: 'Comunicación',
      icon: 'fa-solid fa-comments',
      colorClass: 'communication-bubble'
    },
    {
      name: 'Responsabilidad',
      icon: 'fa-solid fa-check-double',
      colorClass: 'responsibility-bubble'
    },
    {
      name: 'Resolución de problemas',
      icon: 'fa-solid fa-puzzle-piece',
      colorClass: 'problem-solving-bubble'
    },
    {
      name: 'Organización',
      icon: 'fa-solid fa-list-check',
      colorClass: 'organization-bubble'
    },
    {
      name: 'Adaptabilidad',
      icon: 'fa-solid fa-arrows-spin',
      colorClass: 'adaptability-bubble'
    },
    {
      name: 'Trabajo en equipo',
      icon: 'fa-solid fa-people-group',
      colorClass: 'teamwork-bubble'
    },
    {
      name: 'Toma de decisiones',
      icon: 'fa-solid fa-scale-balanced',
      colorClass: 'decision-bubble'
    },
    {
      name: 'Creatividad',
      icon: 'fa-solid fa-lightbulb',
      colorClass: 'creativity-bubble'
    },
    {
      name: 'Dedicación',
      icon: 'fa-solid fa-award',
      colorClass: 'dedication-bubble'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="contenido-seccion">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Habilidades
        </motion.h2>
        <div className="skills-container">
          {/* Habilidades Técnicas */}
          <div className="technical-skills">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Habilidades Técnicas
            </motion.h3>
            <motion.div 
              className="cards-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {(showAllSkills ? technicalSkills : technicalSkills.slice(0, 4)).map((skill, index) => (
                <motion.div 
                  key={index}
                  className={`skill-card ${skill.colorClass}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <i className={skill.icon}></i>
                      <h4>{skill.name}</h4>
                    </div>
                    <div className="card-back">
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              className="show-more-btn"
              onClick={() => setShowAllSkills(!showAllSkills)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {showAllSkills ? 'Mostrar menos' : 'Desplegar más'}
            </motion.button>
          </div>

          {/* Habilidades Profesionales */}
          <div className="professional-skills">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Habilidades Profesionales
            </motion.h3>
            <motion.div 
              className="skill-bubbles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`skill-bubble ${skill.colorClass}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;