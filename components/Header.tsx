
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

interface Props {
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onProductsClick?: () => void;
  onProjectsClick?: () => void;
}

const Header: React.FC<Props> = ({ 
  onLogoClick, 
  onAboutClick, 
  onProductsClick, 
  onProjectsClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (label === 'Accueil' && onLogoClick) onLogoClick();
    if (label === 'À propos' && onAboutClick) onAboutClick();
    if (label === 'Produits' && onProductsClick) onProductsClick();
    if (label === 'Réalisations' && onProjectsClick) onProjectsClick();
    if (label === 'Nos Clients') {
      const el = document.getElementById('clients');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Accueil' },
    { label: 'À propos' },
    { label: 'Produits' },
    { label: 'Réalisations' },
    { label: 'Nos Clients' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {!isScrolled && (
          <div className="hidden lg:flex justify-between items-center text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center space-x-10">
              <a href="tel:+212522000000" className="flex items-center gap-2 hover:text-ciec-pistachio transition-colors">
                <Phone size={14} className="text-ciec-pistachio" /> +212 522 00 00 00
              </a>
              <a href="mailto:contact@eduplay.ma" className="flex items-center gap-2 hover:text-ciec-pistachio transition-colors">
                <Mail size={14} className="text-ciec-pistachio" /> contact@eduplay.ma
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2 cursor-pointer hover:text-ciec-pistachio transition-colors">
                <Globe size={14} /> FR / EN
              </span>
            </div>
          </div>
        )}

        <nav className="flex items-center justify-between">
          <button onClick={onLogoClick} className="flex items-center gap-2 group">
            <h1 className={`text-4xl font-extrabold font-heading tracking-tighter transition-all duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              EDU<span className="text-ciec-green group-hover:text-ciec-pistachio transition-colors">PLAY</span>
            </h1>
          </button>

          <ul className={`hidden lg:flex items-center space-x-12 font-bold text-[11px] tracking-[0.2em] uppercase ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, item.label)}
                  className="hover:text-ciec-green transition-all relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ciec-pistachio transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className={`px-10 py-3.5 rounded-xl transition-all duration-300 shadow-xl active:scale-95 flex items-center gap-2 uppercase tracking-widest text-[10px] font-black ${
                  isScrolled 
                    ? 'bg-ciec-green text-white hover:bg-ciec-green/90 btn-shadow' 
                    : 'bg-white text-ciec-green hover:bg-slate-50'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <button 
            className={`lg:hidden p-3 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      <div className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden z-50 ${isMenuOpen ? 'top-[60px] h-screen py-16 opacity-100' : 'top-[-100vh] h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center space-y-10 font-bold text-sm tracking-[0.3em] uppercase text-slate-800">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button onClick={(e) => handleLinkClick(e, item.label)} className="hover:text-ciec-green transition-colors">
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-8 w-full px-12">
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-ciec-green text-white w-full py-5 rounded-2xl shadow-xl shadow-ciec-green/20 block text-center active:scale-95">
              NOUS CONTACTER
            </a>
          </li>
        </ul>
        <div className="mt-20 flex justify-center space-x-10 text-slate-400">
          <Facebook size={28} />
          <Instagram size={28} />
          <Linkedin size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
