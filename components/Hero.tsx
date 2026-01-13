
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, ShieldCheck } from 'lucide-react';

const SLIDES = [
  {
    title: "Expert de l'Aménagement Ludique",
    subtitle: "Conception et installation d'aires de jeux haut de gamme certifiées au Maroc.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
    cta: "Nos Réalisations",
    theme: "ciec-green"
  },
  {
    title: "Sport & Fitness de Proximité",
    subtitle: "Équipements de plein air durables pour un cadre de vie dynamique et sain.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
    cta: "Solutions Sport",
    theme: "ciec-pistachio"
  },
  {
    title: "Mobilier Urbain Architectural",
    subtitle: "Sélection d'équipements contemporains pour valoriser vos espaces publics.",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2000&auto=format&fit=crop",
    cta: "Catalogue Mobilier",
    theme: "ciec-orange"
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
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? SLIDES.length - 1 : current - 1);

  return (
    <section className="relative h-screen overflow-hidden bg-slate-900">
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 flex items-center z-20 px-8 lg:px-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8 glass w-fit px-6 py-2 rounded-full border border-white/20 animate-fade-in">
                <ShieldCheck size={18} className="text-ciec-pistachio" />
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Excellence et Sécurité Certifiée</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black font-heading text-white mb-8 tracking-tighter leading-[0.95] uppercase">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 2 ? "text-ciec-pistachio" : ""}>{word} </span>
                ))}
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl font-light leading-relaxed">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={onDiscoverClick}
                  className="bg-ciec-green hover:bg-ciec-green/90 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center group shadow-2xl active:scale-95 btn-shadow"
                >
                  {slide.cta}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center"
                >
                  Étude de Projet
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-8 lg:left-24 z-30 flex items-center gap-12">
        <div className="flex gap-4">
          <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all group">
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all group">
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex space-x-3 items-center">
          {SLIDES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`transition-all duration-700 rounded-full h-1.5 ${i === current ? 'bg-ciec-pistachio w-12' : 'bg-white/20 w-4 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
