import React, { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <div id="hero">
        <Hero currentLang={currentLang} />
      </div>
      <Services currentLang={currentLang} />
      <Tours currentLang={currentLang} />
      <About currentLang={currentLang} />
      <Testimonials currentLang={currentLang} />
      <Contact currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;