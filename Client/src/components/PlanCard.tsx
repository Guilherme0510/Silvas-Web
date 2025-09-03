import React from 'react';
import { Star } from 'lucide-react';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  const isPopular = plan.id === 'standard';
  
  return (
    <div className={`
      bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
      ${isPopular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}
    `}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 text-sm font-bold transform translate-x-8 translate-y-2 rotate-45">
          Popular
        </div>
      )}
      
      <div className={`p-6 ${isPopular ? 'bg-blue-50' : ''}`}>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
          </div>
          <p className="mt-2 text-gray-600">
            {plan.reviews} avaliações 5 estrelas
          </p>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <ul className="space-y-3">
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Avaliações 100% reais</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Avaliações verificadas</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Entrega em até 7 dias</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">Suporte personalizado</span>
          </li>
        </ul>
        
        <button 
          onClick={() => onSelect(plan)}
          className={`
            mt-6 w-full py-3 px-4 rounded-lg font-bold text-center transition-colors duration-200 
            ${isPopular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
            }
          `}
        >
          Selecionar Plano
        </button>
      </div>
    </div>
  );
};

export default PlanCard;