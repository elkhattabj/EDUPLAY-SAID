
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        {!isScrolled && (
          <div className="hidden lg:flex justify-between items-center text-white text-xs mb-3 border-b border-white/20 pb-2">
            <div className="flex items-center space-x-6">
              <a href="tel:+212522000000" className="flex items-center gap-2 hover:text-orange-400 transition-colors tracking-wide">
                <Phone size={14} className="text-orange-400" /> +212 522 00 00 00
              </a>
              <a href="mailto:contact@eduplay.ma" className="flex items-center gap-2 hover:text-orange-400 transition-colors tracking-wide">
                <Mail size={14} className="text-orange-400" /> contact@eduplay.ma
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-2 cursor-pointer hover:text-orange-400 transition-colors">
                <Globe size={14} /> FR / EN
              </span>
            </div>
          </div>
        )}

        <nav className="flex items-center justify-between">
          <button onClick={onLogoClick} className="flex items-center gap-2">
            <h1 className={`text-3xl font-extrabold font-fredoka tracking-tighter transition-all duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              EDU<span className="text-orange-600">PLAY</span>
            </h1>
          </button>

          <ul className={`hidden lg:flex items-center space-x-10 font-bold text-[13px] tracking-widest uppercase ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, item.label)}
                  className="hover:text-orange-600 transition-all relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className={`px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-95 flex items-center gap-2 ${
                  isScrolled 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-white text-orange-600 hover:bg-orange-50'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      <div className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden z-50 ${isMenuOpen ? 'top-[60px] max-h-screen py-10 opacity-100' : 'top-[-100%] max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center space-y-8 font-bold text-lg tracking-widest uppercase text-slate-800">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button onClick={(e) => handleLinkClick(e, item.label)} className="hover:text-orange-600 transition-colors">
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-orange-600 text-white px-12 py-4 rounded-full shadow-xl shadow-orange-600/30 inline-block active:scale-95">
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-12 flex justify-center space-x-6 text-slate-400">
          <Facebook size={24} />
          <Instagram size={24} />
          <Linkedin size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
