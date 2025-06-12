import './Footer.css'
import {FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa'
import { FaDatabase, FaChartLine } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
        <div className="social-links">
            <a href="https://github.com/Agustin0007" className="social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/agustin-patat" className="social-link"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-links">
            <li>
              <a href="#">
                <FaMapMarkerAlt />
                San Francisco, Cordoba, Argentina
              </a>
            </li>
            <li>
              <a href="tel:+5491112345678">
                <FaPhone />
                +54 3564 360908
              </a>
            </li>
            <li>
              <a href="mailto:agustin@patat.com">
                <FaEnvelope />
                agustipatat5@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agustín Patat. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer


