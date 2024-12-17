import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate("/dapp"); // Navigate to /app
  };

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            MetaCity
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-purple-400 transition-colors">Features</a>
            <a href="#demo" className="text-white hover:text-purple-400 transition-colors">Demo</a>
            <a href="#partners" className="text-white hover:text-purple-400 transition-colors">Partners</a>
            {/* <a href="/dapp" className="text-white hover:text-purple-400 transition-colors">Launch DApp</a> */}
            <button onClick={handleLaunchClick} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
              <Wallet size={20} />
              Launch Dapp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-white hover:text-purple-400 transition-colors">Features</a>
              <a href="#demo" className="text-white hover:text-purple-400 transition-colors">Demo</a>
              <a href="#partners" className="text-white hover:text-purple-400 transition-colors">Partners</a>
              {/* <a href="/dapp" className="text-white hover:text-purple-400 transition-colors">Launch DApp</a> */}
              <button onClick={handleLaunchClick} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2">
                <Wallet size={20} />
                Launch Dapp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;