
import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, ExternalLink } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ProjectsPage: React.FC<Props> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-12 font-bold uppercase tracking-wider text-sm">
          <ArrowLeft size={18} /> Retour à l'accueil
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-fredoka text-slate-900 mb-6">Nos Réalisations</h1>
          <p className="text-xl text-slate-500 max-w-3xl">Explorez nos projets à travers le Maroc. Des aires de jeux aux complexes sportifs, nous créons des espaces de vie exceptionnels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100">
              <div className="relative h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{project.title}</h4>
                <div className="flex items-center text-slate-500 mb-6">
                  <MapPin size={18} className="mr-2 text-orange-500" /> {project.location}
                </div>
                <button className="flex items-center text-orange-600 font-bold hover:gap-4 transition-all gap-2 group-hover:text-orange-700">
                  Voir les détails <ExternalLink size={16} />
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
