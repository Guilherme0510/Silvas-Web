import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aumente sua credibilidade com avaliações 5 estrelas no Google
            </h1>
            <p className="text-xl mb-6">
              Destaque seu negócio com avaliações positivas e atraia mais clientes. Resultados garantidos!
            </p>
            <div className="flex items-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 mr-1" fill="currentColor" />
              ))}
              <span className="ml-2 text-lg">Milhares de empresas satisfeitas</span>
            </div>
            <a 
              href="#planos" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Ver Planos
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Star className="h-6 w-6 text-blue-600" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold">Restaurante Exemplo</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Ótimo atendimento e comida maravilhosa! Recomendo a todos!"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl absolute top-10 -right-5 transform -rotate-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Star className="h-6 w-6 text-red-600" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold">Clínica Exemplo</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Profissionais excelentes! Resultado incrível!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;