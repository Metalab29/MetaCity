import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate("/dapp"); // Navigate to /app
  };

  const handleMarketClick = () => {
    navigate("/dapp"); // Navigate to /app
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            One Metaverse, Endless Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Bridge your digital assets across virtual worlds seamlessly and securely
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button onClick={handleMarketClick} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transform hover:scale-105 transition-all">
              <ShoppingBag size={24} />
              Explore Marketplace
            </button>
            <button  onClick={handleLaunchClick} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-sm transform hover:scale-105 transition-all">
              Launch DApp
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;