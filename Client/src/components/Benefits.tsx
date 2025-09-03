import React from 'react';
import { TrendingUp, Users, Clock, BarChart4 } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossas avaliações?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Potencialize o crescimento do seu negócio com avaliações que realmente fazem diferença.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Aumento de Visibilidade</h3>
            <p className="text-gray-600">
              Apareça nas primeiras posições de busca do Google com melhores avaliações.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Mais Clientes</h3>
            <p className="text-gray-600">
              Atraia novos clientes e aumente suas vendas com uma melhor reputação online.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg">
            <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Entrega Rápida</h3>
            <p className="text-gray-600">
              Avaliações publicadas em até 7 dias, com resultados imediatos para o seu negócio.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <BarChart4 className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">ROI Comprovado</h3>
            <p className="text-gray-600">
              Investimento com retorno garantido através do aumento de clientes e vendas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;