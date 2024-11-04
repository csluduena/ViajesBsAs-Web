import { Service, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: {
      es: 'Traslados al Aeropuerto',
      en: 'Airport Transfers',
    },
    description: {
      es: 'Servicio puntual y confiable desde y hacia los aeropuertos de Buenos Aires',
      en: 'Punctual and reliable service to and from Buenos Aires airports',
    },
    icon: 'Car',
  },
  {
    id: 2,
    title: {
      es: 'Tours Privados',
      en: 'Private Tours',
    },
    description: {
      es: 'Recorridos personalizados por los lugares más emblemáticos de la ciudad',
      en: 'Customized tours through the most emblematic places in the city',
    },
    icon: 'MapPin',
  },
  {
    id: 3,
    title: {
      es: 'Viajes de Larga Distancia',
      en: 'Long Distance Trips',
    },
    description: {
      es: 'Traslados seguros y cómodos a cualquier destino del país',
      en: 'Safe and comfortable transfers to any destination in the country',
    },
    icon: 'Clock',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    comment: {
      es: 'Excelente servicio, muy profesional y puntual. Recomiendo totalmente.',
      en: 'Excellent service, very professional and punctual. Highly recommended.',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'John Smith',
    comment: {
      es: 'La mejor manera de conocer Buenos Aires. Guía experto y servicio personalizado.',
      en: 'The best way to discover Buenos Aires. Expert guide and personalized service.',
    },
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
  },
];

export const translations = {
  nav: {
    home: {
      es: 'Inicio',
      en: 'Home',
    },
    tours: {
      es: 'Recorriendo Bs As',
      en: 'Touring BA',
    },
    testimonials: {
      es: 'Comentarios',
      en: 'Testimonials',
    },
    contact: {
      es: 'Contacto',
      en: 'Contact',
    },
  },
  hero: {
    title: {
      es: 'Tu Chofer Personal en Buenos Aires',
      en: 'Your Personal Driver in Buenos Aires',
    },
    subtitle: {
      es: 'Experiencia, profesionalismo y servicio personalizado',
      en: 'Experience, professionalism, and personalized service',
    },
    cta: {
      es: 'Reservar Ahora',
      en: 'Book Now',
    },
  },
  about: {
    title: {
      es: 'Sobre Nosotros',
      en: 'About Us',
    },
    description: {
      es: 'Con más de 10 años de experiencia, ofrecemos un servicio de transporte premium y personalizado en Buenos Aires. Nuestra pasión es brindar experiencias únicas y memorables a nuestros clientes.',
      en: 'With over 10 years of experience, we offer premium and personalized transportation services in Buenos Aires. Our passion is to provide unique and memorable experiences to our clients.',
    },
  },
};