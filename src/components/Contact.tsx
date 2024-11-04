import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
}

export default function Contact({ currentLang }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const translations = {
    title: {
      es: 'Contáctanos',
      en: 'Contact Us',
    },
    subtitle: {
      es: 'Estamos aquí para ayudarte',
      en: "We're here to help",
    },
    form: {
      name: {
        es: 'Nombre',
        en: 'Name',
      },
      email: {
        es: 'Correo electrónico',
        en: 'Email',
      },
      phone: {
        es: 'Teléfono',
        en: 'Phone',
      },
      message: {
        es: 'Mensaje',
        en: 'Message',
      },
      submit: {
        es: 'Enviar mensaje',
        en: 'Send message',
      },
    },
  };

  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {translations.title[currentLang]}
            </h2>
            <p className="text-gray-600 mb-8">
              {translations.subtitle[currentLang]}
            </p>
            <div className="space-y-6">
              <ContactInfo
                icon={Phone}
                title="+54 11 1234-5678"
                subtitle={{
                  es: 'Llámanos o envía un WhatsApp',
                  en: 'Call us or send a WhatsApp',
                }[currentLang]}
              />
              <ContactInfo
                icon={Mail}
                title="info@viajesba.com"
                subtitle={{
                  es: 'Escríbenos un correo',
                  en: 'Send us an email',
                }[currentLang]}
              />
              <ContactInfo
                icon={MapPin}
                title="Buenos Aires, Argentina"
                subtitle={{
                  es: 'Ciudad Autónoma de Buenos Aires',
                  en: 'Autonomous City of Buenos Aires',
                }[currentLang]}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.name[currentLang]}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.email[currentLang]}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.phone[currentLang]}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.message[currentLang]}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              {translations.form.submit[currentLang]}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

function ContactInfo({ icon: Icon, title, subtitle }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}