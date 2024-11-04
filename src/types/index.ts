export type Language = 'es' | 'en';

export interface Testimonial {
  id: number;
  name: string;
  comment: {
    es: string;
    en: string;
  };
  rating: number;
  image: string;
}

export interface Service {
  id: number;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: string;
}