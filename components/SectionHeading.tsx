
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-slate-900 leading-tight">
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-orange-600 mt-6 rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
