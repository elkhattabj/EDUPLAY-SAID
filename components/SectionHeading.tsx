
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-20 ${center ? 'text-center' : ''} group`}>
      <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`}>
        <div className="w-10 h-1 bg-ciec-pistachio rounded-full" />
        <span className="text-ciec-green font-bold uppercase tracking-[0.3em] text-[10px]">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
        {title.split(' ').map((word, i) => {
          // Precise color accents based on CIEC brand
          const colorClass = i % 4 === 1 ? "text-ciec-orange" : (i % 4 === 2 ? "text-ciec-green" : "");
          return (
            <span key={i} className={colorClass}>{word} </span>
          );
        })}
      </h2>
      <div className={`h-1.5 bg-gradient-to-r from-ciec-green via-ciec-pistachio to-ciec-orange mt-10 rounded-full transition-all duration-1000 ease-out group-hover:w-80 ${center ? 'mx-auto w-32' : 'w-24'}`} />
    </div>
  );
};

export default SectionHeading;
