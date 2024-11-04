import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/content';

interface Props {
  currentLang: Language;
}

export default function About({ currentLang }: Props) {
  const { about } = translations;

  return (
    <section className="section bg-gray-50" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {about.title[currentLang]}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {about.description[currentLang]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Feature
                icon={Shield}
                title={{ es: 'Seguridad', en: 'Safety' }[currentLang]}
                description={{
                  es: 'Vehículos asegurados',
                  en: 'Insured vehicles',
                }[currentLang]}
              />
              <Feature
                icon={Award}
                title={{ es: 'Experiencia', en: 'Experience' }[currentLang]}
                description={{
                  es: '10+ años de servicio',
                  en: '10+ years of service',
                }[currentLang]}
              />
              <Feature
                icon={ThumbsUp}
                title={{ es: 'Calidad', en: 'Quality' }[currentLang]}
                description={{
                  es: 'Servicio premium',
                  en: 'Premium service',
                }[currentLang]}
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury car service"
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-900" />
                <span className="font-semibold text-blue-900">
                  {{ es: 'Certificado', en: 'Certified' }[currentLang]}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {{
                  es: 'Conductor profesional certificado por la Ciudad de Buenos Aires',
                  en: 'Professional driver certified by the City of Buenos Aires',
                }[currentLang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}