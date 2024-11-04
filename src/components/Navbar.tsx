import React from 'react';
import { Car } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language } from '../types';
import { translations } from '../data/content';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ currentLang, onLanguageChange }: Props) {
  const nav = translations.nav;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80; // Height of the fixed navbar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900">Viajes Bs As</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-900">
              {nav.home[currentLang]}
            </button>
            <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-blue-900">
              {nav.tours[currentLang]}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-900">
              {nav.testimonials[currentLang]}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900">
              {nav.contact[currentLang]}
            </button>
            <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </nav>
  );
}