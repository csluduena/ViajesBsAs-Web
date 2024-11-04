import React from 'react';
import { Star } from 'lucide-react';
import { Language } from '../types';
import { testimonials } from '../data/content';

interface Props {
  currentLang: Language;
}

export default function Testimonials({ currentLang }: Props) {
  return (
    <section className="section bg-white" id="testimonials">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          {{ es: 'Lo que dicen nuestros clientes', en: 'What our clients say' }[currentLang]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment[currentLang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}