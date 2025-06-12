import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const texts = ['Analista de Datos', 'Estudiante de Ingeniería'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenTexts = 2000;
  

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    
    const type = () => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 variants={fadeInUp} initial="hidden" animate="visible">
            <motion.span className="greeting" variants={fadeInUp}>
            </motion.span>
            <motion.span className="name" variants={fadeInUp}>
              Agustín Patat
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="description"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Estudiante de Ingeniería en Sistemas de Información apasionado por el análisis de datos.
            Busco crear soluciones innovadoras y efectivas.
          </motion.p>

          <motion.div 
            className="typing-container"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="role">
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ marginLeft: '2px' }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            className="social-links"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://www.linkedin.com/in/agustin-patat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:agustinpatat5@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://github.com/Agustin0007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          <motion.div
            className="cta-buttons"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="primary-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conóceme más
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className="secondary-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="hero-image">
          <div className="image-container">
            <img src="/assets/images/profile/foto-perfil.jpeg" alt="Agustín Patat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;