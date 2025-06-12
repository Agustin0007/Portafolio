import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Analista de Datos',
      company: 'INTA',
      period: 'Marzo 2025 - Actualmente',
      description: 'En colaboración con la Universidad Tecnológica Nacional (UTN) San Francisco y el Instituto Nacional de Tecnología Agropecuaria (INTA),  desarrollamos un proyecto innovador que utiliza herramientas avanzadas de análisis de datos para optimizar la gestión de una guachera de terneros.',
      details: [
        'Desarrollo de tableros interactivos en Power BI para visualización de datos clave',
        'Análisis de datos relacionados con salud, crecimiento y alimentación de terneros',
        'Integración de múltiples bases de datos para una gestión eficiente',
        'Implementación de métricas clave y KPIs para toma de decisiones',
        'Colaboración estrecha entre equipos de UTN San Francisco e INTA'
      ]
    }
  ];

  const education = [
    {
      title: 'Ing. Sistemas de Información',
      institution: 'UTN San Francisco',
      period: '2023 - Presente',
      description: 'Soy estudiante de la carreara Ing. Sistemas de Información en la facultad UTN San Francisco. En este 2025 comienzo mi tercer año en la carrera con 17 materias aprobadas.',
      details: [
        'Cursando tercer año de la carrera',
        '17 materias aprobadas hasta la fecha',
        'Participación activa en proyectos académicos',
        'Enfoque en análisis de datos'
      ]
    },
    {
      title: 'Técnico Electricista',
      institution: 'IPET N°50 Ing. F. Olmos',
      period: '2016 - 2022',
      description: 'Formación técnica especializada en sistemas eléctricos y automatización.',
      details: [
        'Promedio general: 8.35',
        'Especialización en instalaciones eléctricas',
        'Proyectos prácticos en automatización',
        'Formación técnica completa'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="experience">
      <motion.div 
        className="experience-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>
          Experiencia y Educación
        </motion.h2>

        <div className="timeline-container">
          <motion.div 
            className="timeline-section"
            variants={itemVariants}
          >
            <h3>
              <FaBriefcase />
              Experiencia Laboral
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <span className="period">{exp.period}</span>
                    <p className="description">{exp.description}</p>
                    <ul>
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="timeline-section"
            variants={itemVariants}
          >
            <h3>
              <FaGraduationCap />
              Educación
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-content">
                    <h4>{edu.title}</h4>
                    <h5>{edu.institution}</h5>
                    <span className="period">{edu.period}</span>
                    <p className="description">{edu.description}</p>
                    <ul>
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 