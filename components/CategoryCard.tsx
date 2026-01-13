
import React from 'react';
import { Category } from '../types';
import * as Icons from 'lucide-react';

interface Props {
  category: Category;
  onSelect: (id: string) => void;
}

const CategoryCard: React.FC<Props> = ({ category, onSelect }) => {
  // Dynamically get the icon from lucide-react
  const LucideIcon = (Icons as any)[category.icon] || Icons.HelpCircle;

  return (
    <div 
      onClick={() => onSelect(category.id)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[400px] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
      <img 
        src={category.image} 
        alt={category.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-600/30 transform group-hover:rotate-12 transition-transform">
          <LucideIcon size={24} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform group-hover:translate-y-[-20px] transition-transform duration-500">
        <h3 className="text-2xl font-bold font-fredoka text-white mb-2">{category.title}</h3>
        <p className="text-white/80 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {category.description}
        </p>
        <button className="flex items-center text-orange-400 font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
          En savoir plus <Icons.ChevronRight className="ml-1" size={16} />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
