import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvPath = '/Agustin_Patat_CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Agustin_Patat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Sobre Mí</h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-text"
          >
            <p>
              Mi nombre es Agustín Patat, estudiante de Ingeniería en Sistemas de Información, 
              y estoy entusiasmado por la oportunidad de integrarme a un equipo laboral donde 
              pueda contribuir con mis habilidades y seguir desarrollándome profesionalmente.
            </p>
            <p>
              Soy una persona responsable, puntual y con gran capacidad de aprendizaje. 
              Me adapto rápidamente a los entornos laborales y disfruto trabajando en equipo, 
              aportando ideas innovadoras y tomando decisiones que impulsen el crecimiento 
              de los proyectos en los que participo.
            </p>
            <div className="download-cv">
              <button 
                onClick={handleDownloadCV}
                className="cv-button"
              >
                <FaDownload /> Descargar CV
              </button>
            </div>
          </motion.div>

          <div className="info-cards">
            <motion.div 
              className="info-card"
            >
              <div className="card-icon">
                <FaUser />
              </div>
              <div className="card-content">
                <h3>Datos Personales</h3>
                <ul>
                  <li>
                    <strong>Email</strong>
                    <p>agustinpatat5@gmail.com</p>
                  </li>
                  <li>
                    <strong>Ubicación</strong>
                    <p>San Francisco, Córdoba, Argentina</p>
                  </li>
                  <li>
                    <strong>Cargo Actual</strong>
                    <p>Analista de Datos - Estudiante</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
            >
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <div className="card-content">
                <h3>Educación</h3>
                <ul>
                  <li>
                    <strong>2023 - Presente</strong>
                    <p>Ing. Sistemas de Información - UTN San Francisco</p>
                  </li>
                  <li>
                    <strong>2016 - 2022</strong>
                    <p>Técnico Electricista - IPET N°50</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
            >
              <div className="card-icon">
                <FaBriefcase />
              </div>
              <div className="card-content">
                <h3>Experiencia</h3>
                <ul>
                  <li>
                    <strong>Marzo 2023 - Presente</strong>
                    <p>Analista de Datos - INTA</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 