import './Footer.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <ul className="footer-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <ul className="footer-links">
            <li>
              <a href="#">
                <FaMapMarkerAlt />
                San Francisco, Córdoba
              </a>
            </li>
            <li>
              <a href="tel:+5493564360908">
                <FaPhone />
                +54 3564 360908
              </a>
            </li>
            <li>
              <a href="mailto:agustipatat5@gmail.com">
                <FaEnvelope />
                agustipatat5@gmail.com
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <div className="social-links">
            <a href="https://github.com/Agustin0007" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/agustin-patat" className="social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agustín Patat. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


