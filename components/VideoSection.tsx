
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { VIDEOS } from '../constants';

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-ciec-green/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-1 bg-ciec-pistachio rounded-full" />
            <span className="text-ciec-green font-bold uppercase tracking-[0.3em] text-[10px]">Présentation Vidéo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-tight tracking-tight uppercase">
            EDU<span className="text-ciec-green">PLAY</span> En Action
          </h2>
          <div className="h-1.5 w-24 bg-ciec-orange mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="group relative rounded-[32px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 bg-white"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-ciec-green text-white p-6 rounded-2xl shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-500 btn-shadow">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-8 border-t border-slate-50">
                <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-ciec-green transition-colors">{video.title}</h4>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-black">Expertise EDUPLAY</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12">
          <button 
            className="absolute top-8 right-8 text-white hover:text-ciec-pistachio transition-colors p-4 rounded-full bg-white/10" 
            onClick={() => setSelectedVideo(null)}
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,141,65,0.3)] border border-white/10">
            <video src={selectedVideo} controls autoPlay className="w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
