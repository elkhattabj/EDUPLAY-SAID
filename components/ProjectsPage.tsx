
import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, ExternalLink, Camera } from 'lucide-react';

interface Props {
  onBack: () => void;
  onProjectSelect?: (id: string) => void;
}

const ProjectsPage: React.FC<Props> = ({ onBack, onProjectSelect }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 pt-48 pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <button 
          onClick={onBack} 
          className="flex items-center gap-3 text-ciec-green hover:text-ciec-pistachio transition-all mb-16 font-black uppercase tracking-[0.3em] text-[10px]"
        >
          <ArrowLeft size={18} /> Retour à l'accueil
        </button>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-ciec-pistachio rounded-full" />
            <span className="text-ciec-green font-bold uppercase tracking-[0.3em] text-[10px]">Notre Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-heading text-slate-900 mb-8 uppercase tracking-tighter">Réalisations Impactantes</h1>
          <p className="text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Découvrez comment nous transformons les espaces de vie à travers tout le Royaume du Maroc avec des solutions durables et esthétiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROJECTS.map(project => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect?.(project.id)}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 glass px-5 py-2 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-xl">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-ciec-green text-white px-6 py-3 rounded-xl shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Camera size={18} /> Voir l'album
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black font-heading mb-4 group-hover:text-ciec-green transition-colors uppercase tracking-tight">{project.title}</h4>
                <div className="flex items-center text-slate-500 mb-8 font-bold">
                  <MapPin size={18} className="mr-3 text-ciec-orange" /> {project.location}
                </div>
                <button className="flex items-center text-ciec-green font-black text-[10px] uppercase tracking-widest hover:gap-6 transition-all gap-3">
                  Explorer le projet <ArrowLeft size={16} className="rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
