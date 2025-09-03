import React from "react";
import {  Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone className="h-4 w-4" />
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://wa.me/5511932911121"
                className="text-sm hover:text-blue-100"
              >
                WhatsApp: (11) 93291-1121
              </a>
              <a
                href="https://wa.me/5511940518638"
                className="text-sm hover:text-blue-100"
              >
                WhatsApp: (11) 94051-8638
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            Logo
          </div>
          
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#planos"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
