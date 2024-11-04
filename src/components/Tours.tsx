import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
}

const tours = [
  {
    id: 1,
    image: './CityTour.jpg',
    title: {
      es: 'Tour por la Ciudad',
      en: 'City Tour',
    },
    description: {
      es: 'Recorre los lugares más emblemáticos de Buenos Aires: Plaza de Mayo, La Boca, San Telmo, Recoleta y más.',
      en: 'Visit the most iconic places in Buenos Aires: Plaza de Mayo, La Boca, San Telmo, Recoleta and more.',
    },
    duration: {
      es: '4 horas',
      en: '4 hours',
    },
    price: {
      es: 'Desde $80 USD',
      en: 'From $80 USD',
    },
  },
  {
    id: 2,
    image: './FoodTour.jpg',
    title: {
      es: 'Tour Gastronómico',
      en: 'Food Tour',
    },
    description: {
      es: 'Descubre los mejores sabores de la ciudad visitando restaurantes tradicionales y modernos.',
      en: 'Discover the best flavors of the city by visiting traditional and modern restaurants.',
    },
    duration: {
      es: '5 horas',
      en: '5 hours',
    },
    price: {
      es: 'Desde $95 USD',
      en: 'From $95 USD',
    },
  },
  {
    id: 3,
    image: './NightTour.jpg',
    title: {
      es: 'Tour Nocturno',
      en: 'Night Tour',
    },
    description: {
      es: 'Experimenta la vida nocturna de Buenos Aires con shows de tango y cenas gourmet.',
      en: 'Experience Buenos Aires nightlife with tango shows and gourmet dinners.',
    },
    duration: {
      es: '6 horas',
      en: '6 hours',
    },
    price: {
      es: 'Desde $120 USD',
      en: 'From $120 USD',
    },
  },
];

export default function Tours({ currentLang }: Props) {
  return (
    <section className="section bg-gray-50" id="tours">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          {{ es: 'Recorriendo Buenos Aires', en: 'Touring Buenos Aires' }[currentLang]}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {{
            es: 'Descubre la magia de Buenos Aires con nuestros tours personalizados',
            en: 'Discover the magic of Buenos Aires with our personalized tours',
          }[currentLang]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {tour.title[currentLang]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tour.description[currentLang]}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration[currentLang]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {{
                        es: 'Recogida en el hotel',
                        en: 'Hotel pickup',
                      }[currentLang]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{tour.price[currentLang]}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                  {{
                    es: 'Reservar ahora',
                    en: 'Book now',
                  }[currentLang]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}