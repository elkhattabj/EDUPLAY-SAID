
import React, { useEffect } from 'react';
import { ArrowLeft, Target, Eye, Users, ShieldCheck } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const AboutPage: React.FC<Props> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-12 font-bold uppercase tracking-wider text-sm">
          <ArrowLeft size={18} /> Retour à l'accueil
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold font-fredoka text-slate-900 mb-8 leading-tight">L'histoire d'EDUPLAY</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">Depuis notre création, notre mission est claire : transformer les espaces publics marocains en lieux d'épanouissement, de sport et de partage.</p>
            <p className="text-slate-500 leading-relaxed">Nous combinons l'expertise en ingénierie, le design ludique et les normes de sécurité les plus strictes pour offrir des solutions durables aux collectivités et aux acteurs privés.</p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop" 
              className="rounded-[60px] shadow-2xl relative z-10" 
              alt="About EDUPLAY" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: Target, title: "Notre Mission", desc: "Favoriser le bien-être social par l'aménagement d'espaces extérieurs innovants." },
            { icon: Eye, title: "Notre Vision", desc: "Devenir la référence incontournable du mobilier urbain et ludique en Afrique." },
            { icon: ShieldCheck, title: "Nos Valeurs", desc: "Sécurité sans compromis, durabilité environnementale et passion du jeu." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-50 hover:-translate-y-2 transition-transform">
              <div className="bg-orange-50 text-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-fredoka text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
