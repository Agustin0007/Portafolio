import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Footer from './components/layout/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
