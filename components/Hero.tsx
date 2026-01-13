
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    title: "Créez des espaces de joie",
    subtitle: "Concepteur d'aires de jeux innovantes et sécurisées au Maroc.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
    cta: "Découvrir nos jeux",
  },
  {
    title: "L'excellence sportive partout",
    subtitle: "Équipements de fitness plein air et city stades de haute qualité.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
    cta: "Nos solutions sport",
  },
  {
    title: "Aménagement Urbain Durable",
    subtitle: "Mobilier urbain esthétique et résistant pour vos espaces publics.",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2000&auto=format&fit=crop",
    cta: "Voir le mobilier",
  }
];

interface Props {
  onDiscoverClick?: () => void;
}

const Hero: React.FC<Props> = ({ onDiscoverClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? SLIDES.length - 1 : current - 1);

  return (
    <section className="relative h-screen overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
            <h2 className="text-4xl md:text-8xl font-bold font-fredoka mb-6 animate-fade-in-up tracking-tight drop-shadow-2xl">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mb-10 opacity-90 animate-fade-in-up animation-delay-300 leading-relaxed font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
              <button 
                onClick={onDiscoverClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center group shadow-2xl shadow-orange-600/40 active:scale-95"
              >
                {slide.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white px-12 py-5 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/5 hover:bg-orange-600 rounded-full text-white backdrop-blur-sm transition-all shadow-xl group">
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/5 hover:bg-orange-600 rounded-full text-white backdrop-blur-sm transition-all shadow-xl group">
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {SLIDES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'bg-orange-600 w-12' : 'bg-white/30 w-6 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
