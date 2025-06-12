import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaFolder,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';

const navLinks = [
  {
    id: 'hero',
    label: 'Inicio',
    icon: <FaHome />,
  },
  {
    id: 'about',
    label: 'Sobre Mí',
    icon: <FaUser />,
  },
  {
    id: 'skills',
    label: 'Habilidades',
    icon: <FaCode />,
  },
  {
    id: 'experience',
    label: 'Experiencia',
    icon: <FaBriefcase />,
  },
  {
    id: 'portfolio',
    label: 'Portafolio',
    icon: <FaFolder />,
  }
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Actualizar sección activa basada en el scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <span className="nav-link-icon">{link.icon}</span>
                  <span className="nav-link-text">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          <div className="theme-toggle-icons">
            <HiSun className="theme-icon sun" />
            <HiMoon className="theme-icon moon" />
          </div>
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú móvil"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;