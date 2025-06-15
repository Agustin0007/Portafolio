import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBriefcase, FaCode } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const workProjects = [
    {
      id: 1,
      type: 'work',
      title: 'Tablero de Control de guachera para terneros',
      description: '',
      longDescription: `
      Responsabilidades:
      - Colaboración con UTN San Francisco y INTA
      - Desarrollo de un tablero interactivo enPower BI
          -Diseñar un tablero interactivoutilizando Power BI.
      Logros Clave:
      - Optimización de la gestión de la guachera
          -Mejorar la eficiencia en la gestión dela guachera.
          -Facilitar la toma de decisionesinformadas mediante el análisis de datos.
          -Innovación tecnológica en el sector agropecuario.
          -Implementar tecnologías avanzadaspara la gestión de terneros.`,
      image: '/assets/images/profile/proyecto-4.png', // Ruta corregida
      technologies: ['Power BI', 'DAX', 'Excel'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNWZmZDZjMTAtYjJmZS00NjgwLTk1ZWItNWI2ZTQ4MjMzOTI5IiwidCI6IjUzMDczOGU5LTU1MzAtNDFkNi1iODU0LWYyYzkwZTBkZDA4MSJ9',
    },  
  ];

  const practiceProjects = [
    {
      id: 3,
      type: 'practice',
      title: 'Dashboard de Recursos Humanos',
      description: 'Informe de Análisis en Power BI',
      longDescription: `

      Características principales:
      1. Introducción: Este informe presenta un análisis en Power BI sobre la distribución de empleados en una organización, diferenciando entre activos e inactivos. Se utilizan datos de un archivo Excel y diversas visualizaciones para facilitar la interpretación de la información.
      2. Datos Utilizados: El archivo Excel contiene información clave de los empleados, incluyendo: ID Empleado, Función, Departamento y Región, Educación, Género, Jornada y Modalidad de Trabajo, Fecha de Contratación, Estatus y Fecha de Baja. Estos datos serán procesados en Power BI para extraer insights relevantes.
      3. Cálculos Realizados: Se calcularán tres métricas principales: Total de empleados, Empleados activos, Empleados inactivos.
      4. Metodología: El análisis se realiza mediante medidas implícitas y explícitas en DAX, combinando paneles de filtros para segmentación.
      5. Visualizaciones Utilizadas:
      - Tarjetas para resaltar indicadores clave.
      - Segmentadores de datos para filtros dinámicos.
      - Gráficos circulares y de anillo para visualizar proporciones.
      - Gráfico de rectángulos para jerarquías organizacionales.
      - Mapas para distribución geográfica del personal.
      - Paneles intuitivos y responsivos`,
      image: '/assets/images/profile/proyecto-1.png', // Ruta corregida
      technologies: ['Power BI', 'Excel'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNmY0Y2NiZDUtM2E2Zi00NjRiLWJiNjYtOGI4NTk3OGFlNmY3IiwidCI6IjUzMDczOGU5LTU1MzAtNDFkNi1iODU0LWYyYzkwZTBkZDA4MSJ9',
    },
    {
      id: 4,
      type: 'practice',
      title: 'Análisis de Ventas Retail',
      description: 'Dashboard interactivo de métricas comerciales',
      longDescription: `

      Informe de Análisis en Power BI
      -Descripción del Proyecto: Este proyecto consiste en un panel interactivo desarrollado en Power BI, diseñado para analizar y visualizar datos de manera eficiente. Se han implementado distintos gráficos y métricas claves para facilitar la toma de decisiones basada en datos.
      -Herramientas y Tecnologías Utilizadas:Para su desarrollo se ha utilizado Power BI como principal herramienta de visualización, junto con DAX (Data Analysis Expressions) para cálculos avanzados y Power Query para la transformación de datos `,
      image: '/assets/images/profile/proyecto-2.png', // Ruta corregida
      technologies: ['Power BI', 'MySQL'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiM2ZiMzFhNjktYjkxMS00OWZlLTg0ZDQtODBkZGM3OTNlMDMwIiwidCI6IjUzMDczOGU5LTU1MzAtNDFkNi1iODU0LWYyYzkwZTBkZDA4MSJ9', 
    },
    {
      id: 5,
      type: 'practice',
      title: 'KPIs de Rendimiento Comercial',
      description: 'Seguimiento de indicadores y tendencias de ventas',
      longDescription: `

      Análisis de Ventas y Rendimiento Comercial
      1. Descripción General: Este dashboard presenta un análisis detallado de ventas y rendimiento comercial, utilizando datos históricos para identificar tendencias y patrones en el comportamiento de ventas.
      2. Características Principales:
      - Análisis temporal de ventas con comparativas año tras año
      - Segmentación por categorías de productos y regiones
      - Indicadores clave de rendimiento (KPIs) de ventas
      - Análisis de rentabilidad por producto y canal de venta
      - Visualización de tendencias estacionales
      -Herramientas y Tecnologías Utilizadas:Para su desarrollo se ha utilizado Power BI como principal herramienta de visualización, junto con DAX (Data Analysis Expressions) para cálculos avanzados y Power Query para la transformación de datos 
      3. Tecnologías Aplicadas:
      - Power BI para visualización de datos
      - DAX para cálculos avanzados de métricas
      - Power Query para transformación y modelado de datos
      - Implementación de medidas calculadas para análisis predictivo
      `, 
      image: '/assets/images/profile/proyecto-3.png', // Ruta corregida
      technologies: ['Power BI', 'MySQL'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiM2ZlNTk0YzMtMDMyZS00MWQwLWIyNmYtZjdhMTRiY2E4YmQ1IiwidCI6IjUzMDczOGU5LTU1MzAtNDFkNi1iODU0LWYyYzkwZTBkZDA4MSJ9', 
    }
  ];
  const allProjects = [...workProjects, ...practiceProjects];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filteredProjects = activeCategory === 'all' 
        ? allProjects 
        : activeCategory === 'work' 
          ? workProjects 
          : practiceProjects;
      setDisplayedProjects(filteredProjects);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portafolio
        </motion.h2>

        <motion.div 
          className="portfolio-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
            aria-label="Ver todos los proyectos"
          >
            Todos
          </button>
          <button 
            className={`category-btn ${activeCategory === 'work' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('work')}
            aria-label="Ver proyectos laborales"
          >
            <FaBriefcase /> Proyectos Laborales
          </button>
          <button 
            className={`category-btn ${activeCategory === 'practice' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('practice')}
            aria-label="Ver proyectos de práctica"
          >
            <FaCode /> Proyectos de Práctica
          </button>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {!isLoading && displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.type}`}
                variants={itemVariants}
                onClick={() => handleProjectClick(project)}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="project-type">
                      {project.type === 'work' ? <FaBriefcase /> : <FaCode />}
                      {project.type === 'work' ? 'Proyecto Laboral' : 'Proyecto de Práctica'}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="view-more">Ver más</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <button
                  className="close-modal"
                  onClick={handleCloseModal}
                  aria-label="Cerrar modal"
                >
                  <FaTimes />
                </button>

                <div className="modal-content">
                  <div className="modal-image">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="modal-info">
                    <span className="project-type">
                      {selectedProject.type === 'work' ? <FaBriefcase /> : <FaCode />}
                      {selectedProject.type === 'work' ? 'Proyecto Laboral' : 'Proyecto de Práctica'}
                    </span>
                    <h3 id="modal-title">{selectedProject.title}</h3>
                    <p className="modal-description">
                      {selectedProject.longDescription}
                    </p>

                    <div className="technologies">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> Ver Proyecto
                      </a>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github"
                        >
                          <FaGithub /> Ver Código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
