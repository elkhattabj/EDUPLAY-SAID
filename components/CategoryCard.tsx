
import React from 'react';
import { Category } from '../types';
import * as Icons from 'lucide-react';

interface Props {
  category: any;
  onSelect: (id: string) => void;
}

const CategoryCard: React.FC<Props> = ({ category, onSelect }) => {
  const LucideIcon = (Icons as any)[category.icon] || Icons.HelpCircle;

  return (
    <div 
      onClick={() => onSelect(category.id)}
      className="group relative bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 h-[550px] cursor-pointer border border-slate-100"
    >
      {/* Background with zoom effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
      <img 
        src={category.image} 
        alt={category.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
      />
      
      {/* Floating Category Icon */}
      <div className="absolute top-8 left-8 z-20">
        <div className={`glass p-5 rounded-2xl shadow-xl transform transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 ${category.color}`}>
          <LucideIcon size={32} strokeWidth={2} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
        <h3 className="text-3xl font-bold font-heading text-white mb-4 tracking-tight group-hover:text-ciec-pistachio transition-colors leading-tight">
          {category.title}
        </h3>
        
        <div className="relative overflow-hidden mb-8 h-16">
          <p className="text-white/80 text-sm leading-relaxed transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out font-medium line-clamp-2">
            {category.description}
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="bg-ciec-green hover:bg-ciec-green/90 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 btn-shadow">
            Consulter
          </button>
          <div className="flex items-center gap-2 text-white/50 group-hover:text-ciec-pistachio transition-colors text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-500">
            En savoir plus <Icons.ArrowRight size={14} />
          </div>
        </div>
      </div>
      
      {/* Accent bottom line */}
      <div className={`absolute bottom-0 left-0 h-1.5 transition-all duration-700 w-0 group-hover:w-full`} style={{backgroundColor: category.accent}}></div>
    </div>
  );
};

export default CategoryCard;
