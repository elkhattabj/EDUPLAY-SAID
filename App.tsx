
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import SectionHeading from './components/SectionHeading';
import AIConsultant from './components/AIConsultant';
import VideoSection from './components/VideoSection';
import CategoryDetailPage from './components/CategoryDetailPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import AboutPage from './components/AboutPage';
import StatsPage from './components/StatsPage';
import { CATEGORIES, PROJECTS, CLIENTS, STATISTICS } from './constants';
import { 
  MapPin, 
  ArrowRight, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Camera
} from 'lucide-react';

type ViewState = 'home' | 'category' | 'projects' | 'project-detail' | 'about' | 'stats';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const navigateTo = (view: ViewState, id: string | null = null) => {
    setCurrentView(view);
    if (view === 'category') setSelectedCategoryId(id);
    if (view === 'project-detail') setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => navigateTo('home');
  const handleBackToProjects = () => navigateTo('projects');

  const selectedCategory = CATEGORIES.find(c => c.id === selectedCategoryId);
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-white selection:bg-ciec-green selection:text-white font-body">
      {/* Fixed Header */}
      <Header 
        onLogoClick={handleBackToHome} 
        onAboutClick={() => navigateTo('about')}
        onProductsClick={() => {
          if (currentView !== 'home') handleBackToHome();
          setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100);
        }}
        onProjectsClick={() => navigateTo('projects')}
      />
      
      {currentView === 'home' && (
        <>
          <Hero onDiscoverClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />

          {/* Stats Section in Professional Style */}
          <section className="relative py-32 -mt-24 z-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,141,65,0.12)] p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border border-slate-50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ciec-green via-ciec-pistachio via-ciec-yellow to-ciec-orange" />
                {STATISTICS.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center group/stat cursor-default">
                    <div className={`p-6 rounded-[28px] bg-[#F4F8F6] ${stat.color} mb-8 transition-all duration-700 group-hover/stat:scale-110 group-hover/stat:shadow-2xl group-hover/stat:bg-white`}>
                      <stat.icon size={44} strokeWidth={1.5} />
                    </div>
                    <div className="text-5xl lg:text-6xl font-black font-heading text-slate-900 mb-4 tracking-tighter">{stat.value}</div>
                    <div className="text-slate-400 font-bold uppercase tracking-[0.25em] text-[10px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Expertise Sections */}
          <section id="products" className="py-40 container mx-auto px-4 lg:px-8 relative">
            <SectionHeading 
              title="Aménagements Urbains & Ludiques" 
              subtitle="Domaines d'Intervention" 
              center 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {CATEGORIES.map(cat => (
                <CategoryCard key={cat.id} category={cat} onSelect={(id) => navigateTo('category', id)} />
              ))}
            </div>
          </section>

          {/* Corporate About Section */}
          <section id="about" className="py-48 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-ciec-green/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-32 items-center">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-4 mb-10 glass px-8 py-3 rounded-full border border-white/10">
                    <ShieldCheck className="text-ciec-pistachio" size={24} />
                    <span className="text-ciec-pistachio font-black uppercase tracking-[0.3em] text-[10px]">Leader de l'Aménagement au Maroc</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black font-heading mb-12 leading-[0.95] tracking-tighter uppercase">
                    Engagé pour la <span className="text-ciec-green">Qualité</span> durable
                  </h2>
                  <p className="text-slate-400 text-2xl mb-16 leading-relaxed font-light">
                    Depuis 15 ans, EDUPLAY accompagne les collectivités et acteurs privés dans la création d'espaces de vie exceptionnels. Notre savoir-faire allie sécurité rigoureuse et design architectural de pointe.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-12 mb-20 border-l border-white/10 pl-10">
                    <div>
                      <h4 className="text-ciec-pistachio font-black text-xs uppercase tracking-widest mb-4">Sécurité & Normes</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Validation HIC, Normes EN-1176 / 1177 pour une tranquillité absolue.</p>
                    </div>
                    <div>
                      <h4 className="text-ciec-orange font-black text-xs uppercase tracking-widest mb-4">Design sur mesure</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Adaptation architecturale et paysagère de chaque projet.</p>
                    </div>
                  </div>

                  <button onClick={() => navigateTo('about')} className="bg-ciec-green hover:bg-ciec-green/90 text-white px-16 py-6 rounded-2xl font-bold text-lg transition-all inline-flex items-center group shadow-2xl btn-shadow active:scale-95">
                    Notre Savoir-faire <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" />
                  </button>
                </div>
                <div className="lg:w-1/2 w-full relative">
                  <div className="absolute -inset-10 bg-ciec-green/20 rounded-full blur-[150px] animate-pulse" />
                  <AIConsultant />
                </div>
              </div>
            </div>
          </section>

          <VideoSection />

          {/* Portfolio Section */}
          <section id="projects" className="py-48 bg-[#FDFDFD] relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-28">
                <SectionHeading title="Impact et Réalisations" subtitle="Portfolio" />
                <button onClick={() => navigateTo('projects')} className="hidden md:flex items-center gap-5 mb-10 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-ciec-green shadow-2xl active:scale-95">
                  Voir Tout le Portfolio <ExternalLink size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {PROJECTS.slice(0, 6).map(project => (
                  <div 
                    key={project.id} 
                    onClick={() => navigateTo('project-detail', project.id)}
                    className="group bg-white rounded-[32px] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 border border-slate-100 cursor-pointer"
                  >
                    <div className="relative h-96 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute top-8 left-8 glass px-6 py-2.5 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-xl">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-ciec-green text-white p-5 rounded-full shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                          <Camera size={32} />
                        </div>
                      </div>
                    </div>
                    <div className="p-12">
                      <h4 className="text-3xl font-bold font-heading mb-4 group-hover:text-ciec-green transition-colors tracking-tight uppercase">{project.title}</h4>
                      <p className="flex items-center text-slate-500 text-sm font-semibold">
                        <MapPin size={18} className="mr-3 text-ciec-pistachio" /> {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Major Clients Section */}
          <section id="clients" className="py-40 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-28">
                <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Partenaires Institutionnels</p>
                <div className="h-1 w-24 bg-ciec-pistachio mx-auto rounded-full" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-24 lg:gap-48 opacity-25 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000 ease-in-out">
                {CLIENTS.map(client => (
                  <div key={client.id} className="h-24 flex items-center justify-center transform hover:scale-110 transition-transform">
                    <img src={client.logo} alt={client.name} className="max-h-full max-w-[220px] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'category' && selectedCategory && (
        <CategoryDetailPage category={selectedCategory} onBack={handleBackToHome} />
      )}

      {currentView === 'projects' && (
        <ProjectsPage onBack={handleBackToHome} onProjectSelect={(id) => navigateTo('project-detail', id)} />
      )}

      {currentView === 'project-detail' && selectedProject && (
        <ProjectDetailPage project={selectedProject} onBack={handleBackToProjects} />
      )}

      {currentView === 'about' && (
        <AboutPage onBack={handleBackToHome} />
      )}

      {currentView === 'stats' && (
        <StatsPage onBack={handleBackToHome} />
      )}

      {/* Corporate Footer */}
      <footer id="contact" className="bg-[#0B0D0E] text-white pt-40 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ciec-green via-ciec-pistachio to-ciec-orange" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="space-y-16">
              <button onClick={handleBackToHome} className="text-5xl font-black font-heading text-left tracking-tighter group">
                EDU<span className="text-ciec-green group-hover:text-ciec-pistachio transition-colors">PLAY</span>
              </button>
              <p className="text-slate-500 leading-relaxed text-xl font-light">Le partenaire de référence pour l'aménagement technique et paysager au Maroc. Innovation, Design & Sécurité.</p>
              <div className="flex space-x-8">
                {[Facebook, Instagram, Linkedin].map((Social, idx) => (
                  <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-ciec-green transition-all text-slate-500 hover:text-white border border-white/5 shadow-2xl"><Social size={24} /></a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black mb-12 text-white tracking-[0.4em] uppercase">Services</h4>
              <ul className="space-y-8">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}><button onClick={() => navigateTo('category', cat.id)} className="text-slate-500 hover:text-ciec-pistachio transition-colors text-left text-sm font-semibold tracking-wide">{cat.title}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black mb-12 text-white tracking-[0.4em] uppercase">Entreprise</h4>
              <ul className="space-y-8">
                <li><button onClick={handleBackToHome} className="text-slate-500 hover:text-ciec-pistachio transition-colors text-sm font-semibold tracking-wide">Accueil</button></li>
                <li><button onClick={() => navigateTo('about')} className="text-slate-500 hover:text-ciec-pistachio transition-colors text-sm font-semibold tracking-wide">Notre Expertise</button></li>
                <li><button onClick={() => navigateTo('projects')} className="text-slate-500 hover:text-ciec-pistachio transition-colors text-sm font-semibold tracking-wide">Portfolio</button></li>
                <li><button onClick={() => navigateTo('stats')} className="text-slate-500 hover:text-ciec-pistachio transition-colors text-sm font-semibold tracking-wide">Indices de Performance</button></li>
              </ul>
            </div>

            <div className="space-y-12">
              <h4 className="text-xs font-black mb-12 text-white tracking-[0.4em] uppercase">Contact</h4>
              <ul className="space-y-10">
                <li className="flex items-start gap-8">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="text-ciec-orange" size={24} />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed font-light mt-1">Casablanca Finance City, Tour Emergence, Casablanca, Maroc</span>
                </li>
                <li className="flex items-center gap-8">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <Mail className="text-ciec-green" size={24} />
                  </div>
                  <a href="mailto:contact@eduplay.ma" className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">contact@eduplay.ma</a>
                </li>
                <li className="flex items-center gap-8">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <Phone className="text-ciec-pistachio" size={24} />
                  </div>
                  <a href="tel:+212522000000" className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">+212 522 00 00 00</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">
            <p>&copy; {new Date().getFullYear()} EDUPLAY INTERNATIONAL GROUP S.A.</p>
            <div className="flex gap-16">
              <a href="#" className="hover:text-white transition-colors">Politique Qualité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions Générales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
