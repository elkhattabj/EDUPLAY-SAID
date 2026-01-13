
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import SectionHeading from './components/SectionHeading';
import AIConsultant from './components/AIConsultant';
import VideoSection from './components/VideoSection';
import CategoryDetailPage from './components/CategoryDetailPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import StatsPage from './components/StatsPage';
import { CATEGORIES, PROJECTS, CLIENTS, STATISTICS } from './constants';
import { 
  MapPin, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter,
  ExternalLink
} from 'lucide-react';

type ViewState = 'home' | 'category' | 'projects' | 'about' | 'stats';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // SVG Patterns for toy-themed backgrounds
  const toyPatternLight = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' opacity='0.08'%3E%3Cpath d='M10 10h15v15H10z' stroke='%23ea580c' stroke-width='1'/%3E%3Ccircle cx='50' cy='20' r='8' stroke='%233b82f6' stroke-width='1'/%3E%3Cpath d='M80 15l10 5-5 10-10-5z' stroke='%23ea580c' stroke-width='1'/%3E%3Crect x='20' y='50' width='20' height='10' rx='2' stroke='%233b82f6' stroke-width='1'/%3E%3Ccircle cx='25' cy='65' r='3' fill='%233b82f6'/%3E%3Ccircle cx='35' cy='65' r='3' fill='%233b82f6'/%3E%3Cpath d='M70 60c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z' stroke='%23ea580c' stroke-width='1'/%3E%3Cpath d='M100 20v15h15' stroke='%233b82f6' stroke-width='1'/%3E%3Cpath d='M10 90l10-10 10 10-10 10z' stroke='%23ea580c' stroke-width='1'/%3E%3Crect x='50' y='90' width='12' height='12' rx='2' stroke='%233b82f6' stroke-width='1'/%3E%3Cpath d='M85 95h20' stroke='%23ea580c' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`;
  const toyPatternDark = `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' opacity='0.04'%3E%3Crect x='20' y='20' width='20' height='20' stroke='white' stroke-width='1.5'/%3E%3Ccircle cx='75' cy='30' r='12' stroke='white' stroke-width='1.5'/%3E%3Cpath d='M110 40l15 10-10 15-15-10z' stroke='white' stroke-width='1.5'/%3E%3Cpath d='M30 80h30v10H30z' stroke='white' stroke-width='1.5'/%3E%3Ccircle cx='35' cy='100' r='4' fill='white'/%3E%3Ccircle cx='55' cy='100' r='4' fill='white'/%3E%3Cpath d='M100 90c5 0 10 5 10 10s-5 10-10 10-10-5-10-10 5-10 10-10z' stroke='white' stroke-width='1.5'/%3E%3Cpath d='M10 120l15 15L10 150' stroke='white' stroke-width='1.5'/%3E%3Crect x='70' y='125' width='15' height='15' stroke='white' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E")`;

  const navigateTo = (view: ViewState, categoryId: string | null = null) => {
    setCurrentView(view);
    setSelectedCategoryId(categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => navigateTo('home');

  const selectedCategory = CATEGORIES.find(c => c.id === selectedCategoryId);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      {/* Global Background Pattern Decoration */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66 3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm54 .241c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ea580c' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

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

          {/* Statistics Section - Nos chiffres clés */}
          <section className="relative py-20 -mt-16 z-20">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border border-orange-50">
                {STATISTICS.map((stat, i) => (
                  <button key={i} onClick={() => navigateTo('stats')} className="flex flex-col items-center text-center p-4 group">
                    <div className={`p-4 rounded-3xl bg-slate-50 ${stat.color} mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                      <stat.icon size={32} strokeWidth={2.5} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold font-fredoka text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-slate-500 font-medium">{stat.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section id="products" className="py-24 container mx-auto px-4 relative">
            <SectionHeading 
              title="Nos Domaines d'Expertise" 
              subtitle="Ce que nous faisons" 
              center 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map(cat => (
                <CategoryCard key={cat.id} category={cat} onSelect={(id) => navigateTo('category', id)} />
              ))}
            </div>
          </section>

          {/* About Section Snippet */}
          <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: toyPatternDark, backgroundSize: '300px' }}></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                  <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">À Propos d'EDUPLAY</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-fredoka mb-8 leading-tight">
                    Leader de l'aménagement ludique et sportif au Maroc
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Depuis plus de 12 ans, EDUPLAY conçoit des espaces qui inspirent le mouvement et la joie. Nous accompagnons les communes, les écoles et les promoteurs immobiliers dans la création d'environnements extérieurs d'exception.
                  </p>
                  <button onClick={() => navigateTo('about')} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all inline-flex items-center group shadow-lg shadow-orange-600/20">
                    En savoir plus <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="lg:w-1/2 w-full">
                  <AIConsultant />
                </div>
              </div>
            </div>
          </section>

          <VideoSection />

          {/* Realizations Snippet */}
          <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: toyPatternLight, backgroundSize: '240px' }}></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <SectionHeading title="Nos Réalisations Récentes" subtitle="Portfolio" />
                <button onClick={() => navigateTo('projects')} className="hidden md:flex items-center gap-2 mb-8 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-2 rounded-full font-bold transition-all group">
                  Voir tout le portfolio <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.slice(0, 3).map(project => (
                  <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                    <div className="relative h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h4>
                      <p className="flex items-center text-slate-500 text-sm">
                        <MapPin size={16} className="mr-1 text-orange-500" /> {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Clients Snippet */}
          <section id="clients" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-16">Ils nous font confiance</h3>
              <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {CLIENTS.map(client => (
                  <div key={client.id} className="h-16 flex items-center justify-center p-2 rounded-xl">
                    <img src={client.logo} alt={client.name} className="max-h-full max-w-[150px] object-contain" />
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
        <ProjectsPage onBack={handleBackToHome} />
      )}

      {currentView === 'about' && (
        <AboutPage onBack={handleBackToHome} />
      )}

      {currentView === 'stats' && (
        <StatsPage onBack={handleBackToHome} />
      )}

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <button onClick={handleBackToHome} className="text-3xl font-bold font-fredoka text-left">EDU<span className="text-orange-500">PLAY</span></button>
              <p className="text-slate-400 leading-relaxed">Votre partenaire de confiance pour des espaces publics et privés vivants, sécurisés et inspirants au Maroc.</p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Social, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all text-slate-400 hover:text-white"><Social size={20} /></a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8 font-fredoka">Nos Services</h4>
              <ul className="space-y-4 text-slate-400">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}><button onClick={() => navigateTo('category', cat.id)} className="hover:text-orange-500 transition-colors text-left">{cat.title}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 font-fredoka">Navigation</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={handleBackToHome} className="hover:text-orange-500 transition-colors">Accueil</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-orange-500 transition-colors">À Propos</button></li>
                <li><button onClick={() => navigateTo('projects')} className="hover:text-orange-500 transition-colors">Réalisations</button></li>
                <li><button onClick={() => navigateTo('stats')} className="hover:text-orange-500 transition-colors">Performance</button></li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold mb-8 font-fredoka tracking-tight">Contact Direct</h4>
              <ul className="space-y-6 text-slate-400">
                <li className="flex items-start gap-4">
                  <MapPin className="text-orange-500 mt-1" size={18} />
                  <span className="text-sm">Casablanca Finance City, Casablanca, Maroc</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-orange-500" size={18} />
                  <a href="tel:+212522000000" className="text-sm">+212 522 00 00 00</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} EDUPLAY. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
