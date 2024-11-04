import React from 'react';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface Props {
  currentLang: Language;
}

export default function Footer({ currentLang }: Props) {
  const nav = translations.nav;

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8" />
              <span className="text-xl font-bold">Viajes Bs As</span>
            </div>
            <p className="text-blue-100">
              {{
                es: 'Tu servicio de transporte premium en Buenos Aires',
                en: 'Your premium transportation service in Buenos Aires',
              }[currentLang]}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">
              {{ es: 'Enlaces', en: 'Links' }[currentLang]}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  {nav.home[currentLang]}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  {nav.tours[currentLang]}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  {nav.testimonials[currentLang]}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition">
                  {nav.contact[currentLang]}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">
              {{ es: 'Contacto', en: 'Contact' }[currentLang]}
            </h3>
            <ul className="space-y-2">
              <li>+54 11 1234-5678</li>
              <li>info@viajesba.com</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">
              {{ es: 'Síguenos', en: 'Follow us' }[currentLang]}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-blue-900 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-100">
          <p>
            © {new Date().getFullYear()} Viajes Bs As.{' '}
            {{ es: 'Todos los derechos reservados', en: 'All rights reserved' }[
              currentLang
            ]}
            .
          </p>
        </div>
      </div>
    </footer>
  );
}