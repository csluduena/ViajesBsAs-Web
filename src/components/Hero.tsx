import React from 'react';
import { translations } from '../data/content';
import { Language } from '../types';

interface Props {
  currentLang: Language;
}

export default function Hero({ currentLang }: Props) {
  const { hero } = translations;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=2070&auto=format&fit=crop"
          alt="Buenos Aires"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {hero.title[currentLang]}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            {hero.subtitle[currentLang]}
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-fit">
            {hero.cta[currentLang]}
          </button>
        </div>
      </div>
    </div>
  );
}