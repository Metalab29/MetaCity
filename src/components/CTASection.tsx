import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Trading Across the Metaverse!
          </h2>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
            >
              Join Waitlist
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;