
import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, MapPin, Share2, Camera } from 'lucide-react';

interface Props {
  project: Project;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<Props> = ({ project, onBack }) => {
  useEffect(() => window.scrollTo(0, 0), [project.id]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img src={project.image} className="w-full h-full object-cover opacity-60 scale-105" alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white bg-ciec-green hover:bg-ciec-green/90 px-6 py-3 rounded-xl mb-8 font-black uppercase tracking-widest text-[10px] shadow-2xl transition-all active:scale-95"
          >
            <ArrowLeft size={16} /> Retour aux réalisations
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-ciec-pistachio/10 text-ciec-green px-4 py-1.5 rounded-lg mb-4 text-[10px] font-black uppercase tracking-widest border border-ciec-pistachio/20">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-black font-heading text-slate-900 tracking-tighter uppercase">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-slate-500 mt-4 font-bold">
                <MapPin size={20} className="text-ciec-orange" />
                <span>{project.location}, Maroc</span>
              </div>
            </div>
            
            <button className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-slate-200">
              <Share2 size={18} /> Partager le projet
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-ciec-orange rounded-full" />
              <span className="text-ciec-orange font-bold uppercase tracking-[0.3em] text-[10px]">Galerie Photo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-slate-900 uppercase tracking-tight">
              Aperçu détaillé de l'aménagement
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl font-medium leading-relaxed">
              {project.description || "Découvrez en images les détails techniques et esthétiques de cette réalisation signée EDUPLAY."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {project.gallery.map((img, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-zoom-in border border-slate-50 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                <img 
                  src={img} 
                  alt={`${project.title} - vue ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="glass px-6 py-2 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <Camera size={14} /> Vue immersive #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-slate-50 rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border border-slate-100">
             <div>
               <h3 className="text-2xl md:text-3xl font-black font-heading text-slate-900 uppercase mb-4">Un projet similaire ?</h3>
               <p className="text-slate-500 font-medium">Nos ingénieurs sont à votre disposition pour une étude personnalisée de votre espace.</p>
             </div>
             <a href="#contact" onClick={onBack} className="bg-ciec-green text-white px-16 py-6 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-ciec-green/90 transition-all shadow-xl btn-shadow active:scale-95">
               Demander une étude technique
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
