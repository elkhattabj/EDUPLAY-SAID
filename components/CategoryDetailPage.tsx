
import React, { useEffect } from 'react';
import { Category } from '../types';
import { ArrowLeft, CheckCircle2, Phone, Mail, Share2 } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Props {
  category: Category;
  onBack: () => void;
}

const CategoryDetailPage: React.FC<Props> = ({ category, onBack }) => {
  const LucideIcon = (Icons as any)[category.icon] || Icons.HelpCircle;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Detail Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img src={category.image} className="w-full h-full object-cover opacity-60 scale-105" alt={category.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="font-bold uppercase tracking-wider text-sm">Retour à l'accueil</span>
          </button>
          
          <div className="flex items-center gap-6 mb-4">
            <div className="bg-orange-600 p-4 rounded-3xl text-white shadow-2xl">
              <LucideIcon size={40} />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold font-fredoka text-white leading-tight">
              {category.title}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold font-fredoka text-slate-900 mb-6 underline decoration-orange-600 decoration-4 underline-offset-8">
                  Présentation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {category.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                  <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-6 flex items-center gap-2">
                    <Icons.Settings size={20} className="text-orange-600" />
                    Caractéristiques
                  </h3>
                  <ul className="space-y-4">
                    {category.features?.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                  <h3 className="text-xl font-bold font-fredoka text-slate-900 mb-6 flex items-center gap-2">
                    <Icons.Award size={20} className="text-orange-600" />
                    Avantages
                  </h3>
                  <ul className="space-y-4">
                    {category.benefits?.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact/CTA */}
              <div className="bg-orange-600 rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-600/30">
                <div>
                  <h3 className="text-2xl font-bold font-fredoka mb-2">Un projet sur mesure ?</h3>
                  <p className="text-orange-100">Nos experts sont à votre écoute pour concevoir votre espace.</p>
                </div>
                <div className="flex gap-4">
                  <a href="tel:+212522000000" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all flex items-center gap-2">
                    <Phone size={18} /> Appeler
                  </a>
                  <a href="mailto:contact@eduplay.ma" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                    <Mail size={18} /> Email
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h4 className="text-lg font-bold font-fredoka mb-6">Partager</h4>
                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-100 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Icons.Facebook size={20} className="mx-auto" /></button>
                  <button className="flex-1 bg-slate-100 p-3 rounded-xl hover:bg-pink-600 hover:text-white transition-all"><Icons.Instagram size={20} className="mx-auto" /></button>
                  <button className="flex-1 bg-slate-100 p-3 rounded-xl hover:bg-blue-700 hover:text-white transition-all"><Icons.Linkedin size={20} className="mx-auto" /></button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Brochure" />
                <div className="relative z-10 text-center py-6">
                  <Icons.FileText size={48} className="mx-auto mb-4 text-orange-600" />
                  <h4 className="text-lg font-bold font-fredoka mb-2">Catalogue EDUPLAY</h4>
                  <p className="text-sm text-slate-500 mb-6">Téléchargez notre brochure complète au format PDF.</p>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                    Télécharger (.PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetailPage;
