import './Footer.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-new__container">
        <div className="footer-new__about">
          <h2 className="footer-new__logo">Agustín Patat</h2>
          <p className="footer-new__desc">
            Analista de datos y desarrollador de dashboards. Apasionado por transformar datos en decisiones y crear soluciones digitales que impactan.
          </p>
        </div>
        <div className="footer-new__links">
          <h3>Secciones</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
          </ul>
        </div>
        <div className="footer-new__contact">
          <h3>Contacto</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-new__icon" />
              San Francisco, Córdoba
            </li>
            <li>
              <FaPhoneAlt className="footer-new__icon" />
              <a href="tel:+5493564360908">+54 3564 360908</a>
            </li>
            <li>
              <FaEnvelope className="footer-new__icon" />
              <a href="mailto:agustipatat5@gmail.com">agustipatat5@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-new__social">
          <h3>Redes</h3>
          <div className="footer-new__social-links">
            <a href="https://github.com/Agustin0007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/agustin-patat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-new__bottom">
        <span>
          &copy; {new Date().getFullYear()} Agustín Patat. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;


