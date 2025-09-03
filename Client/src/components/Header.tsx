import React from 'react';
import { Star, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:08005802766" className="text-sm hover:text-blue-100">0800 580 2766</a>
            </div>
            <div className="hidden md:flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="https://wa.me/551142006110" className="text-sm hover:text-blue-100">WhatsApp: (11) 4200-6110</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-8 mr-2"
            />
            <img 
              src="https://lh3.googleusercontent.com/8Vw-7MAm558750a4M55fiOlUf7lP2cYnFuqSWynzMIgXrGGz6Dv2WyVzEhxvQZ3-FXwUQZz89rU=e14-rj-sc0xffffff-h36-w36"
              alt="Google Business"
              className="h-8"
            />
          </div>
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-2" fill="currentColor" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
              GMaps Brasil
            </span>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a></li>
            <li><a href="#planos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Planos</a></li>
            <li><a href="#depoimentos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Depoimentos</a></li>
            <li><a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;