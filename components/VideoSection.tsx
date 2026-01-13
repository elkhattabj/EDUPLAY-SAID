
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { VIDEOS } from '../constants';

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Démo Produits</span>
          <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-slate-900 leading-tight">EDUPLAY en action</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group relative rounded-3xl overflow-hidden cursor-pointer" onClick={() => setSelectedVideo(video.videoUrl)}>
              <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-orange-600 p-4 rounded-full text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors" onClick={() => setSelectedVideo(null)}>
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            <video src={selectedVideo} controls autoPlay className="w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
