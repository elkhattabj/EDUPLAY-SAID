
import React, { useEffect } from 'react';
import { Category } from '../types';
import { ArrowLeft, CheckCircle2, Phone, Mail, FileText } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Detail Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img src={category.image} className="w-full h-full object-cover opacity-50 scale-105" alt={category.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/95" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-white/70 hover:text-white transition-all mb-12 group font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={18} /> 
            RETOUR À L'ACCUEIL
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-8 glass px-6 py-2 rounded-xl text-ciec-green border border-white/10">
                <LucideIcon size={28} />
                <span className="font-black text-[10px] tracking-widest uppercase">Expertise Aménagement</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-heading text-white leading-[0.9] tracking-tighter uppercase mb-8">
                {category.title}
              </h1>
              <p className="text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
                {category.description}
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white min-w-[300px]">
              <div className="text-[10px] font-black tracking-widest uppercase text-ciec-pistachio mb-4">Statut</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-ciec-pistachio rounded-full animate-pulse"></div>
                <div className="text-xl font-bold tracking-tight">Disponible / Sur-mesure</div>
              </div>
              <button className="w-full bg-ciec-green py-4 rounded-xl font-bold tracking-widest text-[11px] hover:bg-ciec-green/90 transition-all btn-shadow">
                DEMANDER UN DEVIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2 space-y-20">
              <div className="border-l-8 border-ciec-green pl-12">
                <h2 className="text-4xl font-black font-heading text-slate-900 mb-10 tracking-tight uppercase">
                  Étude Technique
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-light">
                  {category.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[#F8F9FA] p-12 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-ciec-green group-hover:text-white transition-all">
                    <Icons.Settings size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 uppercase tracking-tight">
                    Spécifications
                  </h3>
                  <ul className="space-y-6">
                    {category.features?.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-500 font-medium">
                        <CheckCircle2 className="text-ciec-green shrink-0" size={20} />
                        <span className="text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#F8F9FA] p-12 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-ciec-pistachio group-hover:text-white transition-all">
                    <Icons.ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 uppercase tracking-tight">
                    Garanties & Valeur
                  </h3>
                  <ul className="space-y-6">
                    {category.benefits?.map((b, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-500 font-medium">
                        <CheckCircle2 className="text-ciec-pistachio shrink-0" size={20} />
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Business CTA */}
              <div className="bg-slate-900 rounded-[50px] p-12 lg:p-20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-ciec-green/10 -skew-x-12 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black font-heading mb-8 tracking-tighter uppercase leading-tight">
                    Optimisez votre espace public dès <span className="text-ciec-pistachio">Aujourd'hui</span>
                  </h3>
                  <p className="text-slate-400 text-xl mb-12 max-w-2xl font-light">Contactez nos ingénieurs pour une étude technique complète et un devis personnalisé adapté à vos contraintes budgétaires.</p>
                  <div className="flex flex-wrap gap-6">
                    <a href="tel:+212522000000" className="bg-ciec-green hover:bg-ciec-green/90 text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-4 transition-all shadow-xl active:scale-95 btn-shadow">
                      <Phone size={24} /> +212 522 00 00 00
                    </a>
                    <a href="mailto:contact@eduplay.ma" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold flex items-center gap-4 transition-all active:scale-95">
                      <Mail size={24} /> contact@eduplay.ma
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Sidebar - High End */}
            <div className="space-y-12">
              <div className="bg-[#F8F9FA] p-12 rounded-[40px] border border-slate-100">
                <h4 className="text-xs font-black tracking-[0.4em] uppercase mb-10 text-slate-900">Expertise Technique</h4>
                <div className="space-y-8">
                  <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-ciec-green transition-colors">Documentation PDF</span>
                    <FileText className="text-slate-300 group-hover:text-ciec-green transition-all" size={24} />
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-ciec-green transition-colors">Fiches de Maintenance</span>
                    {/* Fixed non-existent icon 'Tool' to 'Wrench' */}
                    <Icons.Wrench className="text-slate-300 group-hover:text-ciec-green transition-all" size={24} />
                  </div>
                   <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-ciec-green transition-colors">Certificats de Sécurité</span>
                    <Icons.Lock className="text-slate-300 group-hover:text-ciec-green transition-all" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[40px] border-4 border-slate-50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-ciec-yellow/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="relative z-10 text-center">
                  <Icons.Download size={56} className="mx-auto mb-8 text-ciec-green animate-bounce" />
                  <h4 className="text-2xl font-black font-heading mb-4 tracking-tight uppercase">Brochure 2025</h4>
                  <p className="text-sm text-slate-400 mb-10 font-medium">Consultez notre catalogue complet d'aménagements ludiques et sportifs.</p>
                  <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[11px] tracking-widest uppercase hover:bg-ciec-green transition-all shadow-xl active:scale-95">
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
