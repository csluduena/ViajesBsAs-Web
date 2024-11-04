import React from 'react';
import { Car, MapPin, Clock } from 'lucide-react';
import { Language } from '../types';
import { services } from '../data/content';

interface Props {
  currentLang: Language;
}

const iconMap = {
  Car,
  MapPin,
  Clock,
};

const Services: React.FC<Props> = ({ currentLang }) => {
  return (
    <section className="section bg-white" id="services">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {service.title[currentLang]}
                </h3>
                <p className="text-gray-600">
                  {service.description[currentLang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;