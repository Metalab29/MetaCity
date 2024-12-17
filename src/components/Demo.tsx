import React from 'react';
import { Play } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Demo thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-full transform group-hover:scale-110 transition-all">
                <Play size={32} className="text-white" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of cross-metaverse asset trading with our revolutionary platform.
              Connect your wallet, browse available assets, and execute secure transfers in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;