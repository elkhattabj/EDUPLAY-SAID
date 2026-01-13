
import React, { useEffect } from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Award, Clock } from 'lucide-react';
import { STATISTICS } from '../constants';

interface Props {
  onBack: () => void;
}

const StatsPage: React.FC<Props> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-12 font-bold uppercase tracking-wider text-sm">
          <ArrowLeft size={18} /> Retour à l'accueil
        </button>

        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-fredoka text-slate-900 mb-6">Performance & Impact</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Chaque chiffre raconte l'histoire d'un projet réussi et d'un espace transformé.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {STATISTICS.map((stat, i) => (
            <div key={i} className="bg-white p-12 rounded-[50px] shadow-xl flex items-center gap-8 border border-slate-50 group">
              <div className={`p-8 rounded-[40px] bg-slate-50 ${stat.color} transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <stat.icon size={48} />
              </div>
              <div>
                <div className="text-6xl font-bold font-fredoka text-slate-900 mb-2">{stat.value}</div>
                <div className="text-xl text-slate-500 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 translate-x-1/4"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-fredoka mb-8">Croissance Continue</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">Depuis 12 ans, EDUPLAY maintient une croissance annuelle constante de 15%, témoignant de la confiance renouvelée de nos partenaires et de notre capacité à innover.</p>
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-bold mb-1">+15%</div>
                  <div className="text-slate-500 text-sm">Croissance Annuelle</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">12 Ans</div>
                  <div className="text-slate-500 text-sm">De Savoir-faire</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                <BarChart3 className="text-orange-500 mb-4" />
                <div className="text-sm font-bold">Analyse Data</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                <Award className="text-blue-500 mb-4" />
                <div className="text-sm font-bold">Certifications</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                <TrendingUp className="text-green-500 mb-4" />
                <div className="text-sm font-bold">R&D</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                <Clock className="text-pink-500 mb-4" />
                <div className="text-sm font-bold">Réactivité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
